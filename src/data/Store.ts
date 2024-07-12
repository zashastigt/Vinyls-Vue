import {defineStore} from "pinia";

export const useVinylStore = defineStore('vinyl', {
  state: () => ({
    selectedVinyl: null
  })
})