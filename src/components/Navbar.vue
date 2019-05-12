<script>
export default {
  name: 'Navbar'
}
</script>

<template>
<div class="navbar">
  <router-link
    to="/"
    class="logo"
  >
    <i class="fas fa-fire"></i>
    부리양
    <i class="fas fa-fire-extinguisher"></i>
  </router-link>
  <router-link
    class="item"
    to="/auth/logout"
  >
    로그아웃
  </router-link>
  <router-link
    class="item"
    to="/register/room"
  >
    호실 등록
  </router-link>
  <router-link
    class="item"
    to="/register/sensor"
  >
    센서 등록
  </router-link>
</div>
</template>

<style>
.navbar {
  font-size: 1.5rem;
  color: white;
  padding: 0.5em;
  padding-right: 1em !important;
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
}

.item {
  padding-right: 5px;
  padding-left: 5px;
  float: right;
}

.item:not(:last-child) {
  border-left: 1px solid;
}
</style>
