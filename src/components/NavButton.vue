<template>
  <div>
    <router-link :to="path">{{ title }}</router-link>
  </div>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    title: String,
    path: String
  }
};
</script>

<style></style>
