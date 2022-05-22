import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import uView from 'vk-uview-ui'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  app.use(uView)
  return {
    app
  }
}
