<template>
  <view class="vuex-demo">
    <text>{{ count }} --- 偶数 {{ isEven ? 'yes' : 'no' }}</text>
    <view>
      <view><button @click="synIncrease">同步增加</button></view>
      <view><button @click="asyncIncrease">异步增加</button></view>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const $store = useStore();
    // 获取state
    const count = computed(() => $store.state.m1.count);
    // 获取getters
    const isEven = computed(() => $store.getters['m1/isEven']);
    // 调用同步方法（mutations）
    const synIncrease = () => $store.commit('m1/increase');
    // 调用异步方法（actions）
    const asyncIncrease = () => $store.dispatch('m1/increase');
    return {
      count,
      isEven,
      synIncrease,
      asyncIncrease,
    };
  },
});
</script>
<style lang="less">
.vuex-demo {
  text-align: center;
}
</style>
