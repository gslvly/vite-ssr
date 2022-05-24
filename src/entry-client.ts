import { createApp } from '@/main'
import { renderToString } from 'vue/server-renderer'
const { app } = createApp()
const str = renderToString(app)

str.then(res => {
  console.log(res)
})
console.log(app)
app.mount('#app')
