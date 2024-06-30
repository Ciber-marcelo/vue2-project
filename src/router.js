import Vue from 'vue';
import Router from 'vue-router';
import HomeUsers from './Views/HomeUsers.vue';
import DetailsUser from './Views/DetailsUser.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeUsers
    },
    {
      path: '/user/:id',
      name: 'User',
      component: DetailsUser,
      props: true,
    }
  ]
});