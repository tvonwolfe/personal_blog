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
      :title="post.title"
      :content="post.body"
      :id="post.id"
    />
  </div>
</template>

<script>
import BlogPost from "./BlogPost.vue";
import { mixinDetectMobile } from "../../detectMobile.js";
export default {
  name: "ContentView",
  components: { BlogPost },
  props: ["blogPosts"],
  mixins: [mixinDetectMobile],
  data() {
    return {
      MobileClass: "mb_feed_width",
      DesktopClass: "dt_feed_width"
    };
  },
  methods: {}
};
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
  max-width: 50%;
}
</style>
