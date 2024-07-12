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

</script>

<template>
  <div id="album" @click="store.selectedVinyl = title">
    <img alt="album art" :src="'/Vinyl-Vue/albumArt/' + img">
    <div id="disc">
      <div id="discInside">
        <img alt="album art" :src="'/Vinyl-Vue/albumArt/' + img">
      </div>
    </div>
  </div>
</template>

<style scoped>
#album {
  position: relative;
  height: 200px;
  width: 200px;
  margin: 10px;
}

#album img {
  height: 100%;
  width: 100%;
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
}

#album:hover img {
  transform: scale(1.1);
  z-index: 2;
  transition: 0.5s;
}

#album:hover {
  z-index: 2;
}

#album:hover #disc {
    animation-name: hoverAlbum;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    z-index: -1;
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

@keyframes hoverAlbum {
    0% {
        transform: translateX(0) rotate(0) scale(1);
    }

    100% {
        transform: translateX(100px) rotate(360deg) scale(1.1);
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
    }
}
</style>