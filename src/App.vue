<script setup>
import VinylList from "@/components/VinylList.vue";
import VinylTable from "@/components/VinylTable.vue";
import Spotify from "@/components/Spotify.vue";
import {onUpdated, ref} from "vue";
import {useVinylStore} from "@/data/Store.ts";
import VinylPlayer from "@/components/VinylPlayer.vue";

const store = useVinylStore()
</script>

<template>
  <div id="app">
    <div id="leftSide">
      <VinylList />
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
  background-color: #242424;
}

#leftSide {
  width: 60%;
}

#rightSide {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
}

#albumSelected {
  width: 100%;
}
</style>
