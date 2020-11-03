import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import SignInDialogPersonnel from './components/SignIn/SignInDialogPersonnel.vue';
import SignInDialogUser from './components/SignIn/SignInDialogUser.vue';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.vue';

Vue.config.productionTip = false;
Vue.component('app-dialog-user', SignInDialogUser);
Vue.component('app-dialog-personnel', SignInDialogPersonnel);
Vue.component('app-hamburger-menu', HamburgerMenu);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
