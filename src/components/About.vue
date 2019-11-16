<template>
  <div>
    <ContentView :blogPosts="blogPosts" />
  </div>
</template>

<script>
import ContentView from "./layout/ContentView.vue";
import axios from "axios";

export default {
  name: "About",
  components: { ContentView },
  data() {
    return {
      blogPosts: null
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        this.blogPosts = response.data;
      });
  }
};
</script>

<style scoped></style>
