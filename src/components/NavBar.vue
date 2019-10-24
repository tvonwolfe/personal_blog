<template>
  <div>
    <div class="navbar">
      <NavButton title="Home" path="/" />
    </div>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";

export default {
  name: "NavBar",
  components: {
    NavButton
  }
};
</script>

<style scoped></style>
