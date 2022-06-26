import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';
import store from "@/store";

const routes = [
  {
    path: '/',
    redirect: 'news',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        redirect: 'news',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/news',
        name: 'Yangiliklar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/news/News.vue')
      },
      {
        path: '/news/:slug',
        name: 'yangiliklar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/news/Show.vue')
      },
      {
        path: '/problems',
        name: 'Masalalar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/problems/List.vue')
      },
      {
        path: '/problems/:id',
        name: 'masalalar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/problems/Show.vue')
      },
      {
        path: '/users',
        name: 'Foydalanuvchilar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/users/List.vue')
      },
      {
        path: '/profile',
        name: 'foydalanuvchilar',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/tasks',
        name: 'Yechimlar',
        component: () => import(/* webpackChunkName: "demo" */ '../views/tasks/List.vue')
      },
      {
        path: '/tasks/:id',
        name: 'yechimlar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/tasks/Show.vue')
      },
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      {
        path: '/logout',
        name: 'logout',
        component: {
          beforeRouteEnter(to, from, next) {
            const destination = {
              path:  "/",
              query: from.query,
              params: from.params
            };
            if (!from) {
              console.log("no from");
            }
            store.dispatch("logout");
            next(destination);
          }
        }
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
