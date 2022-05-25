<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { asyncFetch } from '@/ssr-fetch'
const HH = defineAsyncComponent(() => import('./hh.vue'))
defineProps<{ msg: string }>()
const count = ref(0)
const a = () => {
  return new Promise(res => {
    setTimeout(() => {
      count.value += 100
      res(count.value)
    }, 300)
  })
}

await a()
</script>

<template>
  <HH></HH>
  <h1>{{ count }}</h1>
  about
</template>

<style >
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
