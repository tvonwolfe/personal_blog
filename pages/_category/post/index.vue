<template>
  <ContentView />
</template>

<script>
import firebase from 'firebase/app'
import ContentView from '../../../components/ContentView.vue'
import 'firebase/firestore'

export default {
  components: {
    ContentView
  },
  props: {
    postData: {
      type: Object,
      default: null
    }
  },
  mounted() {
    if (this.postData === null) {
    }
  }
}
</script>

<style scoped></style>
