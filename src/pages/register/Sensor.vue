<script>
import sensors from '@/datas/sensors'

export default {
  name: 'RegisterSensor',
  data () {
    return {
      form: {
        name: '',
        type: '',
        floor: null,
        position: null
      }
    }
  },
  computed: {
    sensors: () => sensors
  },
  methods: {
    register () {
      this.$http.post('/sensor', this.form)
        .then(r => {
          this.$swal('성공', '센서를 성공적으로 등록했습니다.', 'success')
        })
        .catch(e => {
          this.$swal('오류', e.response.data.error, 'error')
        })
    }
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
    type="number"
    v-model="form.floor"
    placeholder="센서 위치 (층)"
  />

  <input
    class="input"
    v-model="form.position"
    placeholder="센서 좌표 (x좌표)"
  />

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
      :value="sensor.eng"
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
