<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        email: '',
        password: '',
        name: ''
      }
    }
  },
  methods: {
    register () {
      this.$http.post('/auth/register', this.form)
        .then(r => {
          this.$swal('성공', '회원가입을 성공했습니다.', 'success')
          this.$router.push('/auth/login')
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
  <input
    class="input"
    type="email"
    v-model="form.email"
    placeholder="이메일"
  />
  <input
    class="input"
    v-model="form.name"
    placeholder="이름"
  />
  <input
    class="input"
    type="password"
    v-model="form.password"
    placeholder="비밀번호"
  />
  <button
    @click="register"
    class="button"
  >
    가입
  </button>
</div>
</template>

<style>
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
