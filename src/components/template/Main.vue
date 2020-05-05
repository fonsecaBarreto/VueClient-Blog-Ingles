<template>
  <div class="mainLayout">
    <app-header @logmein="loginModal=true"></app-header>
    <main class="content ">
      <slot></slot>
    </main>
    <app-footer></app-footer>
    <app-modal :show="loginModal" @close="loginModal=false"  size="md">
      <app-login @closeModal="loginModal=false"></app-login>
    </app-modal>
    
  </div>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"
import Modal from "../utils/TModal"
import Login from "../login/Login"

const INITIAL_STATE = {
     loginModal:false
}
export default {
  components:{
    appHeader:Header,appFooter:Footer,appModal:Modal,appLogin:Login
  },
  data(){ return {...INITIAL_STATE}}
  
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
  header.header{ grid-area: header;}
  footer.footer{ grid-area: footer;}
  main.content{ grid-area: content; }



</style>