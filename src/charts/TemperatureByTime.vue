<script>
import { Line } from 'vue-chartjs'
import { format } from 'date-fns'
import { toDate } from 'unix-timestamp'

export default {
  extends: Line,
  name: 'TemperatureByTime',

  data () {
    return {
      chartData: {}
    }
  },

  async mounted () {
    await this.$http.get('/status/temperature/time')
      .then(r => {
        r = r.data
        this.chartData = {
          datacollection: {
            labels: r.time.map(v => format(toDate(v), 'HH:mm:ss')),
            datasets: [
              {
                label: '1층 평균 온도',
                data: r.temperature.map(v => v[0])
              },
              {
                label: '2층 평균 온도',
                data: r.temperature.map(v => v[1])
              },
              {
                label: '3층 평균 온도',
                data: r.temperature.map(v => v[2])
              },
              {
                label: '4층 평균 온도',
                data: r.temperature.map(v => v[3])
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
