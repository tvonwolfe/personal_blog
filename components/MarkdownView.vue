<template>
  <div v-html="compiledMarkdown" class="markdown_area"></div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'MarkdownView',
  props: { md: { type: String, default: '' } },
  computed: {
    compiledMarkdown() {
      return marked(this.md)
    }
  }
}
</script>

<style>
a,
a:visited {
  text-decoration: none;
  color: #279cd6;
}

.markdown_area * {
  line-height: 1.5;
  margin-top: 15px;
}
</style>
