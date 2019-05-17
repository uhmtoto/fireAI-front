<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<style>
@import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');

#app {
  height: 100%;
  font-family: 'Spoqa Han Sans', 'Sans-serif';
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display:none;
}

a {
  color: white;
  text-decoration: none;
}
</style>
