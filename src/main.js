import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Programming from "./components/Programming.vue";
import Cars from "./components/Cars.vue";
import Life from "./components/Life.vue";
import Travel from "./components/Travel.vue";
import About from "./components/About.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/programming", component: Programming, name: "Programming" },
  { path: "/cars", component: Cars, name: "Cars" },
  { path: "/life", component: Life, name: "Life" },
  { path: "/travel", component: Travel, name: "Travel" },
  { path: "/about", component: About, name: "About" }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router,
  methods: {}
}).$mount("#app");
