<template>
  <div class="mouseScrollButton">
    <!-- Le bouton qui sera animé -->
      <button id="scroll-button" class="scroll-button">
      <div class="mouseIcon">
      <span class="fas fa-angle-down"></span>
      <span class="fas fa-angle-down"></span>
      <span class="fas fa-angle-down"></span>
      </div>  
    </button>
  </div>
</template>

<script setup lang="js">
// import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  // gsap.from(".scroll-button", {opacity:0 ,duration:3})
  // gsap.to("#scroll-button", {opacity:0.2});
  // Ajoutez un événement de scroll pour animer le bouton
  const scrollButton = document.getElementById('scroll-button');
  scrollButton.classList.add('animate');
  window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scroll-button');

    
     
    
    if (window.scrollY>199) {
      scrollButton.classList.add('hidden');
    }
  });

  // Ajoutez un événement de clic pour animer le bouton
  document.getElementById('scroll-button').addEventListener('click', () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  });
});
</script>

<style lang="css" scoped>

.mouseIcon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#scroll-button {
  position: fixed;
  padding: 2px;
  left: 49%;
  top: 90%;
  transform: translateX(0%);
  z-index: 9999;
  cursor: pointer;
  border-radius: 15px;
  height: 50px;
  width: 25px;
  opacity: 0;
  background-color: #205af9df;
  border:outset 1px
}
.fas{
  font-size: 20px;
  line-height: 1px;
}

#scroll-button span {
  color: white;
  margin: 4px;
}
.scroll-button{
  color: #205af9;
}
.animate {
  animation: mouse-scroll 1s infinite;
  animation-delay: 5s;
}
.hidden{
  display: none;
}

@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}


</style>