<script>
import TemperatureChartByFloor from '@/charts/TemperatureByFloor'
import TemperatureChartByTime from '@/charts/TemperatureByTime'
import Hakbonggwan from '@/components/Hakbonggwan'

export default {
  name: 'Main',
  components: { TemperatureChartByFloor, TemperatureChartByTime, Hakbonggwan },
  data () {
    return {
      buildingInfo: {},
      status: {
        warning: [],
        fire: []
      }
    }
  },
  created () {
    this.$http.get('/status/fire').then(r => {
      this.status = r.data
    })
    this.$http.get('/building').then(r => {
      this.buildingInfo = r.data
    })
  }
}
</script>

<template>
<div class="main">
  <h1>{{ `10분 이내 화재 발생 ${status.fire.length}건, 화재 의심 ${status.warning.length}건` }}</h1>
  <div class="chart">
    <TemperatureChartByFloor id="t-chart" :width="300"/>
    <TemperatureChartByTime id="t-chart" :width="300"/>
    <Hakbonggwan />
  </div>
</div>
</template>

<style>
.main {
  padding-top: 10px;
  padding-left: 17px;
}

.chart {
  display: flex;
}
</style>
