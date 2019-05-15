<script>
import sensors from '@/datas/sensors'

export default {
  name: 'RegisterSensor',
  data () {
    return {
      rooms: [],
      form: {
        name: '',
        type: '',
        room: ''
      }
    }
  },
  computed: {
    sensors: () => sensors
  },
  methods: {
    async register () {
      this.form.room = this.rooms.find(v => v.name === this.form.room)._id
      this.form.type = sensors.find(v => v.kor === this.form.type).eng
      await this.$http.post('/sensor', this.form)
        .then(r => {
          this.$swal('성공', '센서를 성공적으로 등록했습니다.', 'success')
        })
        .catch(e => {
          this.$swal('오류', e.response.data.error, 'error')
        })
      this.form = {
        name: '', type: '', room: ''
      }
    }
  },
  created () {
    this.$http.get('/room')
      .then(r => {
        this.rooms = r.data
      })
  }
}
</script>

<template>
<div class="container">
  <h1>센서 등록</h1>
  <input
    class="input"
    v-model="form.name"
    placeholder="센서 이름"
  />

  <input
    class="input"
    v-model="form.room"
    placeholder="설치된 호실"
    list="rooms"
  />
  <datalist
    id="rooms"
  >
    <option
      :key="`room-${room.eng}`"
      :value="room.name"
      v-for="room in rooms"
    >
      {{ room.name }}
    </option>
  </datalist>

  <input
    class="input"
    v-model="form.type"
    placeholder="센서 종류"
    list="sensors"
  />
  <datalist
    id="sensors"
  >
    <option
      :key="`sensor-${sensor.eng}`"
      :value="sensor.kor"
      v-for="sensor in sensors"
    >
      {{ sensor.kor }}
    </option>
  </datalist>

  <button
    class="button"
    @click="register"
  >
    등록
  </button>
</div>
</template>

<style>
.container {
  margin-top: 7%;
  margin-left: 15px;
}

@media (min-width: 500px) {
  .container {
    margin-left: 15%;
  }
}

.input {
  border-radius: 50px;
  outline: none;
  padding: 1em;
  border: 0;
  background-color: rgb(245, 245, 245);
  font-size: 1em;
}

.input:not(:last-child) {
  margin-bottom: 15px;
  margin-right: 5px;
}

.button {
  border-radius: 50px;
  outline: none;
  padding: 1em;
  border: 0;
  background-color: rgb(245, 245, 245);
  font-size: 1em;
}
</style>
