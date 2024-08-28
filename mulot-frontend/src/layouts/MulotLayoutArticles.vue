<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  inverted: {
    type: Boolean
  },
});

function truncate(text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
}

let showFullText = ref(false);
const truncatedDescription = computed(() => truncate(props.article.attributes.Description, 200, '...'));
</script>

<template>
  <div :class="'ArticleCard' + (inverted ? ' inverted' : '')">
    <!-- {{ JSON.stringify(article) }}  -->
    <div>
      <img class="img" :src="'http://localhost:1337' + article.attributes.Couverture.data.attributes.url" alt="" />
      <RouterLink :to="'/blog/' + article.id">
        <h2>{{ article.attributes.Titre }}</h2>
      </RouterLink>
      <slot />
        <p>
          {{ truncatedDescription }}
          <span v-if="showFullText">
            {{ article.attributes.Description }}
          </span>
          <a v-else @click="showFullText = true">Lire + <span class="arrow-icon">›</span></a>
        </p>
    </div>
    <div class="dateCreation">
      {{ new Date(article.attributes.Date).toLocaleDateString('fr-FR') }}
    </div>
    <RouterLink :to="'/blog/' + article.id">
      <button>
        <slot name="Blog" />
      </button>
    </RouterLink>

  </div>
</template>

<style>
.ArticleCard {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 18px;
  padding: 20px;
  background-color: #f7f7f7;
}

.ArticleCard h2 {
  color: #333;
  font-size: 90%;
  margin-bottom: 10px;
  
}

.ArticleCard .img {
  max-width: 40%;
  height: auto;
  margin: 10px;
  float: right;
}

.ArticleCard button {
  background-color: #333;
  color: #fff;
  font-size: 18px;
  margin: 10px;
}

.ArticleCard.inverted .img {
  float: left;
}

.arrow-icon {
  font-size: 12px;
  margin-left: 5px;
}
</style>