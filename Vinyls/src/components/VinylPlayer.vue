<script setup>
import {useVinylStore} from "@/data/Store.ts";

const store = useVinylStore()
</script>

<template>
  <div id="player">
    <p>{{ store.selectedVinyl }}</p>
  </div>
</template>

<style scoped>
#player {
  height: 100px;
  width: 100px;
  background-color: red;
}
</style>