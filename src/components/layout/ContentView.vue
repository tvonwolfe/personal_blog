<template>
  <div class="content_feed">
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
export default {
  name: "ContentView",
  components: { BlogPost },
  props: ["blogPosts"],
  methods: {}
};
</script>

<style>
.content_feed {
  display: flex;
  flex-direction: column;
  min-width: 50%;
  max-width: 50%;
  margin: auto;
}
</style>
