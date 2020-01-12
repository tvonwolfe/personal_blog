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
  font-size: 0.85rem;
  white-space: pre;
}

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
