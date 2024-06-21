import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Article from '@/views/Article.vue'
import ArticleDetails from '@/views/ArticleDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/article/:id',
          component: ArticleDetails
        }
      ]
    }
  ]
})

export default router
