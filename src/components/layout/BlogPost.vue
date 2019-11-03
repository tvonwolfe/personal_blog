<template>
  <div class="blog_post"></div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["title", "content", "timestamp"]
};
</script>

<style scoped>
.blog_post {
  display: flex;
}
</style>
