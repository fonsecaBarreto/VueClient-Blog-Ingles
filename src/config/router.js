import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "../components/pages/home/Home"
import Article from "../components/pages/article/ArticleScreen"
import Category from "../components/pages/category/Category"
import NotFound from "../components/pages/NotFound"
import Exclusivo from "../components/pages/exclusivo/Exclusivo" 


const Vendas = resolve =>{
  require.ensure(["../components/pages/vendas/Vendas"],()=>{
    resolve(require("../components/pages/vendas/Vendas"))
  })
}
import Sobre from "../components/pages/sobre/Sobre" 
import MainTemplate from "../components/template/Main"
import Curso from "../components/pages/curso/Curso"
/*  */
import store from './store/store'
const publicPages = ["/","/logout"]; // means the its not going to pass form a guard
const privatePages = ["/perfil", "/aluno/conteudos"]; // means thar it will be redirected with user is not logged
async function rotine(to,from,next){
  if(store.getters["get_chavosoMode"] == true) store.commit("set_chavosoMode",false);
  if(store.getters["get_lightMode"] == true) store.commit("set_lightMode",false);
  if(store.getters["get_Menu"] == true) store.commit("set_Menu",false);
  if(store.getters["get_loading"] == false) store.commit("set_loading",true)
  if(!publicPages.includes(to.path)){
    const err = await store.dispatch("verifyToken");
    if(privatePages.includes(to.path)){
      if(err) return next("/home");
    }
  }next()
}

async function logout(to,from,next){
  await store.dispatch("clearStorage");
  if(store.getters["get_loading"] == true) store.commit("set_loading",false)
  next("/")
}
const routes = [
  {path:"/",redirect:"/home"},
  {path:"/logout",beforeEnter:logout},

  {path:"/curso",          components:{templatelayout:MainTemplate,content:Curso    }},
  {path:"/home",          components:{templatelayout:MainTemplate,content:Home      }},
  {path:"/vendas",     components:{templatelayout:MainTemplate,content:Vendas }},
  {path:"/exclusivo",     components:{templatelayout:MainTemplate,content:Exclusivo }},
  {path:"/sobre",     components:{templatelayout:MainTemplate,content:Sobre }},
  {path:"/articles/:path",components:{templatelayout:MainTemplate,content:Article   }},
  {path:"/category/:path",components:{templatelayout:MainTemplate,content:Category  }},
  {path:"*",component:NotFound}
]

const router = new VueRouter({
  routes,
  mode:"history",
  
});
router.afterEach(() => {
  if(store.getters["get_loading"] == true) store.commit("set_loading",false)
  window.scrollTo(0, 0)
})
router.beforeEach(rotine)
export default router