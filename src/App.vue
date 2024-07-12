<script setup>
import VinylList from "@/components/VinylList.vue";
import VinylTable from "@/components/VinylTable.vue";
import Spotify from "@/components/Spotify.vue";
import {onUpdated, ref} from "vue";
import {useVinylStore} from "@/data/Store.ts";
import VinylPlayer from "@/components/VinylPlayer.vue";

const store = useVinylStore()

onUpdated(()=>{
  console.log(store.selectedVinyl)
})

</script>

<template>
  <div id="app">
    <VinylList />
      <div>
        <VinylPlayer />
        <Spotify v-if="store.selectedVinyl !== null" />
        <VinylTable v-else />
      </div>
  </div>

</template>

<style scoped>
#app {
  display: flex;
}
</style>
