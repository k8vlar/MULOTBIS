<template>
  <div class="blog-container">
    <h1 style="font-size: 36px; font-weight: bold">Mulot blogs</h1>
    <div class="blog">
      <div>
        <div class="ArticleCard" v-if="mulotarticle">
          <h2 style="font-weight: bold; margin-bottom: 2px">{{ mulotarticle?.attributes?.Titre }}</h2>
          <img class="imageCouverture"
            :src="'http://localhost:1337' + mulotarticle?.attributes?.Couverture?.data?.attributes?.url" alt="" />
          <div v-html="renderContent(mulotarticle?.attributes?.ContenuLien)"></div>
          <br><br>
          <br><br>
          <div v-if="mulotarticle?.attributes?.imageSup1">
            <img class="imgsup1"
              :src="'http://localhost:1337' + mulotarticle?.attributes?.imageSup1?.data?.attributes?.url" alt="" />
            <div v-html="renderContent(mulotarticle?.attributes?.paragraph1)"></div>
          </div>
          <div v-else>
            <div v-html="renderContent(mulotarticle?.attributes?.paragraph1)"></div>
          </div>
          <div v-else>
            <div v-html="renderContent(mulotarticle.attributes.paragraph1)"></div>
          </div>
          <br>
          <div v-if="mulotarticle?.attributes?.imageSup2">
            <img class="imgsup2"
              :src="'http://localhost:1337' + mulotarticle?.attributes?.imageSup2?.data?.attributes?.url" alt="" />
            <div v-html="renderContent(mulotarticle?.attributes?.paragraph2)"></div>
          </div>
          <div v-else>
            <div v-html="renderContent(mulotarticle?.attributes?.paragraph2)"></div>
          </div>
          <div v-else>
            <div v-html="renderContent(mulotarticle.attributes.paragraph2)"></div>
          </div>
          <br>
          <div v-if="mulotarticle?.attributes?.imageSup3">
            <img class="imgsup3"
              :src="'http://localhost:1337' + mulotarticle?.attributes?.imageSup3?.data?.attributes?.url" alt="" />
            <div v-html="renderContent(mulotarticle?.attributes?.paragraph3)"></div>
          </div>
          <div v-else>
            <div v-html="renderContent(mulotarticle?.attributes?.paragraph3)"></div>
          </div>
          <div v-else>
            <div v-html="renderContent(mulotarticle.attributes.paragraph3)"></div>
          </div>
          <br>
          <div v-if="mulotarticle?.attributes?.imageSup4">
            <img class="imgsup4"
              :src="'http://localhost:1337' + mulotarticle?.attributes?.imageSup4?.data?.attributes?.url" alt="" />
            <div v-html="renderContent(mulotarticle?.attributes?.paragraph4)"></div>
          </div>
          <div v-else>
            <div v-html="renderContent(mulotarticle?.attributes?.paragraph4)"></div>
          </div>
          <div v-else>
            <div v-html="renderContent(mulotarticle.attributes.paragraph4)"></div>
          </div>
          <div class="dateCreation" style="margin-top: 2px; text-align: end">
            {{ new Date(mulotarticle.attributes.Date).toLocaleDateString('fr-FR') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  titre: 'Blog',
  components: {},
  data() {
    return {
      mulotarticle: null
    }
  },
  methods: {
    renderContent(content) {
      const html = content
        .map((item) => {
          if (item.type === 'paragraph') {
            return `<p>${item.children
              .map((child) => {
                if (child.type === 'text') {
                  return child.text
                } else if (child.type === 'link') {
                  return `<a class= "blogText" href="${child.url}">${child.children[0].text}</a>`
                }
              })
              .join('')}</p>`
          }
        })
        .join('')
      return html
    }
  },
  mounted() {
    fetch(`http://localhost:1337/api/mulotarticles/${this.$route.params.id}?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        this.mulotarticle = res.data
        console.log('articles', this.mulotarticle)
      })
  }
}
</script>

<style>
.blog {
  display: flex;
  align-items: center;
  font-family:
    Open Sans,
    sans-serif;
  background-color: #f7f7f7;
  /* neutral background color */
}

h1 {
  text-align: center;
}

.ArticleCard {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 18px;
  padding: 20px;
  background-color: #f7f7f7;
  margin: auto;
}

.ArticleCard h2 {
  font-weight: bold;
  margin-bottom: 2px;
}

p {
  margin: 0;
}

.ArticleCard .dateCreation {
  margin-top: 2px;
  text-align: end;
}

.imageCouverture {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin: 10px;
  margin-top: 10px;
  margin-left: 3px;
  border-radius: 10px;

}

.ArticleCard .imgsup1,
.imgsup2,
.imgsup3,
.imgsup4 {
  max-width: 7%;
  height: auto;
  margin: 10px;
  margin-top: 10px;
  margin-left: 3px;
  border-radius: 10px;
}

.ArticleCard .imgsup1 {
  float: left;
  clear: left;
}

.ArticleCard .imgsup2 {
  float: right;
  clear: right;
}

.ArticleCard .imgsup3 {
  float: left;
  clear: left;
}

.ArticleCard .imgsup4 {
  float: right;
  clear: right;
}

.arrow-icon {
  font-size: 12px;
  margin-left: 5px;
}

.blogText {
  font-weight: bold;
  color: #6999ff;
  /* accent color */
}
</style>