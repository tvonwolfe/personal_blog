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
      MobileClass: 'mb_feed_width',
      DesktopClass: 'dt_feed_width'
    }
  },
  methods: {}
}
</script>

<style>
#content_feed {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.mb_feed_width {
  max-width: 90%;
}

.dt_feed_width {
  width: auto;
  max-width: 720px;
}
</style>
