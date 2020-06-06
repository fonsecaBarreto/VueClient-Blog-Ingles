<template>
  <div class="mainLayout" :class="{'light':get_lightMode,'chavoso':get_chavosoMode}" >
   
    <app-header @logmein="loginModal=true" :light="get_lightMode" :chavoso="get_chavosoMode"></app-header>

    <main class="content bd-red"  v-show="get_loading != true">
      <slot></slot>
    </main>

    <app-footer :light="get_lightMode"  v-if="get_loading != true"></app-footer>
    <app-modal :show="loginModal" @close="loginModal=false">
      <app-login @closeModal="loginModal=false"></app-login>
    </app-modal>
 
    <app-menu @logmein="loginModal=true"></app-menu>
    <div class="loading-div" v-if="get_loading == true"></div>
    
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
    ...mapGetters(["get_loading","get_lightMode","get_chavosoMode"])
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
    overflow-y: scroll;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header" "content" "footer";
  }
  .mainLayout header.header{ grid-area: header;}
  .mainLayout footer.footer{ grid-area: footer;}
  .mainLayout main.content{grid-area: content;}

  .mainLayout.light{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:  "content" "footer";
    position: relative;
  }
  .mainLayout.light header.header{ position: absolute;top: 0;left: 0;z-index: 9999;}


  .content.loading{opacity: .3;}
  .content.loading:after{
    content: "";
    position:absolute;
    top:0;left:0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(240, 240, 240, 0.9)
  }
  .loading-div{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(248, 247, 247, 0.4);
    background-image: url("../../assets/loading.svg");
    background-repeat: no-repeat;
    background-size: 180px;
    background-position: center;
    z-index: 9999;
  }


</style>