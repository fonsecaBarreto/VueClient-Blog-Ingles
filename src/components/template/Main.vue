<template>
  <div class="mainLayout" :class="{'light':get_lightMode}" >
   
    <app-header @logmein="loginModal=true" :light="get_lightMode"></app-header>
    <main class="content" :class="{'loading':get_loading}">
      <slot></slot>
       
    </main>

    <app-footer :light="get_lightMode"></app-footer>
    <app-modal :show="loginModal" @close="loginModal=false">
      <app-login @closeModal="loginModal=false"></app-login>
    </app-modal>
 
  <app-menu @logmein="loginModal=true"></app-menu>

    
  </div>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"
import Modal from "../utils/TModal"
import Login from "../login/Login"
import Menu from "./Menu"
const INITIAL_STATE = {
     loginModal:false
}
import {mapGetters} from "vuex"
export default {

  computed:{
    ...mapGetters(["get_loading","get_lightMode"])
  },
  components:{
    appHeader:Header,appFooter:Footer,appModal:Modal,appLogin:Login,AppMenu:Menu
  },
  data(){ 
    return {...INITIAL_STATE}
  }
  
}
</script>

<style>
  .mainLayout{
    height: 100%;
    width: 100%;
    display: grid;
    overflow-anchor: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header" "content" "footer";
  }
  .mainLayout header.header{ grid-area: header;}
  .mainLayout footer.footer{ grid-area: footer;}
  .mainLayout main.content{grid-area: content;position: relative; }

  .mainLayout.light{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:  "content" "footer";
    position: relative;
  }
  .mainLayout.light header.header{ position: absolute;top: 0;left: 0;z-index: 9999;}
  @media screen and (max-width: 960px) {
      .mainLayout{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        grid-template-areas:  "content" "footer";
        position: relative;
      }
      .mainLayout header.header{ position: fixed;top: 0;left: 0;z-index: 9999;width: 100%;}
          
    }
  .content.loading{opacity: .3;}
  .content.loading:after{
    content: "";
    position:absolute;
    top:0;left:0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(240, 240, 240, 0.9)
    }



</style>