import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  //ADMIN_VIEWS!!
  {
    path: '/admin-hub',
    name: 'AdminHub',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Admin/Hub.vue'),
  },
  {
    path: '/more-info',
    name: 'MoreInfoPersonnel',
    component: () => import('../views/Admin/MoreInfoPersonnel.vue'),
  },
  {
    path: '/search',
    name: 'AdminSearch',
    component: () => import('../views/Admin/Search.vue'),
  },
  {
    path: '/sign-up-new-person',
    name: 'AdminSignUp',
    component: () => import('../views/Admin/SignUpNewPersonnel.vue'),
  },

  //CUSTOMER_SERVICE_VIEWS!!
  {
    path: '/driver-info',
    name: 'DriverInfo',
    component: () => import('../views/Customer_Service/DriverInfo.vue'),
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/Customer_Service/Feed.vue'),
  },
  {
    path: '/customer-service-hub',
    name: 'CustomerServiceHub',
    component: () => import('../views/Customer_Service/Hub.vue'),
  },
  {
    path: '/patient',
    name: 'Patient',
    component: () => import('../views/Customer_Service/Patient.vue'),
  },

  //DRIVER_VIEWS!!
  {
    path: '/emergency',
    name: 'Emergency',
    component: () => import('../views/Driver/Emergency.vue'),
  },
  {
    path: '/end-trip',
    name: 'EndTrip',
    component: () => import('../views/Driver/EndTrip.vue'),
  },
  {
    path: '/position',
    name: 'Position',
    component: () => import('../views/Driver/Position.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Driver/Profile.vue'),
  },
  {
    path: '/quarantine-pass',
    name: 'QuarantinePass',
    component: () => import('../views/Driver/QuarantinePass.vue'),
  },
  {
    path: '/start-trip',
    name: 'StartTrip',
    component: () => import('../views/Driver/StartTrip.vue'),
  },
  {
    path: '/statistic',
    name: 'Statistic',
    component: () => import('../views/Driver/Statistic.vue'),
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: () => import('../views/Driver/Tutorial.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/Driver/FAQ.vue')
  },
  {
    path: '/first-aid',
    name: 'FirstAid',
    component: () => import('../views/Driver/FirstAid.vue')
  },

  //USER_VIEWS!!
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User/User.vue'),
  },
  {
    path: '/userSignUp',
    name: 'UserSignUp',
    component: () => import('../views/User/UserSignUp.vue'),
  },
  {
    path: '/useremergency',
    name: 'UserEmergency',
    component: () => import('../views/User/UserEmergency.vue'),
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: () => import('../views/User/UserProfile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
