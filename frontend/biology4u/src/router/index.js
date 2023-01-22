import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPageView.vue'
import SignIn from '../views/SignInView.vue'
import LogIn from '../views/LogInView.vue'
import MainPage from '../views/MainPageView.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: LogIn
  },
  {
    path: '/main',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/main/:id',
    name: 'mainPageSubTopic',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
