<template>
  <div>
    <BeatLoader
      class="loadspinner"
      :loading="this.isLoading"
      color="#666"
      :size="50"
    />
    <span class="loaderror" v-if="this.errorLoading">
      Something went wrong :(
    </span>
    <ContentView :blogPosts="blogPosts" />
  </div>
</template>

<script>
import ContentView from "./layout/ContentView.vue";
import { BeatLoader } from "@saeris/vue-spinners";
import axios from "axios";

export default {
  name: "About",
  components: { ContentView, BeatLoader },
  data() {
    return {
      blogPosts: null,
      isLoading: false,
      errorLoading: false
    };
  },
  mounted() {
    this.isLoading = true;

    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10").then(
      response => {
        this.blogPosts = response.data;
        this.isLoading = false;
      },
      error => {
        this.errorLoading = true;
        this.isLoading = false;
        error;
      }
    );
  }
};
</script>

<style scoped>
.loaderror {
  color: #777;
}

div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
</style>
