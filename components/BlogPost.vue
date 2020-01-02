<template>
  <div class="blog_post">
    <div>
      <span class="metadata_bar">
        <nuxt-link :to="{ path: '/' + category }" class="category_link">{{
          this.$route.params.category === category
            ? ''
            : category.charAt(0).toUpperCase() + category.slice(1)
        }}</nuxt-link>
      </span>
      <span class="post_title">
        <nuxt-link
          :to="`${this.$route.name.toLowerCase()}/posts?id=${id}`"
          class="post_title"
          >{{ title }}</nuxt-link
        >
      </span>
      <div class="timestamp">
        <p>
          {{ formatPostDate() }}
        </p>
      </div>
      <MarkdownView :md="content" />
    </div>
  </div>
</template>

<script>
import MarkdownView from './MarkdownView.vue'
export default {
  name: 'BlogPost',
  components: {
    MarkdownView
  },
  props: {
    id: String,
    category: String,
    title: String,
    content: String,
    timestamp: Number
  },
  methods: {
    formatPostDate() {
      return new Date(this.timestamp * 1000).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.blog_post {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 15px;
  background-color: #3d4043;
  border-radius: 4px;
  width: 95%;
}

.blog_post:first-of-type {
  margin-top: 25px;
}

.blog_post:last-of-type {
  margin-bottom: 35px;
}

.metadata_bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.timestamp {
  font-size: 12px;
  color: #888;
  margin: 0px 0px 10px 0px;
}

.post_title {
  display: flex;
  flex-direction: row;
}

.post_title {
  text-decoration: none;
  color: #ccc;
  transition: 0.2s;
  font-weight: bold;
  font-size: 25px;
  margin: 0px 0px 2px 0px;
}

.post_title:visited {
  color: #999;
}

.post_title:hover {
  color: #bbb;
}
</style>
