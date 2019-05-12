<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  beforeCreate () {
    if (this.$store.getters.getUserInfo) {
      this.$router.push('/')
    }
  },
  methods: {
    login () {
      this.$http.post('/auth/login', this.form)
        .then(r => {
          this.$http.defaults.headers.common['authorization'] = r.data.token
          localStorage.userToken = r.data.token
          localStorage.userInfo = JSON.stringify(r.data.userInfo)
          this.$store.commit('setUserInfo', r.data.userInfo)
          this.$router.push('/')
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
    @keyup.enter="login"
  />
  <input
    class="input"
    type="password"
    v-model="form.password"
    placeholder="비밀번호"
    @keyup.enter="login"
  />
  <button
    @click="login"
    class="button"
  >
    로그인
  </button>
</div>
</template>

<style>
.container {
  margin-top: 15%;
  margin-left: 15px;
}

@media (min-width: 500px) {
  .container {
    margin-left: 30%;
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
