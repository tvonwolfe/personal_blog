<template>
  <div class="blog_post">
    <span v-show="!this.$route.path.includes(category)" class="metadata_bar">
      <nuxt-link :to="{ path: '/' + category }" class="category_link">
        {{ categoryLink }}
      </nuxt-link>
    </span>
    <span v-if="displayTitleAndDate" class="post_title">
      <nuxt-link
        :to="{ path: getNextPath(), query: { id: id } }"
        class="post_title"
      >
        {{ title }}
      </nuxt-link>
    </span>
    <div v-if="displayTitleAndDate" class="timestamp">
      <p>
        {{ formatPostDate() }}
      </p>
    </div>
    <MarkdownView :md="content" />
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
    category: {
      type: String,
      default: ''
    },
    title: String,
    content: String,
    timestamp: Number,
    displayTitleAndDate: { type: Boolean, default: true }
  },
  data() {
    return {
      categoryLink: ''
    }
  },
  created() {
    this.categoryLink =
      this.category.charAt(0).toUpperCase() + this.category.substring(1)
  },
  methods: {
    formatPostDate() {
      return new Date(this.timestamp * 1000).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    getNextPath() {
      const path = '/' + this.category + '/post'
      const pathArray = path.split('/')
      if (pathArray.length !== new Set(pathArray).size) {
        return this.$route.path
      } else {
        return path
      }
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
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19);
}

.blog_post:first-of-type {
  margin-top: 25px;
}

.blog_post:last-of-type {
  margin-bottom: 35px;
}

.metadata_bar {
  display: flex;
  flex-direction: row-reverse;
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

.post_title:hover {
  color: #aaa;
}
</style>
