import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Main = () => import('@/views/Main.vue')
const Online = () => import('@/views/OnlineRanking.vue')
const Mobile = () => import('@/views/MobileRanking.vue')
const Genre = () => import('@/views/GenreRanking.vue')
const Notice = () => import('@/views/Notice.vue')
const Board = () => import('@/views/Board.vue')
const BoardPost = () => import('@/views/BoardPost.vue')
const BoardUpdate = () => import('@/views/BoardUpdate.vue')

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/online',
    name: 'online',
    component: Online
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: Mobile
  },
  {
    path: '/genre',
    name: 'genre',
    component: Genre
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice
  },
  {
    path: '/board',
    component: Board,
  },
  {
    path: '/board/post',
    component: BoardPost
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
