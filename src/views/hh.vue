<template>
  <div>我是hh</div>
  {{ msg }}
</template>

<script setup>
import { asyncFetch } from '@/ssr-fetch'
import { ref } from 'vue'
const msg = ref()
const getData = () => {
  return new Promise(res => {
    setTimeout(() => {
      res('hhdata')
    })
  }).then(res => (msg.value = res))
}
await getData()
</script>
