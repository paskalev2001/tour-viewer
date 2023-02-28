<template>
  <div id="main">
    <div>
      <div class="gallery" v-for="img of images" @click="setSelectedUrl(img.fileName)">
        <img :src="img.fileName" />
        <div class="file-name">{{ img.fileName }}</div>
      </div>
    </div>
    <div ref="viewer" id="viewer" style="width: 960px; height: 720px"></div>

    <div class="nav-map">
      <img src="../assets/img/floor-plan.jpg" />
      <!-- <a
        class="nav-dot"
        @click="setSelectedUrl(img.url)"
        v-for="img of images"
        :style="setCssPosition(img.coordinates.x, img.coordinates.y)"
      ></a> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Viewer } from '@photo-sphere-viewer/core'
import test from '@/common/test_data'
import '@photo-sphere-viewer/core/index.scss'
import config from '@/config'

export default {
  data() {
    return {
      panoramaUrl: '/src/assets/img/img2.jpg',
      viewer: null as Viewer | null,
      yamlData: null,
    }
  },
  props: {
    key: {
      type: String,
    },
    tourId: {
      type: String,
    },
    floorIndex: {
      type: String,
    },
  },
  computed: {
    images() {
      const tour = test.data.get(config.tourId)
      const floor = tour?.floors.get('test-data-1')
      if (!floor) {
        return
      }

      return floor[0].hotspots
    }
  },
  mounted() {
    this.viewer = new Viewer({
      container: this.$refs.viewer as HTMLElement,
      panorama: this.panoramaUrl,
      navbar: false,
      defaultZoomLvl: 0,
      maxFov: 100
    })
  },
  methods: {
    setCssPosition(x: number, y: number) {
      return `position: absolute; bottom: ${x}px; left: ${y}px;`
    },
    setSelectedUrl(url: string) {
      this.panoramaUrl = url
    }
  },
  watch: {
    panoramaUrl(newUrl) {
      if (this.viewer) {
        this.viewer.setPanorama(newUrl)
      }
    }
  },
}

// const viewer = new Viewer({
//   container: 'viewer',
//   panorama: 'https://bimtours-dev.s3.eu-central-1.amazonaws.com/4dFt1rmYFqRI7AxtN8q1SD/1/1/1/1.jpg',
//   navbar: false,
//   defaultZoomLvl: 0,
//   maxFov: 100
// })
</script>

<style scoped>
#main {
  display: grid;
  grid-template-columns: 320px auto auto;
}

.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

.gallery:hover {
  border: 1px solid #777;
}

.gallery img {
  width: 100%;
  height: auto;
}

.file-name {
  padding: 15px;
  text-align: center;
}

.nav-map {
  margin: auto;
  width: 800px;
  height: 600px;
}

.nav-dot {
  border-radius: 60%;
  height: 40px;
  width: 40px;
  border: 6px solid rgb(0, 0, 0);
  background-color: orangered;
}

.nav-dot:hover {
  background-color: rgb(0, 255, 13);
}
</style>
