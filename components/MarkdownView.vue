<template>
  <div v-html="compiledMarkdown" class="markdown_area"></div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
export default {
  name: 'MarkdownView',
  props: { md: { type: String, default: '' } },
  computed: {
    compiledMarkdown() {
      return marked(this.md, {
        highlight: (code) => {
          return hljs.highlightAuto(code).value
        }
      })
    }
  }
}
</script>

<style>
@import '../node_modules/highlight.js/styles/nord.css';

pre {
  background-color: #2a2a2a;
  padding: 10px;
  border-radius: 5px;
}

code,
pre * {
  background-color: #2a2a2a;
  font-family: monospace;
  font-size: 1rem;
  white-space: pre;
}

.markdown_area * {
  margin-bottom: 12px;
  line-height: 1.5;
}

.markdown_area p {
  font-size: 17px;
}

.markdown_area h2 {
  font-size: 20px;
}

img {
  max-width: 95%;
  margin: auto;
}
</style>
