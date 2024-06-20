<script setup>
import { ref, computed } from 'vue'
import HomeView from './views/HomeView.vue'
import Article from './views/Article.vue'
import Registration from './views/Article.vue'
import Login from './views/Login.vue'
import Navbar from './components/Navbar.vue'

const routes = {
  '/': HomeView,
  '/article': Article,
  '/registration': Registration,
  '/login': Login
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/' || NotFound]
})
</script>

<template class="h-full">
  <!-- <a href="#">Home</a>
  <a href="#/article">Article</a> -->
  <Navbar />
  <component :is="currentView" />
</template>
