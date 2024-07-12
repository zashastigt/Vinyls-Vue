<script setup>
import {useVinylStore} from "@/data/Store.ts";
import vinyl from "@/data/vinyl.json";
import {computed, onUpdated, ref} from "vue";

const store = useVinylStore()

const outsideColor = computed(() => vinyl[store.selectedVinyl].outsideColor)
</script>

<template>
  <div id="player">
    <div id="plate">
      <div id="record">
        <img id="recordImg" alt="album art" :src="'/Vinyl-Vue/record.png'">
        <div id="recordColor">
          <img id="albumArt" alt="album art" :src="'/Vinyl-Vue/albumArt/' + vinyl[store.selectedVinyl].img">
          <div id="discDot"></div>
        </div>
      </div>
    </div>
      <div id="armImg">
        <img id="recordImg" alt="album art" :src="'/Vinyl-Vue/arm.png'">
      </div>
  </div>
</template>

<style scoped>
#player {
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  background-color: red;
}

#plate {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 350px;
}

#record {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  animation: rotation 2.5s infinite linear;
}

#recordColor {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(v-bind(outsideColor), 0.8);
  border-radius: 50%;
  height: 100%;
  width: 100%;

}

#recordImg {
  height: 100%;
  width: 100%;
}

#albumArt {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 32%;
  width: 32%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

#discDot {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 3%;
  width: 3%;
  border-radius: 50%;
  background-color: #000;
  transform: translate(-50%, -50%);
}

#armImg {
  transform-origin: top center;
  /*transform: rotate(30deg);*/
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>