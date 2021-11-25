<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <van-button @click="handleChangeTitle" type="primary">Vant UI({{ num }})</van-button>
    <view><text>Vuex4 Demo</text></view>
    <VuexDemo />
    <van-button type="primary" @click="handleHttp">Login 测试</van-button>
    <view>
      <text class="less-style">less style</text>
    </view>
    <view>
      <text class="text-xl font-bold text-red-500">tailwindcss</text>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import VuexDemo from '@/components/VuexDemo.vue';
import { userApi } from '@/api';

export default defineComponent({
  setup() {
    const handleHttp = () => {
      userApi
        .login('account', '123456')
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const data = reactive({
      num: 'hello world',
    });
    const handleChangeTitle = () => {
      data.num = `${Math.round(Math.random() * 100)}`;
    };
    return {
      title: 'hello world',
      ...toRefs(data),
      handleHttp,
      handleChangeTitle,
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

<style lang="less">
.less-style {
  color: purple;
  font-size: 40upx;
}
</style>
