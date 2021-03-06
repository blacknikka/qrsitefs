import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/components/Signup';
import Signin from '@/components/Signin';
import MainPage from '@/components/MainPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    }
  ]
});
