<template>
  <nav>
    <div v-if="isMobile()">
      <div class="mb_bar">
        <transition name="fade" mode="out-in">
          <i
            class="material-icons menu"
            v-if="!showNavMenu"
            @click="showNavMenu = !showNavMenu"
          >
            menu
          </i>
          <i
            class="material-icons clear"
            v-else
            @click="showNavMenu = !showNavMenu"
          >
            clear
          </i>
        </transition>
      </div>
      <transition name="fade">
        <ul v-if="showNavMenu" class="navmenu">
          <router-link
            :key="nav.title"
            v-for="nav in navselections"
            :to="{ path: nav.route }"
            class="mb_navbutton"
            @click.native="showNavMenu = !showNavMenu"
          >
            {{ nav.title }}
          </router-link>
        </ul>
      </transition>
    </div>
    <div v-else>
      <ul class="navbar">
        <router-link
          :key="nav.title"
          v-for="nav in navselections"
          :to="{ path: nav.route }"
          class="dt_navbutton"
          >{{ nav.title }}
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mixinDetectMobile } from "../../detectMobile.js";
export default {
  name: "Nav",
  components: {},
  mixins: [mixinDetectMobile],
  created() {
    this.$router.options.routes.forEach(route => {
      this.navselections.push({
        title: route.name,
        route: route.path
      });
    });
  },
  data() {
    return {
      navselections: [],
      showNavMenu: false
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.navbar {
  display: flex;
  background-color: #555;
  overflow: hidden;
  padding: 0;
}

.navmenu {
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  align-self: flex-start;
  background-color: #555;
}

ul {
  align-self: flex-start;
  background-color: #555;
}

.dt_navbutton {
  background-color: #555;
  border: none;
  color: #ddd;
  padding: 10px 20px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
}

.mb_bar {
  background-color: #555;
}

.mb_navbutton {
  align-items: center;
  color: #ddd;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  padding: 10px 0px;
  width: 100%;
}

.menu,
.clear {
  cursor: pointer;
  font-size: 3em;
  padding-left: 2%;
  transition: all 0.3s ease;
  width: 1.5em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.dt_navbutton:hover {
  background-color: #444;
}

.router-link-exact-active,
.router-link-exact-active:hover {
  background-color: #777;
}
</style>
