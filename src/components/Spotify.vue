<script setup>
import {ref} from "vue";
import vinyl from "@/data/vinyl.json"
import {useVinylStore} from "@/data/Store.ts";

defineProps({
    title:String,
})

const vinylList = ref(vinyl)
const store = useVinylStore()

</script>

<template>
    <div>
      <iframe
        style="border-radius:20px"
        :src="vinylList[store.selectedVinyl].spotify"
        width="100%" height="400" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
</template>

<style scoped>
  div {
    width: 100%;
  }
</style>