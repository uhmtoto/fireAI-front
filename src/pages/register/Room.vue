<script>
export default {
  name: 'RegisterRoom',
  data () {
    return {
      form: {
        name: '',
        floor: null,
        position: null
      }
    }
  },
  methods: {
    register () {
      this.$http.post('/room', this.form)
        .then(r => {
          this.$swal('성공', '호실을 성공적으로 등록했습니다.', 'success')
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
  <h1>호실 등록</h1>
  <input
    class="input"
    v-model="form.name"
    placeholder="호실 이름"
  />

  <input
    class="input"
    type="number"
    v-model="form.floor"
    placeholder="호실 위치 (층)"
  />

  <input
    class="input"
    v-model="form.position"
    placeholder="호실 좌표 (x좌표)"
  />

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
