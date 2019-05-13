<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'TemperatureGraph',

  data () {
    return {
      chartData: {},
      options: {
        responsive: false,
        maintainAsperctRatio: false
      }
    }
  },

  async mounted () {
    await this.$http.get('/log/type/temperature')
      .then(r => {
        r = r.data
        this.chartData = {
          datacollection: {
            labels: r.map(v => new Date(v.time * 1000)),
            datasets: [
              {
                label: '학봉관 2층',
                data: [20, 24, 30, 99]
              },
              {
                label: '학봉관 3층',
                data: [20, 21, 14, 120]
              }
            ]
          }
        }
      })
    this.renderChart(this.chartData.datacollection, this.options)
  }
}
</script>
