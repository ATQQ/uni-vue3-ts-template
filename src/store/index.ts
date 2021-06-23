import { createStore } from 'vuex';
import test from './modules/test';

// Create a new store instance.
const store = createStore({
  modules: {
    m1: test,
  },
});

export default store;
