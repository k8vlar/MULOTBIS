<template>
    <div v-if="isLoggedIn">
      <h1>Commencez votre démarche avec Mulot</h1>
    </div>
    <div v-else>
      <p>Veuillez vous connecter pour accéder à cette page.</p>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  mounted() {
    this.isLoggedIn = this.checkIfLoggedIn();
  },
  methods: {
    checkIfLoggedIn() {
      const token = localStorage.getItem('token');
      return token !== null;
    }
  }
}
  </script>
