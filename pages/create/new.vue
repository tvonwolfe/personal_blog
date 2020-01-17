<template>
  <markdown-editor :input="editorInput"></markdown-editor>
</template>

<script>
import MarkdownEditor from '../../components/MarkdownEditor.vue'
export default {
  components: {
    MarkdownEditor
  },
  data() {
    return {
      editorInput: 'Hello world...'
    }
  }
}
</script>

<style scoped></style>
