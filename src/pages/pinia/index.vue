<template>
  <view class="text-center">
    <view class="h-40 c-red">Pinia(Replace Vuex)</view>
    <text class="font-bold">{{ isEven ? 'Even' : 'Odd' }}</text>
    <text>{{ count }}</text>
    <view>
      <button @click="add">Sync Add</button>
      <button @click="asyncAdd">Async Add</button>
    </view>
  </view>
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
  store.$patch((v) => {
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
<style lang="scss"></style>
