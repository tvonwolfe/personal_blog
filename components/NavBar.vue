<template>
  <nav>
    <div v-show="isMobile()">
      <div class="mb_bar">
        <transition name="fade" mode="out-in">
          <menu-icon
            v-if="!showNavMenu"
            @click="showNavMenu = !showNavMenu"
            :size="40"
            class="menubutton"
          />
          <close-icon
            v-else
            @click="showNavMenu = !showNavMenu"
            :size="40"
            class="menubutton"
          />
        </transition>
      </div>
      <transition name="fade">
        <ul v-show="showNavMenu" class="navmenu">
          <nuxt-link
            :key="nav.title"
            v-for="nav in navselections"
            :to="{ path: nav.route }"
            @click.native="showNavMenu = !showNavMenu"
            class="mb_navbutton"
          >
            {{ nav.title }}
          </nuxt-link>
        </ul>
      </transition>
    </div>
    <div v-show="!isMobile()">
      <ul class="navbar">
        <nuxt-link
          :key="nav.title"
          v-for="nav in navselections"
          :to="{ path: nav.route }"
          class="dt_navbutton"
          >{{ nav.title }}
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import { mixinDetectMobile } from './DetectMobile.js'
export default {
  name: 'NavBar',
  components: { MenuIcon, CloseIcon },
  mixins: [mixinDetectMobile],
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      navselections: [],
      showNavMenu: false
    }
  },
  created() {
    this.links.forEach((route) => {
      this.navselections.push({
        title: route.name,
        route: route.path
      })
    })
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
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
  background-color: #3d4043;
}

ul {
  align-self: flex-start;
  background-color: #3d4043;
}

.dt_navbutton {
  background-color: #3d4043;
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
  background-color: #3d4043;
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

.menubutton {
  cursor: pointer;
  padding-left: 2%;
  transition: all 0.3s ease;
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
  background-color: #555;
}

.nuxt-link-exact-active,
.nuxt-link-exact-active:hover {
  background-color: #555;
}
</style>
