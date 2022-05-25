import { createApp } from '@/main'
import { renderToString} from 'vue/server-renderer'
const { app, router } = createApp()
await router.isReady()
console.log(router.currentRoute.value.fullPath)
const str = await renderToString(app)
console.log(str)
app.mount('#app')

fetch('/about')
  .then(res => res.text())
  .then(str => {
    return new DOMParser().parseFromString(str, 'text/html')
  })
  .then(res => res.querySelector('#app')?.innerHTML)
  .then(str1 => {
    return Promise.all([str, str1])
  })
  .then(res => {
    console.log(res[0] === res[1])

    for (let i = 0; i < 300; i++)
      if (res[0][i] !== res[1][i]) {
        console.log([res[0].substring(i - 20), res[1].substring(i - 20)])
        break
      }
  })
