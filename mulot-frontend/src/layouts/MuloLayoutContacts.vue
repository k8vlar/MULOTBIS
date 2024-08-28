<template>
    <div>
      <header class="header"></header>
      <MulotLayoutLinks />
      <slot></slot>
    </div>
  </template>
  
  <script>
  import MulotLayoutLinks from '@/layouts/MulotLayoutLinks'
  
  export default {
    name: "MulotLayoutContacts",
    components: {
      MulotLayoutLinks
    }
  }
  </script>
  
  <style scoped>
  .header {
    height: 5rem;
    background-color: red;
  }
  </style>