<script setup>
import {ref} from "vue";
import {useVinylStore} from "@/data/Store.ts";

defineProps({
    title:String,
    img:String,
    outsideColor:String,
    selectedVinyl:String,
})

const store = useVinylStore()

const albumHoverState = ref(false)
const animationState = ref('normal')
const hoveredBefore = ref(false)

</script>

<template>
  <div
    id="album"
    :class="{
      albumHover: albumHoverState,
      albumUnhover: !albumHoverState && hoveredBefore,
    }"
    @mouseover="albumHoverState = true, hoveredBefore = true"
    @mouseleave="albumHoverState = false"
    @click="store.selectedVinyl = title"
  >
    <div id="disc" :class="{ selectedAnimation: store.selectedVinyl === title }">
      <div id="discInside">
        <img alt="album art" :src="`./albumArt/${img}`">
      </div>
    </div>
    <img alt="album art" :src="`./albumArt/${img}`">
  </div>
</template>

<style scoped>
#album {
  position: relative;
  height: 200px;
  width: 200px;
  margin: 10px;
  & > img {
    height: 100%;
    width: 100%;
  }
}

#disc {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: rgb(v-bind(outsideColor));
  z-index: -1;
    & img {
    height: 100%;
    width: 100%;
  }
}

#discInside {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45%;
    width: 45%;
    border-radius: 50%;
    overflow: hidden;
}

.albumHover {
  animation: hoverAlbum 0.5s ease forwards;
    & > img {
      animation: hoverImg 0.5s ease forwards;
    }
    & #disc {
      animation: hoverDisc 0.5s ease forwards;
    }
}

.albumUnhover {
  animation: unhoverAlbum 0.5s ease forwards;
    & > img {
      animation: unhoverImg 0.5s ease forwards;
    }
    & #disc {
      animation: unhoverDisc 0.5s ease forwards;
    }
}

.selectedAnimation {
  animation: selectDisc 0.5s ease forwards !important; 
}

@keyframes hoverAlbum {
  0% {
    z-index: 1;
  }
  99% {
    z-index: 2;
  }
  100% {
    z-index: 2;
  }
}

@keyframes unhoverAlbum {
  0% {
    z-index: 1;
  }
  99% {
    z-index: 1;
  }
  100% {
    z-index: 0;
  }
}

@keyframes hoverImg {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes unhoverImg {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes hoverDisc {
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
  }
  100% {
    transform: translateX(100px) rotate(360deg) scale(1.1);
  }
}

@keyframes unhoverDisc {
  0% {
    transform: translateX(100px) rotate(360deg) scale(1.1);
  }
  100% {
    transform: translateX(0) rotate(0deg) scale(1);
  }
}

@keyframes selectDisc {
    0% {
        transform: translateX(0) rotate(0);
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: translateX(200px) rotate(360deg);
        opacity: 0;
        display: none;
    }
}
</style>