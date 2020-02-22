<template>
  <div id="footer">
    <ul class="social_links">
      <li>
        <a target="_blank" href="https://github.com/twolfe21/">
          <img src="@/assets/github_icon.png" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/tonyvonwolfe">
          <img src="@/assets/twitter_icon.png" />
        </a>
      </li>
    </ul>
    <span>
      <p>&copy; Tony Von Wolfe {{ new Date().getFullYear() }}</p>
    </span>
  </div>
</template>

<style scoped>
.social_links {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
}

.social_links li {
  padding-right: 10px;
}

li + li {
  border-left: 1px solid #4c4c4c;
  padding-left: 10px;
}

#footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 0 0 0;
  border-top: 1px solid #4c4c4c;
  padding: 10px 20px;
  color: #888;
  font-size: 12px;
}

img {
  max-width: 22px;
}

p {
  margin-top: 5px;
  line-height: 1;
}
</style>
