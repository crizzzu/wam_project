import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import VueRouter from "vue-router";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Index from "./components/Index";
import Register from "./components/Register";

Vue.config.productionTip = false;

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login},
    { path: '/browse', component: Browse},
    { path: '/index', component: Index},
    { path: '/register', component: Register}
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');