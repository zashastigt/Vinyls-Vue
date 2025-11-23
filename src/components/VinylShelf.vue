<script setup>
import {onUpdated, ref} from "vue";
import vinyl from "@/data/vinyl.json";
import Disc from "@/components/Disc.vue";
import ShelfDisc from "./ShelfDisc.vue";

defineProps({
    selectedVinyl:String,
})

const vinylList = ref(vinyl)
</script>

<template>
    <div id="vinylList">
        <ShelfDisc
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
        flex-direction: row-reverse;
        width: 80%;
        margin: 100px 50px;
    }
</style>