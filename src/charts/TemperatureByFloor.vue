<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'TemperatureGraphByFloor',

  data () {
    return {
      chartData: {}
    }
  },

  async mounted () {
    await this.$http.get('/status/temperature/floor')
      .then(r => {
        r = r.data
        this.chartData = {
          datacollection: {
            labels: [1, 2, 3, 4].map(v => `${v}층`),
            datasets: [
              {
                label: '학봉관 온도',
                data: r
              }
            ]
          }
        }
      })
    this.renderChart(this.chartData.datacollection, {
      responsive: false,
      maintainAsperctRatio: false
    })
  }
}
</script>
