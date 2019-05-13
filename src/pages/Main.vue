<script>
import TemperatureChart from '@/charts/Temperature'

export default {
  name: 'Main',
  components: { TemperatureChart },
  data () {
    return {
      status: {}
    }
  },
  created () {
    this.$http.get('/status').then(r => {
      this.status = r.data
    })
  }
}
</script>

<template>
<div class="main">
  <h2>{{ `현재 화재 발생 ${status.fire.length}건, 화재 의심 ${status.warning.length}건` }}</h2>
  <TemperatureChart />
</div>
</template>

<style>
.main {
  padding-top: 15px;
  padding-left: 30px;
}
</style>
