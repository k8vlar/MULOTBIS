<script setup>
// const blur= document.getElementById('blur');
// blur.addEventListener('mouseover',()=>{blur.classList.add('blurEffect')})
</script>

<template>
  <h1>
    Bienvenue sur Mulot
    <span>Votre accompagnant numérique concernant toutes démarches administratives</span>
    <span class="blurEffect">Mulot répond a tous vos problèmes d'accessibilités en un clin d'oeil </span>
  </h1>
</template>
<style scoped>
  .blurEffect{
    filter: blur(8px);
  }
  .blurEffect:hover{
    filter: blur(0);
  }
</style>
