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
      <button @click="store.selectedVinyl = null">close</button>
      <iframe
        :src="vinylList[store.selectedVinyl].spotify"
        width="100%" height="352" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
</template>

<style scoped>
iframe {
  background-color: #242424;
}
</style>