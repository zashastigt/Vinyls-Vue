<script setup>
import {useVinylStore} from "@/data/Store.ts";

const store = useVinylStore()
</script>

<template>
  <div id="player">
    <div id="disc">{{ store.selectedVinyl }}</div>
  </div>
</template>

<style scoped>
#player {
  height: 100px;
  width: 100px;
  background-color: red;
}

#disc {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #535bf2;
}
</style>