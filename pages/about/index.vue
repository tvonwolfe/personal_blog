<template>
  <div>
    <div class="content">
      <BlogPost
        :displayTitleAndDate="false"
        :content="abouttext"
        category="about"
      />
    </div>
  </div>
</template>

<script>
import BlogPost from '../../components/BlogPost.vue'
import text from '../../assets/about.md'

export default {
  components: {
    BlogPost
  },
  data() {
    return { abouttext: text }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  max-width: 700px;
}
</style>
