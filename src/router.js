import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index.vue';
import ProjectsPage from './views/projects.vue';


const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/projects',
    name: 'ProjectsPage',
    component: ProjectsPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
