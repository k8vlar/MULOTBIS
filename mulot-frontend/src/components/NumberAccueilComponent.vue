<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'number-accueil-component',
  setup() {
    const number = ref(54)
    const tweened = ref({
      number: 0
    })
    const textVisible = ref(false)
    const textVisible2 = ref(false)

    onMounted(() => {
      gsap.fromTo(
        "#logo", 
      {  opacity: 1 }, 
      {  opacity: 0, duration: 2,delay:1,ease: "expoScale(0.5,7,none)" }
    )
      gsap.to(tweened.value, {
        delay: 1.1,
        duration: 1.5,
        number: number.value,
        onComplete: () => {
          textVisible.value = true
          setTimeout(() => {
            textVisible2.value = true
          }, 800) // show textVisible2 after 1.5 seconds
        }
      })
    })

    return {
      tweened,
      textVisible,
      textVisible2
    }
  }
}

// export default{
//     name:'number-accueil-component',
//     setup() {
//     const number = ref(54)
//     const tweened = reactive({
//       number: 0
//     })
//     const logo= ref(true)
//     const textVisible = ref(false)
//     const textVisible2 = ref(false)
//     onMounted(() => {
//       logo.value=true
//     //   gsap.to(logo, {
//     //     duration: 1,
//     //     opacity: 0,
//     //     onComplete: () => {
//     //       // Show number after logo animation completes
//     //       gsap.to(tweened, {
//     //         duration: 2,
//     //         number: number.value,
//     //         onComplete: () => {
//     //           // Show text after number animation completes
//     //           textVisible.value = true
//     //           setTimeout(() => {
//     //             textVisible2.value = true
//     //           }, 1500) // show textVisible2 after 1.5 seconds
//     //         }
//     //       })
//     //     }
//     //   })
//     // })

//       setTimeout(() => {
//         textVisible.value = true
//       }, 2500
//     ) // show text after 3 seconds
//     setTimeout(() => {
//         textVisible2.value = true
//       }, 3200) // show text after 4,5 seconds
//       gsap.to(tweened, {delay:1, duration: 2, number: number.value })

//     })

//     return {
//       logo,
//       tweened,
//       textVisible,
//       textVisible2,
//     }
//   },

// }
</script>
<template>
  <div class="container">
    <div class="logoContainer">
      <img class="logo" id="logo" src="../assets/logoMulot.svg" alt="logoMulotAccueil" />
    </div>
    <div class="animContainer">
      <div class="purcentContainer">{{ tweened.number.toFixed(0) }} %</div>
      <p v-if="textVisible">des francais atteints d'illectronisme en France...</p>
      <p class="questionTitle" v-if="textVisible2">En faites vous partie?</p>
    </div>
    
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
}
.purcentContainer {
  font-size: 10rem;
  font-weight: bold;

}
.logoContainer {
  grid-column: 1;
  grid-row: 1;
  z-index: 2;
}
.animContainer {
  grid-column: 1;
  grid-row: 1;
}
p {
  font-size: 3rem;
  font-weight: bold;

  font-family: 'Mustica Pro SemiBold', sans-serif;
}
.questionTitle{
  font-size: 5rem;
  font-weight: bold;
  color: #205af91b,#FFAA00,45deg;
  font-family: 'Mustica Pro SemiBold', sans-serif;
}
#logo {  
  /* Add some styles to your logo container */
  width: 500px;
  height: 500px;
  background-color:white;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  border: solid 1px  #205af994;
  padding: 20px;
  margin: 20px;
}
@media (max-width: 1242px){
  .questionTitle{
    font-size: 3.5rem}
  p {
      font-size: 1.8rem}   
  .purcentContainer {
        font-size: 5rem}
  #logo {  
  /* Add some styles to your logo container */
  width: 350px;
  height: 350px;
}
}
@media (max-width: 900px){
  .questionTitle{
    font-size: 2.5rem}
  p {
      font-size: 1.2rem}   
  .purcentContainer {
        font-size: 5rem}
  #logo {  
  /* Add some styles to your logo container */
  width: 350px;
  height: 350px;
}
}
@media (max-width: 500px){
  .questionTitle{
    font-size: 1.7rem}
  p {
      font-size: 0.8rem}   
  .purcentContainer {
        font-size: 4rem}
  #logo {  
  /* Add some styles to your logo container */
  width: 300px;
  height: 300px;
}
}
</style>