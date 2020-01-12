<template>
  <div id="app">
    <Header />
    <NavBar :links="linkRoutes" />
    <nuxt />
    <Footer name="Tony Von Wolfe" />
  </div>
</template>

<script>
import firebase from 'firebase/app'
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAneynJ9HVrisOJ2r3JV35u3tAOB31_XPM',
    authDomain: 'life-of-tony.web.app',
    projectId: 'life-of-tony'
  })
}

export default {
  components: { NavBar, Header, Footer },
  head() {
    return {
      title: 'Life of Tony'
    }
  },
  data() {
    this.linkRoutes = []
    const linkNames = ['Home', 'Programming', 'Cars', 'Life', 'Travel', 'About']
    linkNames.forEach((linkName) => {
      this.linkRoutes.push({
        name: linkName,
        path: '/' + (linkName === 'Home' ? '' : linkName.toLowerCase())
      })
    })

    return {
      linkRoutes: this.linkRoutes
    }
  }
}
</script>

<style>
@import '../node_modules/typeface-roboto/index.css';

* {
  font-family: 'Roboto';
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  background-color: #303336;
  color: #ddd;
  min-height: 100vh;
}
</style>
