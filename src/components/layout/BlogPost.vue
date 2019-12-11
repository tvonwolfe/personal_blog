<template>
  <div class="blog_post">
    <div>
      <span class="post_title_container">
        <router-link
          class="post_title"
          :to="`${this.$route.name.toLowerCase()}/posts?id=${id}`"
          >{{ title }}</router-link
        >
      </span>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["id", "title", "content", "timestamp"]
};
</script>

<style scoped>
.blog_post {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 20px;
  background-color: #3d4043;
}

.blog_post:first-of-type {
  margin-top: 40px;
}

.post_title_container {
  margin: 30px 0px;
  font-weight: bold;
  font-size: 25px;
}

.post_title {
  text-decoration: none;
  color: #999;
  transition: 0.2s;
}

.post_title:hover {
  color: #bbb;
}
</style>
