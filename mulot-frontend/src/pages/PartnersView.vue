<script>
import CarouselPartners2 from '../components/CarouselPartners2.vue'
export default {
  components: { CarouselPartners2 },
}
</script>
<template>
  <div class="partnersView">
  <div class="partnersContent">Text partenariats</div>
    <CarouselPartners2 />
  </div>
</template>
<style>
.partnersContent{
  font-size: 5em;
}
.partnersView{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
}
@media(max-width: 900px){
  .partnersContent{
    font-size: 3em;
}
}
@media(max-width: 900px){
  .partnersContent{
    font-size: 2em;
}
}
</style>