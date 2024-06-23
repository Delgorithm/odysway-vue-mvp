import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Article from '@/views/Article.vue'
import ArticleDetails from '@/views/ArticleDetails.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/article', component: Article },
  { path: '/article/:id', component: ArticleDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
