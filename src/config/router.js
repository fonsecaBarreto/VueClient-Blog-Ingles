import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "../components/pages/home/Home"
import Article from "../components/pages/article/ArticleScreen"
import Category from "../components/pages/category/Category"
import NotFound from "../components/pages/NotFound"
import Exclusivo from "../components/pages/exclusivo/Exclusivo" 
import MainTemplate from "../components/template/Main"
/*  */
import store from './store/store'
const publicPages = ["/","/logout"]; // means the its not going to pass form a guard
const privatePages = ["/perfil", "/aluno/conteudos"]; // means thar it will be redirected with user is not logged
async function rotine(to,from,next){
  if(store.getters["get_lightMode"] == true) store.commit("set_lightMode",false);
  if(store.getters["get_Menu"] == true) store.commit("set_Menu",false);

  if(!publicPages.includes(to.path)){
    //if neither publioc or private it will pass to verification
    const err = await store.dispatch("verifyToken");
    if(privatePages.includes(to.path)){
      if(err) return next("/home");
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
  {path:"/home",          components:{templatelayout:MainTemplate,content:Home      }},
  {path:"/exclusivo",     components:{templatelayout:MainTemplate,content:Exclusivo }},
  {path:"/articles/:path",components:{templatelayout:MainTemplate,content:Article   }},
  {path:"/category/:path",components:{templatelayout:MainTemplate,content:Category  }},
  {path:"*",component:NotFound}
]
const scrollBehavior = (to, from, savedPosition)=>{
  return{x:0,y:0}
}
const router = new VueRouter({
  routes,
  mode:"history",
  scrollBehavior
});
router.beforeEach(rotine)
export default router