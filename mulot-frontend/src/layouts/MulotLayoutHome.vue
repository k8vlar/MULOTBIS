<template>
    <div>
      <header class="header"></header>
      <MulotLayoutLinks />
      <slot></slot>
    </div>
  </template>
  
  <script>
  import MulotLayoutLinks from '@/layouts/MulotLayoutLinks.vue'
  
  export default {
    name: "MulotLayoutHome",
    components: {
      MulotLayoutLinks
    }
  }
  </script>
  
  <style scoped>
  .header {
    height: 5rem;
    background-color: green;
  }
  </style>