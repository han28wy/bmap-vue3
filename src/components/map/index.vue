<script lang="ts" setup>
import {
  initMap,
  resetZoomAndCenter,
  addLabelMarkers,
  getCurrentLocation,
} from './map.ts'
import { showToast } from 'vant'

const makerList = [
  {
    name: '111111',
    longitude: 121.533156,
    latitude: 29.870883,
  },
  {
    name: '22222',
    longitude: 121.86093,
    latitude: 29.918587,
  },
  {
    name: '33333',
    longitude: 121.533256,
    latitude: 29.872883,
  },
]

const state = reactive({
  map: null,
  markers: null,
  zoom: 15,
  zoomOut: 18,
})
const handleClickPoint = (val: any) => {
  const pos = val.data.data.position
  resetZoomAndCenter(state.map, state.zoomOut, [pos[0], pos[1]])
}

initMap('map', { zoom: 15, center: [121.533156, 29.870883] })
  .then((AMap) => {
    state.map = AMap
    addLabelMarkers(state.map, makerList, handleClickPoint)
  })
  .catch((err) => {
    console.log(err)
  })

const reLocate = () => {
  getCurrentLocation().then((res) => {
    if (!res) {
      showToast('定位失败')
    } else {
      const result = [res.position.lng, res.position.lat]
      console.log("🚀 ~ file: index.vue:56 ~ getCurrentLocation ~ result:", result)
    }
  })
}
const resetMap = () => {}
</script>

<template> 
  <div class="wrapper">
    <div style="width:100%; height:400px">
    <div style="z-index: 2000; position: absolute; top: 0.5rem; left: 0.5rem">
      <van-button size="small" @click="resetMap">返回</van-button>
    </div>
    <div
      style="z-index: 2000; position: absolute; top: 0.5rem; right: 0.5rem"
      @click="reLocate"
    >
     定位
    </div>
    <div id="map" ref="map" style="height:100%; width: 100%"></div>
   </div>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
    // width: 100%;
    // height: 100%;
}
</style>
