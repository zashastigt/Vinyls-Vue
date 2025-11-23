<script setup>
import VinylList from "@/components/VinylList.vue";
import VinylTable from "@/components/VinylTable.vue";
import Spotify from "@/components/Spotify.vue";
import {useVinylStore} from "@/data/Store.ts";
import VinylPlayer from "@/components/VinylPlayer.vue";
import { ref } from "vue";
import VinylShelf from "./components/VinylShelf.vue";

const store = useVinylStore()

const type = ref(false)
</script>

<template>
  <div id="app">
    <div id="leftSide">
      <VinylList v-if="!type" />
      <VinylShelf v-if="type" />
    </div>
    <div id="rightSide">
      <div id="albumSelected" v-if="store.selectedVinyl !== null">
        <VinylPlayer />
        <Spotify />
      </div>
      <VinylTable v-else />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  background-color: #242424;
}

#leftSide {
  width: 60%;
}

#rightSide {
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
}

#albumSelected {
  width: 100%;
}
</style>
