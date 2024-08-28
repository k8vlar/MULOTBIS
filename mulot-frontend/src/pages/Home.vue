<script setup lang="js">
import NumberAccueilComponent from '../components/NumberAccueilComponent.vue'
import {ref, onMounted,defineEmits} from 'vue'
import MouseScrollButton from '@/components/MouseScrollButton.vue';

const sections = ref(null)
const mainSections=ref(0)
//  const emit = defineEmits("activeChanged", "");
const scrollPosition= ref(0);
const emit = defineEmits({
  activeChanged: String


})
onMounted(()=>{
 
  sections.value = document.querySelectorAll('section')
  mainSections.value = document.querySelectorAll('.first-container','.second-container')
  const secondSection = document.getElementById("second-section")
  const thirdSection = document.getElementById("third-section")
  const firstContainer =document.getElementById("first-container")
  const secondContainer =document.getElementById("second-container")
  const secondSectionfc =document.getElementById("second-container-fc")
  const secondSectionsc =document.getElementById("second-container-sc")
  const aboutSection =document.getElementById('about')
  const homeSection =document.getElementById('home')
  const partnersSection =document.getElementById('partners')
  const equipeSection =document.getElementById('equipe')
  const articlesSection =document.getElementById('articles')
  const options={
    rootMargin: "0px", //met marg en haut et en bas, servira de declenchement
    threshold:0.4, // zone de declenchement par rapport a la rootMargin
  }
  const handleIntersect=(entries)=>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      if (entry.target.id === "about"){
        emit("activeChanged","about")
      }
      if (entry.target.id === "home"){
        emit("activeChanged","home")
      }
      if (entry.target.id === "partners"){
        emit("activeChanged","partners")
      }
      if (entry.target.id === "equipe"){
        emit("activeChanged","equipe")
      }
      if (entry.target.id === "articles"){
        emit("activeChanged","articles")
      }
      // const linkId = entry.id;
      //       // Emit an event to the navbar component to update the active link
      //       this.$emit("updateActiveLink", linkId);
      if (entry.target.id === 'third-section'){
        entry.target.classList.add('animate');
      }
      if (entry.target.id === 'second-container-fc'){
        entry.target.classList.add('leftAnimate');
      }
      if (entry.target.id === 'second-container-sc'){
        entry.target.classList.add('rightAnimate');
      }
      if (entry.target.id === 'first-container'){
        entry.target.classList.add('leftAnimate');
      }
      if (entry.target.id === 'second-container'){
        entry.target.classList.add('rightAnimate');
      }
      
    }
      })
}

const observer= new IntersectionObserver
(handleIntersect,options)

