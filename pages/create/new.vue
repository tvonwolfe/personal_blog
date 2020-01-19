<template>
  <div class="create_container">
    <form v-show="signedIn" @submit.prevent="submitNewPost">
      <div class="textbox_container">
        <h2>Title</h2>
        <input
          id="title"
          v-model="blogPostForm.title"
          name="title"
          for="Blog Post Title"
          value
          required
          autofocus
        />
      </div>
      <div class="textbox_container">
        <h2>Post Category</h2>
        <select v-model="blogPostForm.category" name="category" required>
          <option :key="category" v-for="category in categories">
            {{ category }}
          </option>
        </select>
      </div>
      <markdown-editor :input="blogPostForm.editorInput" class="editor">
      </markdown-editor>
      <div class="button_container">
        <button type="submit" class="submitbutton">
          {{ submitButtonText }}
        </button>
      </div>
    </form>
    <h1 id="nologin" v-show="!signedIn">
      You're not authorized to view this page.
    </h1>
  </div>
</template>

<script>
import firebase from 'firebase'
import MarkdownEditor from '../../components/MarkdownEditor.vue'
require('firebase/auth')
export default {
  components: {
    MarkdownEditor
  },
  data() {
    return {
      blogPostForm: {
        title: '',
        category: '',
        editorInput: 'Hello world...'
      },
      categories: ['Programming', 'Cars', 'Life', 'Travel'],
      submitButtonText: 'Submit Post',
      error: false,
      signedIn: false
    }
  },
  mounted() {
    if (firebase.auth().currentUser) {
      this.signedIn = true
    }
  },
  methods: {
    submitNewPost() {
      this.submitButtonText = 'Submitting...'
      this.error = false
      const dbCollectionRef = firebase.firestore().collection('blog-posts')
      dbCollectionRef
        .add({
          post_title: this.blogPostForm.title,
          post_category: this.blogPostForm.category.toLowerCase(),
          post_contents: this.blogPostForm.editorInput
        })
        .then((docRef) => {
          docRef.update({
            post_timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })

          docRef.get().then((doc) => {
            this.$router.push({
              path: '/' + doc.data().post_category.toLowerCase() + '/post',
              query: { id: doc.id }
            })
          })
        })
        .catch(() => {
          this.error = true
        })
    }
  }
}
</script>

<style scoped>
* {
  color: #ddd;
}

#nologin {
  color: #888;
}

.create_container {
  margin: auto;
}

.editor {
  margin-top: 5px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px auto 20px auto;
  min-height: 70vh;
  width: 800px;
}

.textbox_container input {
  background: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
  color: #ddd;
  width: 790px;
}

.textbox_container select {
  display: block;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 10px;
  background: transparent;
  background: url('https://i.ibb.co/b7xjLrB/selectbox-arrow.png') right center
    no-repeat;
  appearance: none;
  background-color: #303336;
  border: 1px solid grey;
  width: 25%;
  font-size: 18px;
  padding: 5px;
  border-radius: 3px;
  color: #ddd;
}

option {
  padding: 5px;
}

.button_container {
  display: flex;
  flex-direction: row-reverse;
}

.textbox_container {
  margin-bottom: 15px;
}

button {
  background: #003b6d;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px 10px;
  margin-top: 30px;
  font-size: 18px;
}
</style>
