<template>
  <div>
    <h1 >Mulot blogs</h1>
  <div class="blog">
    <div v-if = "mulotarticles.length > 0" class = "list-articles">
        <MulotLayoutArticles v-for="(article, idx) in mulotarticles" :key="article.id" :article="article" :inverted="idx % 2 === 0">
            {{ article.Couverture }}
          <template #Blog>Plus de détails</template>
        </MulotLayoutArticles>
    </div>
  </div>
  </div>
  
</template> 

<script>
import MulotLayoutArticles from '@/layouts/MulotLayoutArticles.vue'
export default {
  titre: 'Articles',
  components: {
    MulotLayoutArticles,
  },
  data() {
    return {
      mulotarticles:[],
      }
    },
       mounted() { 
        fetch("http://localhost:1337/api/mulotarticles?populate=*")
          .then((res) => res.json())
          .then((res) => {
            this.mulotarticles = res.data
            console.log("articles",this.mulotarticles)
        });
  },
}
</script>

<style>
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.list-articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80%;
  margin: 20px auto;
}

.ArticleCard {
  flex-basis: 30%;
  margin: 10px;
  transition: transform 0.2s ease-in-out;
}

.ArticleCard:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.ArticleCard {
  font-size: 100%;
  font-family: Arial, sans-serif;
}
</style>