sections.value.forEach((section) =>{observer.observe(section)
observer.observe(thirdSection)
observer.observe(secondSection)
observer.observe(firstContainer)
observer.observe(secondContainer)
observer.observe(secondSectionfc)
observer.observe(secondSectionsc)
observer.observe(aboutSection)
observer.observe(homeSection)
observer.observe(partnersSection)
observer.observe(equipeSection)
observer.observe(articlesSection)
})

})
window.addEventListener('scroll', () => {
  scrollPosition.value = window.scrollY
})
</script>
<template>
  <div class="home">
    <div id="home">
      <section class="logoMulotAccueil">
      <NumberAccueilComponent  class="numberAccueil" />
    </section>
    <!-- <transition name="fade" appear enter-delay="1000">
      <section class="homeScrollButton">
      <MouseScrollButton />
    </section>
    </transition> -->
    <section class="homeScrollButton" >
      <MouseScrollButton/>
    </section>
    </div>
   
    <section class="main-section" id="about">
      <about-page></about-page>
      <div class="mainSection-fram">
        <div class="first-container" id="first-container">
          <img src="../assets/whowearebg.jpg" alt="image who are">
            <p class="semiPara">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel reprehenderit saepe fugit officia natus iste facere laudantium dolorem mollitia quia eligendi recusandae, inventore fuga rem velit incidunt qui rerum eum.
          Eos veniam itaque quasi deserunt architecto excepturi temporibus odit quis vitae quibusdam? Nam, nihil tempora. Iure, expedita! Assumenda recusandae repudiandae aperiam aut voluptatem enim libero eveniet, ab expedita ut eum?
          Voluptates facilis reprehenderit sapiente rem explicabo numquam tempore molestias hic voluptatibus fugiat. Maxime sed facilis vero unde consectetur, mollitia minus sunt corrupti, quia quo enim iusto repellat laudantium aliquid libero.
          Recusandae 
            </p>
        </div>
        <div class="second-container" id="second-container">
          <img src="../assets/arbre2.jpg" alt="image arbre2">
          <p class="semiPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laborum odit aut. Modi repellat voluptates suscipit. Necessitatibus ut voluptatibus rem illo eos! Veritatis doloremque recusandae optio, quam blanditiis illum atque?
        Quod quia ea ad quidem nemo, ab animi deserunt consectetur repudiandae illum error quasi accusamus totam. Officiis nisi aperiam consectetur, repellendus pariatur voluptate cupiditate, tenetur reiciendis beatae harum dolores. Corrupti?
          </p>
        </div>
      </div>   
    </section>
    <section class="second-section" id="second-section">
      <div class="secondSection-fram">
        <h2>2nd section</h2>
        <div class="secondSectionStructure">
          <div class="first-container-ss" id="second-container-fc">
              <img src="../assets/whowearebg.jpg" alt="who are">
          </div>
          <div class="second-container-ss" id="second-container-sc">
            <p class="paraSecondContainerSS">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores dolor reiciendis itaque illo consequuntur! Earum possimus provident nulla repudiandae impedit odit delectus magni, alias mollitia deserunt cumque qui quae.
            Perferendis magni a tempora quae unde odit est aperiam? Incidunt suscipit quae distinctio libero rerum. Voluptates sapiente esse earum ipsa est, molestiae quae ipsum deleniti in, soluta ex, alias architecto.
            Dolorem soluta corrupti neque impedit eius magni magnam odio, molestiae officia unde doloribus architecto laboriosam repellat sint dolorum omnis, veritatis sequi numquam nostrum eveniet assumenda ipsum amet illum pariatur. 
            </p>
          </div>
        </div> 
      </div>
    </section>
    <section class="third-section"  id="third-section">
      <h2>3rd section</h2>
      <div class="images">
        <img style="--index: 1" src="../assets/arbre2.jpg" alt="arbre dans la nature">
        <img style="--index: 2" src="../assets/arbre3.jpg" alt="arbre dans la nature2">
        <img style="--index: 3" src="../assets/arbre1.jpg" alt="arbre dans la nature3">
      </div>
    </section>
    <section class="fourth-section"  id="partners">
      <h2>4th section</h2>
    </section>
    <section class="fifth-section"  id="equipe">
      <h2>5th section</h2>
    </section>
    <section class="seventh-section"  id="articles">
      <h2>7th section</h2>
    </section>
  </div>
</template>

<style >
.home {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  }

.logoMulotAccueil{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 7%;
  width: 100%;
}

/********************************       mainSection      ********************************/

