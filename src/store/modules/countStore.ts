import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => ({
    // all these properties will have their type inferred automatically
    count: 0
  }),
  getters: {
    isEven: (state) => state.count % 2 === 0
  },
  actions: {
    synIncrease() {
      this.count += 1
    },
    async asyncIncrease() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.count += 1
    }
  }
})

export default useStore
