<template>
    <nav>
        <a href="#" class="nav-icon" aria-label="visit homepage" aria-current="page">
            <img src="../assets/logoMulot.svg" alt="mulot icon">
        </a>
        <div class="main-navlinks">
            <button class="hamburger" type="button" aria-label="Toggle navigation" aria-expanded="false">
                <!--aria-label car il n'y pas de text aria-expanded false pour qu'il ne soit pas visible-->
                <span class="span1"></span>
                <span class="span2"></span>
                <span class="span3"></span>
            </button>
            <div class="navLinks-container">
                <div v-for="(navLink, index) in navLinks" :key="index" class="titleNav">
                    <RouterLink :class="'routerNav ' + (active === navLink.id ? 'active' : '')" :to="navLink.to"
                        @click="handleClick(navLink.id)" @mouseover="handleMouseOver(navLink.id)">{{ navLink.text }}
                    </RouterLink>
                </div>
                <!--ici on ajoute une directement dans les classes de routerlink pour ajouter la classe active si la props active correspond a l'id de la bonne propriété de l'objet navlinks-->
            </div>
        </div>
        <div class="second-part">
            <div class="nav-authentication">
                <div class="iconNavbar">
                    <RouterLink to="/login" class="sign-user" aria-label="sign in page">
                        <i class="fas fa-regular fa-user iconUser" style="color: #205af9e5"></i>
                    </RouterLink>
                    <div class="dropdown">
                        <div class="dropdown-container">
                            <RouterLink to="/login" class="dropdown-item">Connexion</RouterLink>
                            <RouterLink to="/inscription" class="dropdown-item">Inscription</RouterLink>
                        </div>
                    </div>
                </div>
                <DemoButton class="demoButton" href="https://calendly.com/mathieu-nyemb/30min?month=2024-07">
                </DemoButton>
            </div>
        </div>
    </nav>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import DemoButton from './DemoButton.vue';
library.add(faBars, faMagnifyingGlass, faUser)
export default {

    components: { DemoButton },
    props: {
        active: {
            type: String,
            default: null
        },
    },

    data() {
        return {
            navLinks: [
                { to: "/", text: "Home", name: "Home", id: "home" },
                { to: "/about", text: "About", name: "About", id: "about" },
                { to: "/partenaires", text: "Partenaires", name: "Partners", id: "partners" },
                { to: "/equipe", text: "L'Equipe", name: "Equipe", id: "equipe" },
                { to: "/articles", text: "Blog", name: "Articles", id: "articles" },
            ],
        };
    },


    mounted() {
        const hamburgerToggler = document.querySelector(".hamburger");
        const navLinksContainer = document.querySelector(".navLinks-container");
        const closeNavBarResps = document.querySelectorAll('.titleNav')
        const toggleNav = () => {
            hamburgerToggler.classList.toggle("open");
            navLinksContainer.classList.toggle("open");
        };
        const closeNavbar = () => {
            hamburgerToggler.classList.remove("open");
            navLinksContainer.classList.remove("open");
        }
        closeNavBarResps.forEach((closeNavBarResp) => {
            closeNavBarResp.addEventListener("click", closeNavbar)
        })
        hamburgerToggler.addEventListener("click", toggleNav);


    }
}

</script>

<style>
*,
::before,
::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

nav {
    font-family: 'Mustica Pro SemiBold', sans-serif;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    height: 10vh;
    background: white;
    box-shadow: inset 0px -2px 0px #205af91b;
    padding: 30px 5px;
}

.nav-icon {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 20px;
}

.nav-icon img {
    width: 100px;
    transform: translateX(5px);

}

.second-part {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: auto;
}

.nav-search {
    display: flex;
    flex-direction: row;
}

.hamburger {
    display: none;
}
.main-navlinks{
    padding-left: 9%;
}
.navLinks-container {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.navLinks-container a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
    font-size: 2em;
    font-weight: 500;
    position: relative;
    gap: 50px;
}

.iconNavbar {
    display: none;
    order: 2;
}

.navLinks-container a::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -3px;
    width: 100%;
    height: 1px;
    left: 2px;
    transform: scaleX(0);
    background: #333;
    transition: transform 0.3s ease-out;
}

.navLinks-container a:hover::after {
    transform: scaleX(1);
}

.nav-authentication {

    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
    gap: 30px;
    padding-right: 8%;
}

form {
    display: flex;
    flex-direction: row;
    align-items: center;
}

a.demoButton {
    text-decoration: none;
}

.sign-btns a {
    text-decoration: none;
    cursor: pointer;
    background-color: #205af9e5;
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
}

.sign-btns a:hover {
    color: #205af9e5;
    background-color: #fff;
    border: solid 1px #205af9e5;

}

.sign-btns.sign-user {
    display: none;
}

