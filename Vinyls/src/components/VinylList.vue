<script setup>
import {onUpdated, ref} from "vue";
import vinyl from "@/data/vinyl.json"
import Disc from "@/components/Disc.vue";

defineProps({
    selectedVinyl:String,
})


const vinylList = ref(vinyl)
const discPlayer = ref('Demon Days')
console.log(discPlayer.value)

onUpdated(()=>{
  console.log(discPlayer.value)
})
</script>

<template>
    <div id="vinylList">
        <Disc
          v-for="vinyl in vinylList"
          @click="discPlayer = vinyl.title"
          :img="vinyl.img"
          :title="vinyl.title"
          :inside-color="vinyl.insideColor"
          :outside-color="vinyl.outsideColor"
          :selected-vinyl="selectedVinyl"
          :disc-player="discPlayer"
        />
    </div>
</template>

<style scoped>
    #vinylList {
        display: flex;
        flex-wrap: wrap;
        width: 75%;
    }
</style>