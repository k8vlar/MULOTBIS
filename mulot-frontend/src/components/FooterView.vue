<script>
import CarouselPartners from './CarouselPartners.vue';
export default{
    name:"footerView",
    components:{CarouselPartners}
}
</script>
<template>
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-presentation">
            <div class="span-container">
                <span class="title-span">Maitrisez le Mulot</span>
                <span class="text-span-footer">Nous accompagnons les acteurs publics et associations, grâce à nos tutoriels interactifs et formations intégrées aux logiciels et sites internet pour plus d’autonomie</span>
            </div>
            
        </div>
        <div class="nav-intern">
            <div class="titleFooter">Liens internes</div>
            <ul class="nav-items">
                <li>
                <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                <RouterLink to="/equipe">L'Equipe</RouterLink>
                </li>
                <li>
                <RouterLink to="/articles">Blog</RouterLink>
                </li>
                <li>
                <a href="#">Haut de Page</a>
                </li>
            </ul>
        </div>
        <div class="titleFooterContainer">
            <div class="titleFooter">Qui est Mulot?</div>
            <ul>
                <li>Qu'est ce que c'est?</li>
                <li>Comment ca marche?</li>
                <li>Qui sommes nous?</li>
                <li>Nos Engagements</li>
            </ul>
        </div>
        <div class="lastSection">
            <div class="titleFooter">A propos</div>
            <ul class="nav-items">
                <li>Recrutement</li>
                <li>
                    <RouterLink to="/mentionslegales">Mentions Légales</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contacts">Contactez nous</RouterLink>
                </li>
                <li>
                    <RouterLink to="/utilisateurs">Démarrez avec Mulot</RouterLink>
                </li>
            </ul>
        </div>
        </div>
        <div class="carouselFooter">
            <CarouselPartners/>
        </div>
            
    </div>
    
</template>
<style scoped>
.footer-container {
    
    height: 180px;
    background: white;
    box-shadow: inset 0px 2px 0px #205af91b;
   
    flex-direction: column;
    align-items: center;
    color: black;
    padding:30px 30px 0px 30px;
}
.footer-content{
    
    align-content: center;
    align-items:flex-start;
    justify-content: center;
    display: grid;
    grid-template-columns:repeat(4,2fr) ;
    justify-items: center;
    align-items:flex-start;

}
.footer-presentation{
    width: 70%;
    display: flex;
    gap: 50px;
    align-items: center;
}
span{
   text-align: justify;
   margin-top: 10px;
}
.span-container{
    display: flex;
    flex-direction: column;
}
.title-span{
    font-size: 24px;
    font-weight: bold;
    margin-top: 0px;
}
.text-span-footer{
    font-size: 18px;
    font-style: italic;
}
.nav-items li{

  color: black;
  
}
.nav-items{
    list-style:none;
    
}
a {
  text-decoration: none;
  color: black;
}
a:hover{
    font-style:italic ;
    font-size:large;
}
li{
    list-style: none;
    display: flex;

    justify-content: flex-start;
}
.titleFooter{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    display: flex;
}
.carouselFooter{
    width: 60%;
    margin: 10px auto;

}
.lastSection{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

@media(max-width: 900px){
    .titleFooterContainer{
        display: none;
    }
    .footer-content{
    
    align-content: center;
    align-items:flex-start;
    justify-content: center;
    display: grid;
    grid-template-columns:repeat(3,2fr) ;
    grid-template-columns: 7fr 3.5fr 3.5fr;
    justify-items: center;
    align-items:flex-start;


}
@media(max-width: 730px){
.title-span{
    font-size: 15px;
}
.titleFooter{
    font-size: 15px;
}
.text-span-footer{
    font-size: 12px;
}
.footer-content{
    font-size: 0.6em;
}
}
@media(max-width: 500px){
    .footer-container{
        padding: 10px 10px 0;
    }
    .footer-content{
        font-size: 0.6em;
        gap: 5px;
        grid-template-columns: 3fr 2fr 2fr;
    }
    .title-span{
        font-size: 1.5em;
        font-weight: bold;
    }
    .titleFooter{
        font-size: 1.5em;
        margin: 0px 0px 2px;
    }
    .footer-presentation{
        width: 100%;
    }
    .text-span-footer{
        font-size: 0.8em;
        
    }
}
}
</style>