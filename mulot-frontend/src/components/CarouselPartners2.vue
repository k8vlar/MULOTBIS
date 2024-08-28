<template>
    <div class="carouselPartners2">
      
        <Carousel  :autoplay="2500" v-bind="settings" :wrap-around="true">
        <Slide v-for="image in images" :key="image.id">
          <div class="carousel__item">
              <img class="imageItem" :src="image.src" :alt="image.alt" />
          </div>
        </Slide>
    
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      
      
    </div>
      
    </template>
    
    <script>
    import { defineComponent } from 'vue'
    import { Carousel, Pagination, Slide } from 'vue3-carousel'
    
    import 'vue3-carousel/dist/carousel.css'
    
    export default defineComponent({
      components: {
        Carousel,
        Slide,
        Pagination,
      },
      data:()=>({
              images: [
              { id: 1, src: '../assets/logo-emmaus.svg' },
              { id: 2, src: '../assets/logo-french-tech.svg' },
              { id: 3, src: '../assets/logo-snark-factory.png' },
              { id: 4, src: '../assets/logo-bordeaux-metropole-vertical.svg' },
              { id: 5, src: '../assets/logo_diversidays.png' },
      ],
      settings: {
        itemsToShow: 3,
        snapAlign: 'center-odd',
      },
      }),
    }
  )
    </script>
    <style scoped>
  .imageItem{
      width: 400px;
      height: 400px;
      display: flex;
      justify-content: center;
      background:  #205af915;
      aspect-ratio:1/1;
      padding: 20px;
      
  }
  .carouselPartners2{
    width: 1200px;
    justify-content: center;
  }
  @media(max-width: 900px){
    .imageItem{
      width: 200px;
      height: 200px;
  }
  .carouselPartners2{
    width: 600px;
  }
  }
  @media(max-width: 500px){
    .imageItem{
      width: 100px;
      height: 100px;
      aspect-ratio:1/1;
  }
  .carouselPartners2{
    width: 300px;
    justify-content: center;
  }
  
  }
  </style>