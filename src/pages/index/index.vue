<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <van-button type="primary">Vant UI测试</van-button>
    <view><text>Vuex4 Demo</text></view>
    <VuexDemo />
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VuexDemo from '@/components/VuexDemo.vue';

export default defineComponent({
  setup() {
    return {
      title: 'hello',
    };
  },
  components: { VuexDemo },
});
</script>

<style lang="scss">
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: red;
}
</style>
