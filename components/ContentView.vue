<template>
  <div
    id="content_feed"
    v-bind:class="[
      { mb_feed_width: isMobile() },
      { dt_feed_width: !isMobile() }
    ]"
  >
    <BlogPost
      :key="post.id"
      v-for="post in blogPosts"
      :category="post.category"
      :title="post.title"
      :content="post.content"
      :timestamp="post.timestamp"
      :id="post.id"
    />
    <div v-show="noBlogPosts" class="noposts">
      <h1>There's nothing here yet...</h1>
    </div>
  </div>
</template>

<script>
import { mixinDetectMobile } from './DetectMobile.js'
import BlogPost from './BlogPost.vue'
export default {
  name: 'ContentView',
  components: { BlogPost },
  mixins: [mixinDetectMobile],
  props: {
    blogPosts: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      noBlogPosts: false
    }
  },
  mounted() {
    if (this.blogPosts.length === 0) {
      this.noBlogPosts = true
    }
  }
}
</script>

<style>
#content_feed {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.noposts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  min-height: 50vh;
  color: #888;
}

.mb_feed_width {
  max-width: 90%;
}

.dt_feed_width {
  width: 720px;
  max-width: 720px;
}
</style>
