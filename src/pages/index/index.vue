<template>
  <view class="index-page">
    <Hello />
    <h2>
      查看其它页面↓
    </h2>
    <div>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{
        v.title
      }}</navigator>
    </div>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Hello from '@/components/hello/index.vue'

const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index'
  },
  {
    title: 'Axios Demo',
    url: '/pages/axios/index'
  }
])
</script>

<style scoped>
.index-page {
  font-style: normal;
  text-align: center;
}

navigator {
  color: #1e80ff;
}
</style>
