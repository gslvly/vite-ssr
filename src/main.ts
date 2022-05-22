import { createSSRApp } from 'vue'
import App from './App.vue'
import { router } from './router'

export const createApp = () => {
  const app = createSSRApp(App).use(router)
  return { app, router }
}
