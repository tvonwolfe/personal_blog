<template>
  <div :class="[{ load_spinner: isLoading || errorLoading }]">
    <BeatLoader
      :loading="isLoading && !errorLoading"
      :size="50"
      class="load_spinner"
      color="#666"
    />
    <span v-if="errorLoading" class="loaderror">
      <h2>Something went wrong :(</h2>
    </span>
    <ContentView
      v-if="$route.query.id && !isLoading && !errorLoading"
      :blogPosts="[postData]"
    />
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
      postData: {
        id: '',
        category: '',
        title: '',
        content: '',
        timestamp: 0
      },
      isLoading: false,
      errorLoading: false
    }
  },
  mounted() {
    this.isLoading = true
    const dbCollectionRef = firebase.firestore().collection('blog-posts')
    dbCollectionRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (this.$route.query.id) {
            if (doc.id === this.$route.query.id) {
              const data = doc.data()
              this.postData = {
                id: doc.id,
                category: data.post_category,
                title: data.post_title,
                content: data.post_contents,
                timestamp: data.post_timestamp.seconds
              }
            }
          }
        })
      })
      .catch(() => {
        this.errorLoading = true
      })
      .finally(() => {
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
