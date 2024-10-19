import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '@/views/AddView.vue'
import DetailView from '@/views/DetailView.vue'
import EditForm from '@/components/EditForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monans/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/create',
      name: 'create',
      component: AddView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditForm
    }
  ]
})

export default router
