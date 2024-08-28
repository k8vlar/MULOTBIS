
<template>
  <div id="app">
    <MulotLayout :active="active">
      <router-view @activeChanged="changeActive"/>
    </MulotLayout>
  </div>
</template>
<style>
#app {
  font-family: 'Mustica Pro SemiBold', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script setup lang="js">
import { ref } from 'vue';
const active = ref("")

  function changeActive  (value) {active.value = value}
      // update your app state or perform any other necessary actions
  


</script>
