<template>
  <a @click="routeHome()">Home</a>
  <a @click="routeViewer()">Viewer</a>
</template>

<script lang="ts">
import consts from '@/common/consts';
import config from '@/config';

export default {
  methods: {
    routeHome() {
      this.$router.push({path: consts.routes.home.path})
    },
    routeViewer() {
      this.$router.push({path: consts.routes.tour.path})
    }
  }
}
</script>

<style scoped>
a {
  color:blue;
  cursor: pointer;
}
</style>