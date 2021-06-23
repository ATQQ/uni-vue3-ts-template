import { Module } from 'vuex';

interface State {
  count: number;
}

const store: Module<State, unknown> = {
  namespaced: true,
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    isEven(state) {
      return state.count % 2 === 0;
    },
  },
  // 只能同步
  mutations: {
    increase(state, num = 1) {
      state.count += num;
    },
    decrease(state) {
      state.count -= 1;
    },
  },
  // 支持异步,可以考虑引入API
  actions: {
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 1000);
    },
  },
};

export default store;
