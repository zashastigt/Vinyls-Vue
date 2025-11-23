<script setup>
import {useVinylStore} from "@/data/Store.ts";
import vinyl from "@/data/vinyl.json";
import {computed, onUpdated, ref} from "vue";

const store = useVinylStore()

const outsideColor = computed(() => vinyl[store.selectedVinyl].outsideColor)
</script>

<template>
  <div id="player">
    <div class="playerButton" @click="store.selectedVinyl = null">X</div>
    <div id="plate">
      <div id="record">
        <img id="recordImg" alt="album art" :src="'./record.png'">
        <div id="recordColor">
          <img id="albumArt" alt="album art" :src="`./albumArt/${vinyl[store.selectedVinyl].img}`">
          <div id="discDot"></div>
        </div>
      </div>
    </div>
    <div id="armImg">
      <img id="recordImg" alt="album art" :src="'./arm.png'">
    </div>
  </div>
</template>

<style scoped>
#player {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  aspect-ratio: 1.25/1;
  background-color: #363636;
  border-radius: 5px;
}

.playerButton {
  position: absolute;
  bottom: 2%;
  left: 2%;
  background-color: #111;
  color: #eee;
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
}

#plate {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
}

#record {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  aspect-ratio: 1/1;
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
  position: absolute;
  top: 7%;
  right: 2%;
  height: 70%;
  aspect-ratio: 1/1;
  transform-origin: top center;
  transform: rotate(-10deg);
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