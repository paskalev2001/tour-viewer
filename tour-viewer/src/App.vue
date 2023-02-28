<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Header.vue';
import consts from './common/consts';
import config from './config';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <Navigation/>
      </nav>
      <!-- <nav>
        <RouterLink :to="consts.routes.home.path">Home</RouterLink>
        <RouterLink :to="{ name: 'viewer-tours', params: {key:config.key, tourId: config.tourId}}">Viewer</RouterLink>
      </nav> -->
    </div>
    <RouterView />
  </header>
  <!-- 
  <RouterView /> -->
</template>

<style scoped>
nav {
  text-align: center;
  display: flex;
  align-self: auto;
  align-items: flex-start;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: rgb(73, 232, 0);
}
</style>
