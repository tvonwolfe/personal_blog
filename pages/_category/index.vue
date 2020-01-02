<template>
  <div :class="[{ load_spinner: isLoading || errorLoading }]">
    <BeatLoader
      :loading="isLoading"
      :size="50"
      class="load_spinner"
      color="#666"
    />
    <span v-if="errorLoading" class="loaderror"
      ><h2>Something went wrong :(</h2></span
    >
    <ContentView v-if="!errorLoading" :blogPosts="posts" />
  </div>
</template>

<script>
import { BeatLoader } from '@saeris/vue-spinners'
import firebase from 'firebase/app'
import ContentView from '../../components/ContentView.vue'
import 'firebase/firestore'

export default {
  components: { ContentView, BeatLoader },
  data() {
    return {
      isLoading: false,
      errorLoading: false,
      posts: []
    }
  },
  mounted() {
    this.isLoading = true
    const dbCollectionRef = firebase.firestore().collection('blog-posts')
    dbCollectionRef
      .where('post_category', '==', this.$route.params.category)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          this.posts.push({
            id: doc.id,
            category: data.post_category,
            title: data.post_title,
            content: data.post_contents,
            timestamp: data.post_timestamp.seconds
          })
        })
        this.isLoading = false
      })
      .catch(() => {
        this.errorLoading = true
        this.isLoading = false
      })
  }
}
</script>

<style scoped>
.loaderror {
  color: #777;
}

.load_spinner {
  margin: auto;
}

div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
