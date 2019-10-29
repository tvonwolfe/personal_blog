<template>
  <div>
    <router-link :to="{ path: this.route }" class="navbutton">
      {{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    title: String,
    route: String,
    currentNav: Boolean
  },
  methods: {}
};
</script>

<style>
.navbutton {
  background-color: #555;
  border: none;
  color: #ddd;
  padding: 20px;
  font-size: 17px;
  text-decoration: none;
  cursor: pointer;
}

.navbutton:hover {
  background-color: #444;
}

.router-link-exact-active {
  background-color: #777;
}
</style>
