<template>
  <view class="index-page">
    <Hello />
    <text class="c-green text-2xl"> 查看其它页面↓ </text>
    <view>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{
        v.title
      }}</navigator>
    </view>
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
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index'
  },
  {
    title: 'UnoCss Demo',
    url: '/pages/unocss/index'
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
  padding: 10rpx;
}
</style>
