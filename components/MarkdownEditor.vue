<template>
  <div class="editor_container">
    <textarea
      :value="inputData"
      @input="update"
      @keydown.tab.exact.prevent="tabRight($event)"
      @keydown.shift.tab.prevent="tabLeft($event)"
      class="text_editor"
    ></textarea>
    <MarkdownView :md="inputData" class="render_area" />
  </div>
</template>

<script>
import _ from 'lodash'
import MarkdownView from '../components/MarkdownView.vue'
export default {
  components: {
    MarkdownView
  },
  props: {
    input: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputData: this.input
    }
  },
  methods: {
    tabRight() {
      this.inputData += '\t'
    },
    update: _.debounce(function(e) {
      this.inputData = e.target.value
    }, 300)
  }
}
</script>

<style scoped>
.editor_container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50vh;
  margin: auto;
  width: 100%;
  border: transparent;
  border-radius: 5px;
}

.text_editor {
  width: 100%;
  resize: none;
  border: none;
  border-right: solid 1px #ccc;
  padding: 10px;
  color: #ddd;
  padding: 10px;
  background-color: #444;
  font-family: 'Monaco', courier, monospace;
}

.render_area {
  width: 100%;
  padding: 10px;
  background-color: #222;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  overflow: scroll;
}
</style>
