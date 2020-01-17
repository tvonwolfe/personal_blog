<template>
  <div class="logincontainer">
    <div :class="[{ dt: !isMobile() }]" class="card">
      <div class="cardheading">
        <h1>Sign in</h1>
      </div>
      <div v-if="error" class="errormsg">
        <p>Invalid username or password.</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="textboxcontainer">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="form-control"
            name="email"
            value
            required
            autofocus
          />
        </div>
        <div class="textboxcontainer">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="form-control"
            name="password"
            required
          />
        </div>
        <div class="buttoncontainer">
          <button type="submit" class="submitbutton">
            {{ loginButtonText }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mixinDetectMobile } from '../../components/DetectMobile.js'
require('firebase/auth')
export default {
  mixins: [mixinDetectMobile],
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: false,
      loginButtonText: 'Sign in'
    }
  },
  methods: {
    handleSubmit() {
      this.loginButtonText = 'Signing in...'
      this.error = false
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          this.$router.push({
            path: this.$route.fullPath + '/new'
          })
        })
        .catch(() => {
          this.error = true
          this.loginButtonText = 'Sign in'
        })
    }
  }
}
</script>

<style scoped>
* {
  color: #ddd;
}

label {
  line-height: 2;
}

input {
  background: transparent;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px;
}

button {
  background: #003b6d;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px 10px;
  margin-top: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 20px 50px;
}

.dt {
  width: 500px;
}

.cardheading {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.cardheading > h1 {
  font-size: 30px;
  margin-bottom: 20px;
}

.logincontainer {
  margin: auto;
}

.logincontainer * {
  font-size: 20px;
}

.textboxcontainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.buttoncontainer {
  display: flex;
  flex-direction: row-reverse;
}

.errormsg {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.errormsg > p {
  color: red;
}
</style>
