import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';
import Projects from '@/views/Projects.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '*',  // Catch-all route for undefined paths
      redirect: '/',  // Redirect to Index
    },
  ],
});
