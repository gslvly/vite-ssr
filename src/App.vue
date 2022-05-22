<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <router-link to="/about">about</router-link>
  </div>
  <div>
    <router-link to="/home">home</router-link>
  </div>
  <div style="margin-top: 10px">
    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- 主要内容 -->
        <component :is="Component"></component>

        <!-- 加载中状态 -->
        <template #fallback> 正在加载... </template>
      </Suspense>
    </router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
