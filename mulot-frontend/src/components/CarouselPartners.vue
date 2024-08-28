<!-- <template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="image in images" :key="image.id">
      <div class="carousel__item">
          <img class="imageItem" :src="image.src" alt="diaporama d'images" />
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel,  Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Carousel,
    Slide,
   
  },
  data(){
      return{ 
          images: [
            { id: 1, src: '../assets/logo-emmaus.svg' },
            { id: 2, src: '../assets/logo-french-tech.svg' },
            { id: 3, src: '../assets/logo-snark-factory.png' },
            { id: 4, src: '../assets/logo-bordeaux-metropole-vertical.svg' },
            { id: 5, src: '../assets/logo_diversidays.png' },
  ]
      }
      
  },
}
)
</script> -->

<template>
  <Carousel :autoplay="2000" v-bind="settings" :wrap-around="true" >
    <!-- <Slide v-for="image in images" :key="image.id">
      <div class="carousel__item">
          <img class="imageItem" :src="image.src" alt="diaporama d'images" />
      </div>
    </Slide> -->
    <Slide v-for="image in images" :key="image.id">
      <div class="carousel__item">
        <img class="imageItem" :src="image.src" alt="diaporama d'image"/>
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    
    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: 'center-odd',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    // breakpoints: {
    //   // 700px and up
    //   700: {
    //     itemsToShow: 1,
    //     snapAlign: 'center',
    //   },
    //   // 1024 and up
    //   1024: {
    //     itemsToShow: 3,
    //     snapAlign: 'start',
    //   },
    // },
    images: [
            { id: 1, src: '../assets/logo-emmaus.svg' },
            { id: 2, src: '../assets/logo-french-tech.svg' },
            { id: 3, src: '../assets/logo-snark-factory.png' },
            { id: 4, src: '../assets/logo-bordeaux-metropole-vertical.svg' },
            { id: 5, src: '../assets/logo_diversidays.png' },
  ]
  }),
})
</script>

<style scoped>
.carousel__item{
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
}
.imageItem{
    width: 40px;
    height: 40px;
    display: flex;
    aspect-ratio: 1/1;
}
</style>