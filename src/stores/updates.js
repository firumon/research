import { defineStore } from 'pinia'

export const useUpdateStore = defineStore('updates', {
  state: () => ({
    changes: {}
  }),
})