.semiPara{
width: 600px;
text-align: justify;
height: 80%;
}
.main-section{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.mainSection-fram{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:flex-start;
  gap: 60px;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: 70%;
}
.mainSection-fram img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 370px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.mainSection-fram p{
  font-family: 'Mustica Pro SemiBold', sans-serif;
  font-size: 1em;
  margin-bottom: 10px;
}

.first-container{
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
}
.second-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.first-container :is(p, img) {
  visibility: hidden;
  opacity: 0;
  transform: translate(-50px,50%);
  transition: transform 0.7s, opacity 1s;
}
.first-container.leftAnimate :is(p, img) {
  visibility: visible;
  opacity: 1;
  transform: translate(0px,0%);
  transition-timing-function: ease-out;
}
.second-container :is(p, img) {
  visibility: hidden;
  opacity: 0;
  transform: translate(50px,50%);
  transition: transform 0.7s, opacity 1s;
}
.second-container.rightAnimate :is(p, img) {
  visibility: visible;
  opacity: 1;
  transform: translate(0px,0%);
  transition-timing-function: ease-out;
}


/********************************       SecondSection      ********************************/


.second-section{
  font-family: 'Mustica Pro SemiBold', sans-serif;
  font-size: 2em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
}
.secondSection-fram{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 40px;
}
.secondSectionStructure{
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 60px;
  height: 80vh;
}
.second-section h2{
  font-family: 'Mustica Pro SemiBold', sans-serif;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.paraSecondContainerSS{
  text-align: justify;
  font-size: 2vw;
}
.second-section img{
  width: 550px;
  height: 370px;
  border-radius: 10px;
}
.first-container-ss :is(h2, img) {
  visibility: hidden;
  opacity: 0;
  transform: translateX(-50px);
  transition: transform 1s, opacity 1s;
}
.first-container-ss.leftAnimate :is(h2, img) {
  visibility: visible;
  opacity: 1;
  transform: translateX(0px);
  transition-timing-function: ease-out;
}
.second-container-ss :is(p) {
  visibility: hidden;
  opacity: 0;
  transform: translateX(50px);
  transition: transform 1s, opacity 1s;
}
.second-container-ss.rightAnimate :is(p) {
  visibility: visible;
  opacity: 1;
  transform: translateX(0px);
  transition-timing-function: ease-out;
}




/********************************       thirdSection      ********************************/
.third-section {
  width: 89vw;
  min-height: 60vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  border-radius: 10px;
}

.third-section h2 {
  font-size: 5rem;
  margin: 20px 0;
}

.third-section :is(h2, img) {
  visibility: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: transform 0.6s, opacity 1s;
}

/* .third-section img:nth-child(1) {
  --index: 1;
}
.third-section img:nth-child(2) {
  --index: 2;
}
.third-section img:nth-child(3) {
  --index: 3;
} */

.third-section img {
  transition-delay: calc(var(--index) * 200ms);
  border-radius: 10px;
}

.third-section.animate :is(h2, img) {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
}

.third-section .images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  
  justify-items: center;
}

.third-section img {
  width: 95%;
  min-height: 100%;
  
  
  display: flex;
  align-items: center;
}
img .images{
  display: flex;
  justify-content:center
}
/* .first-container,
.second-container {
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.first-container.animate {
  transform: translateX(100px);
  opacity: 1;
}

.second-container.animate {
  transform: translateX(-100px);
  opacity: 1;
} */

/********************************       fourthSection      ********************************/
.fourth-section{
  height: 10vh;
  margin-bottom: 500px;
}

/********************************      fifthSection      ********************************/
.fifth-section{
  height: 10vh;
  margin-bottom: 500px;
}

/********************************       seventhSection      ********************************/
.seventh-section{
  height: 10vh;
  margin-bottom: 500px;
}


/**************************      MEDIAQUERIES MIN 1024 PX      ********************************/

@media (min-width: 1024px) {
.home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
p{
  font-family: 'Mustica Pro SemiBold', sans-serif;
}
h1{
  font-family: 'Mustica Pro SemiBold', sans-serif;
  font-size: 3em;
}

/**************************      MEDIAQUERIES 1430 PX      ********************************/

@media(max-width: 1430px){
  
/********************************       mainSection      ********************************/
.semiPara{
height: 200px;
width: 500px;
}
.main-section{
  height:800px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.mainSection-fram img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 320px;
  border-radius: 10px;
  margin-bottom: 20px;
}
}

/**************************      MEDIAQUERIES 1240 PX      ********************************/

@media(max-width: 1240px){
  
/********************************       mainSection      ********************************/
.semiPara{
height: 200px;
width: 360px;
}
.main-section{
  height:800px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.mainSection-fram img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 320px;
  border-radius: 10px;
  margin-bottom: 20px;
}

}

/**************************      MEDIAQUERIES 900 PX      ********************************/
@media(max-width: 900px){
  
/********************************       mainSection      ********************************/

  .semiPara{
height: 200px;
width: 300px;
}

.main-section{
  height:800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.mainSection-fram img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 270px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.mainSection-fram{
  gap: 10px;
}

/********************************       secondSection      ********************************/
.second-section img{
  width: 350px;
  height: 250px;
}
.secondSectionStructure {
  padding:0px
}
/********************************       thirdSection      ********************************/
.third-section{
  width: 84%;
  padding:0px
}
}

/**************************      MEDIAQUERIES 770 PX      ********************************/
@media(max-width: 770px){
  
/********************************       mainSection      ********************************/
  .semiPara{
height: 200px;
width: 200px;
}
.main-section{
  height:800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.mainSection-fram img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 270px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.mainSection-fram{
  gap: 5px;
}

/********************************       secondSection      ********************************/
.second-section img{
  width:clamp(100px,200px,250px) ;
  height: 150px;
}

/********************************       thirdSection      ********************************/
.third-section{
  width: 84%;
}
}

/**************************      MEDIAQUERIES 500 PX      ********************************/

@media(max-width: 500px){
.logoMulotAccueil{
  margin-bottom: 20%;
  align-items: center;
}
/**************************      mainSection     ********************************/

  .semiPara{
width: 140px;
height: 100%;
}
.main-section{
  height:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.mainSection-fram img{
  width: 140px;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
}
.mainSection-fram{
  gap: 3px;
  height: 80vh;
}

/********************************       secondSection      ********************************/
.second-section img{
  width:100px;
  height: 70px;
}
}

</style>