<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'


library.add(faBars)

export default {
  name: "Default",
  data() {
    return {
      showMobileMenu: false,
      hoverHome: false,
      hoverAbout: false,
      hoverPartners: false,
      hoverEquipe: false,
      hoverArticles: false
    }
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>

<template>
  <nav class="nav-menu">
    <!--Menu container -->
    <i class="fas fa-bars hamburger" @click="showMenu()"> </i>
    <!--Hamburger icon with click method -->
    <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
      <!-- Menu content-->
      <div class="logo">
        <a href="#"
          ><img alt="Vue logo" class="logo" src="@/assets/logoMulot.svg" width="100" height="100"
        /></a>
      </div>
      <ul class="nav-items">
        <li
          @mouseenter="hoverHome = true"
          @mouseleave="hoverHome = false"
          :class="{ hovered: hoverHome }"
        >
          <RouterLink to="/">Home</RouterLink>
          <div class="hover-section" v-if="hoverHome">Nouvelle section ici!
          </div>
        </li>
        <li
          @mouseenter="hoverAbout = true"
          @mouseleave="hoverAbout = false"
          :class="{ hovered: hoverAbout }"
        >
          <RouterLink to="/about">About</RouterLink>
          <div class="hover-section" v-if="hoverAbout">Nouvelle section ici!</div>
        </li>
        <li
          @mouseenter="hoverPartners = true"
          @mouseleave="hoverPartners = false"
          :class="{ hovered: hoverPartners }"
        >
          <RouterLink to="/partners">Partenaires</RouterLink>
          <div class="hover-section" v-if="hoverPartners">Nouvelle section ici!</div>
        </li>
        <li
          @mouseenter="hoverEquipe = true"
          @mouseleave="hoverEquipe = false"
          :class="{ hovered: hoverEquipe }"
        >
          <RouterLink to="/equipe">L'Equipe </RouterLink>
          <div class="hover-section" v-if="hoverEquipe">
            <p>
              Lorem ipsum de bordeaux a gagné la finale de l'été dernier
            </p>
          </div>
        </li>
        <li
          @mouseenter="hoverArticles = true"
          @mouseleave="hoverArticles = false"
          :class="{ hovered: hoverArticles }"
        >
          <RouterLink to="/articles">Articles</RouterLink>
          <div class="hover-section" v-if="hoverArticles">Nouvelle section ici!</div>
        </li>
        <li
          @mouseenter="hoverBlog = true"
          @mouseleave="hoverBlog = false"
          :class="{ hovered: hoverBlog }"
        >
          <RouterLink to="/blog">Blog</RouterLink>
          <div class="hover-section" v-if="hoverArticles">Nouvelle section ici!</div>
        </li>
      </ul>
      <form>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Trouves un article..."
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Soumettre</button>
      </form>
      <div class="login-button">
        <RouterLink to="/login"
          ><i class="fas fa-regular fa-user" style="color: black"></i
        ></RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-menu {
  /* background: linear-gradient(45deg, #ffaa0092,#205af992); */
  background-color: #f2f2f2;
  width: 100%;
  border-radius: 0% 0% 25% 25%;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-items li {
  padding: 0 20px;
  color: black;
  text-decoration: none;
  transition: all 0.5s linear  ;
}

.nav-items li:hover,
.hovered {
  transform: translateX(5px);
  background-color: #f2f2f2;
}
.hover-section {
  margin-top: 5px;
  padding: 5px;
  background-color: #f2f2f2;
  border-radius: 5px;
  min-height: 80px;
  max-width: 50px;
  position: absolute;
  z-index: 3;
}

a {
  text-decoration: none;
  color: black;
  font-family: fantasy;
  font-weight: 700;
  text-transform: uppercase;
}
.hamburger {
  display: none;
}
.login-button {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
/* Mobile version - hidden hamburger menu */
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
  }
  .hamburger {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>
