import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPageView.vue'
import SignUp from '../views/SignUpView.vue'
import LogIn from '../views/LogInView.vue'
import MainPage from '../views/MainPageView.vue'
import LectionComponent from '../components/LectionComponent.vue'
import FilesComponent from '../components/FilesComponent.vue'
import ShortPlanComponent from '../components/ShortPlanComponent.vue'
import SubTopicTest from '../components/SubTopicTest.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
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
    path: '/main/topic/:id',
    name: 'mainPageSubTopic',
    component: LectionComponent
  },
  {
    path: '/main/files/:id',
    name: 'mainPageTopicFiles',
    component: FilesComponent
  },
  {
    path: '/main/plan/:id',
    name: 'mainPageTopicShortPlan',
    component: ShortPlanComponent
  },
  {
    path: '/main/tests/:id',
    name: 'SubTopicTest',
    component: SubTopicTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from) => {
  
// })

export default router
