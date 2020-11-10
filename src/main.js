import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import SignInDialogPersonnel from './components/SignIn/SignInDialogPersonnel.vue';
import SignInDialogUser from './components/SignIn/SignInDialogUser.vue';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.vue';
import Calendar from './components/Calendar/Calendar.vue';
import PatientDialog from './components/PatientInfo/PatientDialog.vue';
import DriverDialog from './components/DriverDialog/DriverDialog.vue';

Vue.config.productionTip = false;
Vue.component('app-dialog-user', SignInDialogUser);
Vue.component('app-dialog-patient', PatientDialog);
Vue.component('app-dialog-driver', DriverDialog);
Vue.component('app-dialog-personnel', SignInDialogPersonnel);
Vue.component('app-hamburger-menu', HamburgerMenu);
Vue.component('app-calendar-lightmode', Calendar);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
