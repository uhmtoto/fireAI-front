<script>
export default {
  name: 'Hakbonggwan',
  async mounted () {
    await this.$http.get('/room')
      .then(r => {
        this.rooms = r.data
      })
    this.rooms.forEach(v => {
      this.$http.get(`/status/room/${v.roomNumber}`)
        .then(r => {
          this.temperature[v.roomNumber] = r.data
        })
    })
  },
  data () {
    return {
      temperature: {
        101: {},
        102: {},
        201: {},
        202: {},
        301: {},
        302: {},
        401: {},
        402: {}
      },
      rooms: []
    }
  }
}
</script>

<template>
<table
  class="table"
>
  <caption>학봉관 현황</caption>
  <tbody>
    <tr
      :key="`${floor}f`"
      v-for="floor in 4"
    >
      <th>{{ floor }}층</th>
      <td>
        {{ floor }}01호<br>
        {{ `${temperature[floor * 100 + 1].temperatureLog.value}°C` }}
      </td>
      <td>
        {{ floor }}02호<br>
        {{ `${temperature[floor * 100 + 2].temperatureLog.value}°C` }}
      </td>
    </tr>
  </tbody>
</table>
</template>

<style>
.table {
  width: 100%;
  height: 100%;
  margin-right: 7px;
  border-collapse: collapse;
}

tr,
th,
tbody {
  text-align: center;
  border: 0.7x solid #444444;
  border-collapse: collapse;
}
</style>