.navLinks-container a.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -3px;
    width: 100%;
    height: 1px;
    left: 2px;
    transform: scaleX(0);
    background: #333;
    transition: transform 0.3s ease-out;
}

.navLinks-container a.active::after {
    transform: scaleX(1);
}
.dropdown {
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    display: none;
    text-align: center;
}

.dropdown-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.dropdown-item:last-child {
    border-bottom: none;
}
.dropdown-container{
    display: flex;
    flex-direction: column;
}
.iconNavbar:hover .dropdown {
    display: block;
}
/**************************      MEDIAQUERIES 1140 PX      ********************************/


@media (max-width: 1140px) {
    .navLinks-container a {
        font-size: 1.2em;
        gap: 10px;
    }

    .nav-authentication {
        padding: 0;
        gap: 10px
    }
    .iconNavbar {
        display: block;
        order: 2;
    }
    .dropdown {
    transform: translate(-62%, 2%);
}
}

/**************************      MEDIAQUERIES 900 PX      ********************************/


@media (max-width: 900px) {
    nav {
        font-size: smaller;
        padding: 60px 20px;
        position: relative;
    }

    .nav-icon {
        order: 2;
        right: 43vw;
        margin-right: 0px;
        position: absolute;
    }

    .nav-icon img {
        width: 140px;
    }

    .main-navlinks {
        order: 1
    }

    .iconNavbar {
        display: block;
    }

    .iconUser {
        font-size: 1.8em;
    }

    .demoButton {
        width: 70px;
    }

    /***********************************   HAMBURGER   *******************************************/
    .hamburger {
        width: 20px;
        height: 20px;
        cursor: pointer;
        border: none;
        display: flex;
        background: white;
        align-items: center;
        position: relative;
    }

    .hamburger span {
        display: block;
        width: 100%;
        height: 2px;
        background: #333;
        position: absolute;
        pointer-events: none;
        transition: transform 0.3s 0.15s ease-out;
    }

    .hamburger span:nth-child(1) {
        transform: translateY(7px);
    }

    .hamburger span:nth-child(3) {
        transform: translateY(-7px);
    }

    .hamburger .span1,
    .hamburger .span3 {
        transition: transform 0.3s ease-out;
    }

    .hamburger .open .span1 {
        transform: translate(0) rotate(135deg);
    }

    .hamburger .open .span3 {
        transform: translate(0) rotate(-135deg);
    }

    .hamburger .open .span2 {
        opacity: 0;
        transition: transform 0s ease-out;
    }

    .navLinks-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        gap: 30px;
        z-index: 1;
        background: white;
        top: 100%;
        left: 0;
        height: 90vh;
        width: 100vw;

        border-right: 1px solid #92c3eeb7;
        transform: translate(-100%);

    }

    .open {
        transform: translateX(0%);
    }

    .navlinks-container a {
        font-size: 18px;
        margin: 10px 0;
    }

    .second-part {
        order: 3;
        gap: 3%
    }

    .nav-authentication .demoButton {
        order: 1;
    }

    .nav-authentication .iconNavbar {
        order: 2;
    }

    .nav-authentication {
        margin-left: 0;
        padding-left: 10px;
        gap: 15px;
        display: flex;
        justify-content: flex-end;
    }

    .sign-btns {
        display: none;
    }

    .sign-user {
        display: block;
        cursor: pointer;
        border: none;
    }
    .dropdown {
    transform: translate(-62%, 2%);
}
}

/**************************      MEDIAQUERIES 500 PX      ********************************/


@media(max-width: 500px) {
    .nav-icon img {
        width: 100px;
    }

    .nav-icon span {
        font-size: 30px;
    }

    .navlinks-container {
        position: fixed;
        /* Change to fixed positioning */
        top: 10px;
        left: 0;
        width: 100%;
        /* Take up full screen width */
        height: 100%;
        /* Take up full screen height */
    }

    .iconNavbar {
        display: block;
    }

    .nav-icon {
        right: 39.5vw;
        position: absolute;
        top: 20%;
    }

    .demoButton {
        right: 33.2vw;
        position: absolute;
        top: 70%;

    }

    .hamburger span {
        display: block;
        width: 100%;
        height: 2px;
        background: #333;
        position: absolute;
        pointer-events: none;
        transition: opacity 0.3s 0.15s ease-out;

    }

    .hamburger .span1,
    .hamburger .span3 {
        transition: transform 0.3s ease-out;
    }

    .hamburger .open .span1 {
        transform: translate(0) rotate(45deg);
    }

    .hamburger .open .span3 {
        transform: translate(0) rotate(-45deg);
    }

    .hamburger .open .span2 {
        opacity: 0;
        transition: transform 0s ease-out;
    }
    .dropdown {
    transform: translate(-62%, 2%);
}
}

.iconNavbar {
    position: relative;
    display: inline-block;
}

.iconNavbar .iconUser {
    font-size: 1.8em;
    cursor: pointer;
}


</style>