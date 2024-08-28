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
          <div >
            <img class="img" :src="'http://localhost:1337' + article.attributes.Couverture.data.attributes.url" alt="" />
            <h2>{{ article.attributes.Titre }}</h2>
            <slot/>
              <p> 
                {{ truncatedDescription }}
                <span v-if="showFullText">
                    {{ article.attributes.Description }}
                </span>
                <a v-else @click="showFullText = true">Lire + <span class="arrow-icon">›</span></a>
              </p>
          </div>
          <div class="dateCreation">
            {{ article.attributes.Date  }}
          </div> 
    </div>
</template>

<style>
.ArticleCard{
    justify-content: center;
    background-color: rgb(97, 155, 221);
    align-items: center;
    padding: 15px;
    
  }
  .ArticleCard h2 {
  font-weight: bolder;
  margin-bottom: 2px;
  }
  p {
    margin: 0;
  } 
  .ArticleCard .dateCreation{
  margin-top: 2px;
  text-align: end;
  }

  .ArticleCard .img {
  float: left;
  margin-top: 10px;
  margin-left: 3px;
}

.ArticleCard.inverted .img {
  float: right;
}
.ArticleCard .img {
  max-width: 20%; /* make the image responsive */
  height: auto; /* maintain aspect ratio */
  margin: 10px 3px; /* adjust margins as needed */
  float: left;
}
.arrow-icon {
  font-size: 12px;
  margin-left: 5px;
}

</style>