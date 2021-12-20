import { createRouter, createWebHashHistory } from 'vue-router';
import { initRouter } from '../utils/asyncRouter';
export const Comppath =   initRouter();

const routes = [{
  title: 'Root',
  name: 'Root',
  path: '/',
  redirect:'/home',
  component: () => import('../view/index/index.vue'),
  children:[
   ...Comppath
  ]
}]
 export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from) {
      if (to.path !== from.path){
        return { top: 0 };
      }
    },
  }); 



