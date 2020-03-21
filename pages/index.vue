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
    <ContentView v-if="!isLoading && !errorLoading" :blogPosts="posts" />
  </div>
</template>

<script>
import { BeatLoader } from '@saeris/vue-spinners'
import firebase from 'firebase/app'
import ContentView from '../components/ContentView.vue'
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
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          this.posts.push({
            id: doc.id,
            category: data.post_category,
            title: data.post_title,
            content: this.getPreviewText(data.post_contents),
            timestamp: data.post_timestamp.seconds
          })

          this.posts.sort((a, b) => {
            if (a.timestamp > b.timestamp) {
              return -1
            } else {
              return 1
            }
          })
        })
        this.isLoading = false
      })
      .catch(() => {
        this.errorLoading = true
      })
  },
  methods: {
    nthIndexOf(str, pattern, n) {
      const L = str.length
      let i = -1
      while (n-- && i++ < L) {
        i = str.indexOf(pattern, i)
        if (i < 0) break
      }
      return i
    },
    getPreviewText(content) {
      const thirdParagraphIndex = this.nthIndexOf(content, '\n\n', 2)
      if (thirdParagraphIndex === -1) {
        return content + '...'
      }
      return content.substring(0, thirdParagraphIndex) + '...'
    }
  }
}
</script>

<style>
.loaderror {
  color: #777;
}

.load_spinner {
  margin: auto;
}

.message {
  color: #888;
}
</style>
