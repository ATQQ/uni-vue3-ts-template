<template>
  <view class="hello">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="scss-title">这是scss 全局变量的样式</view>
    <view class="less-title">这是less 全局变量的样式</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

<style lang="scss" scoped>
.scss-title {
  font-size: $title-size;
  color: $title-color;
}
</style>

<style lang="less" scoped>
.less-title {
  font-size: @title-size;
  color: @title-color;
}
</style>
