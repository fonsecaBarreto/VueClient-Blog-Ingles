import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "../components/pages/home/Home"
import Article from "../components/pages/article/ArticleScreen"
import NotFound from "../components/pages/NotFound"
/*  */
import store from './store/store'
const publicPages = ["/","/logout"]; // means the its not going to pass form a guard
const privatePages = ["/perfil"]; // means thar it will be redirected with user is not logged
async function guard(to,from,next){
  if(!publicPages.includes(to.path)){
    const err = await store.dispatch("verifyToken");
    if(privatePages.includes(to.path)){
      if(err && err.errors && err.errors.length) return next("/home");
    }
  }next()
}
async function logout(to,from,next){
  await store.dispatch("clearStorage");
  next("/")
}
const routes = [
  {path:"/",redirect:"/home"},
  {path:"/logout",beforeEnter:logout},
  {path:"/home",component:Home},
  {path:"/articles/:path",component:Article},
  {path:"*",component:NotFound}
]
const router = new VueRouter({routes,mode:"history"})
router.beforeEach(guard)

export default router