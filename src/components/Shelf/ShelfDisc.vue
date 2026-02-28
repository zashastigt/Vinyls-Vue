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
    <img alt="album art" :src="`./albumArt/${img}`">
    <div id="disc">
      <div id="discInside">
        <img alt="album art" :src="`./albumArt/${img}`">
      </div>
    </div>
  </div>
</template>

<style scoped>
#album {
    position: relative;
    height: 200px;
    width: 200px;
    margin: 0 -80px;
    transform-style: preserve-3d;
    transform: rotateX(-15deg) rotateY(-50deg);
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
    animation-name: hoverAlbum;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
}

#album:hover #disc {
    animation-name: selectDisc;
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
    50% {
        transform: translateX(100px) translateY(50px) rotateX(-15deg) rotateY(-60deg);
    }

    100% {
        transform: translateX(-100px) translateY(50px) rotateX(0deg) rotateY(0deg) scale(1.1);
        z-index: 1;
    }
}

@keyframes selectDisc {
    75% {
        transform: translateX(0) rotate(0);
    }

    100% {
        transform: translateX(100px) rotate(360deg) scale(1.1);
    }
}
</style>