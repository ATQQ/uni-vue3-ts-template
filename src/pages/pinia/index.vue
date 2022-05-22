<template>
  <div class="pinia-demo">
    <h2>Pinia(Replace Vuex)</h2>
    <h3>{{ isEven ? "Even" : "Odd" }}</h3>
    <h3>{{ count }}</h3>
    <div>
      <button @click="add">Sync Add</button>
      <button @click="asyncAdd">Async Add</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCountStore } from '@/store'

// 获取自定义的store
const store = useCountStore()

// 取需要的 state
const { count } = storeToRefs(store)

// isEven
const isEven = computed(() => store.count % 2 === 0)
// or 从 getters 中获取
// const { isEven } = storeToRefs(store)
// or 从 getters 中获取
// const isEven = computed(() => store.isEven)

// add 方法
const add = () =>
  store.$patch(v => {
    v.count += 1
  })
// or actions
// const add = () => store.synIncrease()

// asyncAdd 方法
// const asyncAdd = () => store.$patch((v) => {
//   setTimeout(() => {
//     v.count++
//   }, 1000)
// })
// or actions
const asyncAdd = () => store.asyncIncrease()
</script>
<style lang="scss">
.pinia-demo {
  text-align: center;

  h2 {
    color: red;
  }

  h3 {
    font-weight: bold;
  }
}
</style>
