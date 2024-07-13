<script setup>
import {onUpdated, ref} from "vue";
import vinyl from "@/data/vinyl.json";
import Disc from "@/components/Disc.vue";

defineProps({
    selectedVinyl:String,
})

const vinylList = ref(vinyl)
</script>

<template>
    <div id="vinylList">
        <Disc
          v-for="vinyl in vinylList"
          :img="vinyl.img"
          :title="vinyl.title"
          :outside-color="vinyl.outsideColor"
          :selected-vinyl="selectedVinyl"
        />
    </div>
</template>

<style scoped>
    #vinylList {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
</style>