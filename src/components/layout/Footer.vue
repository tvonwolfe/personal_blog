<template>
  <div id="footer">
    <a href="https://github.com/twolfe21/personal_blog">
      <img id="github_icon" src="@/assets/github_icon.png" />
    </a>
    <p>&copy; {{ name }} {{ new Date().getFullYear() }}</p>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style>
#footer {
  margin: auto 0 0 0;
  text-align: right;
  border-top: 1px solid grey;
  padding: 15px 10px;
  color: #888;
  font-size: 12px;
}

#github_icon {
  max-width: 22px;
  float: left;
}
</style>
