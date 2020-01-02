<template>
  <div id="footer">
    <span>
      <a href="https://github.com/twolfe21/personal_blog">
        <img src="@/assets/github_icon.png" />
      </a>
    </span>
    <span>
      <p>&copy; {{ name }} {{ new Date().getFullYear() }}</p>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
#footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 0 0 0;
  border-top: 1px solid grey;
  padding: 10px 20px;
  color: #888;
  font-size: 12px;
}

img {
  max-width: 22px;
}

p {
  margin-top: 5px;
}
</style>
