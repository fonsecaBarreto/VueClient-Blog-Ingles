<template>
  <header class="header" :class="{light,'whiterize':get_Menu}">
    <div class="app-container  header-container">
      
      <div class="brand" href="">
        <router-link to="/">
          <img class="" src="../../assets/logo.png" alt="">
        </router-link>
       
      </div>

      <nav class="right-nav ">
        <pages-nav class="pages-nav" :white="light"></pages-nav>
        <div class="toggle-button " @click='toggleMenu()'>
          <font-awesome-icon icon="bars"></font-awesome-icon>
        </div>

        <button-a project round 
          @click.native="logmein()"
          v-if="get_user === null " class="botao-do-aluno">Área do aluno
        </button-a>


        <div v-if="get_user !== null && get_screenWidth > 960" class="dropbox-field ml-4">
            <profile-avatar :user="get_user"></profile-avatar>
            <drop-down >
               <router-link to="/logout">logout</router-link>
               <a href="https://aluno.mathewslins.com">Area do Aluno</a>
            </drop-down>
        </div>

      </nav>

    </div>
  
  </header>
</template>

<script>
import ButtonA from "../ButtonA"
import {mapGetters} from "vuex"
import DropDown from "../utils/Dropdown"
import ImageVp from "../utils/ImageVp"
import PagesNav from "./PagesNav"
import ProfileAvatar from "../utils/ProfileAvatar"
export default {
  components:{ButtonA,DropDown,ImageVp,PagesNav,ProfileAvatar},
  props:{
    light:{type:Boolean,default:false}
  },
  computed:{...mapGetters(["get_user","get_Menu","get_screenWidth"])},
  methods:{
    logmein(){
      this.$emit("logmein")
    },
    toggleMenu(){
      this.$store.dispatch("toggleMenu")
    }
  }
  
}
</script>

<style scoped>
/* header */
header.header{
  height: 70px;
  background-color: rgb(240, 240, 240);
  box-shadow:  0px 2px 8px #0001;
  border-bottom: solid 1px #ddd;
  position: relative;
  transition:  width .12s;;
  z-index: 999;
}
header.header.light.whiterize{
 background-color: rgb(240, 240, 240);
}
header.header.light{
  width: 100%;
  background-color: rgba(126, 44, 44, 0);
  box-shadow:  none;
  border: none;
} 
.header-container{
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
}
/*  right*/
.right-nav{
  display: flex;
  margin-right: 0;
  margin-left: auto;
  align-items: center;
}
.botao-do-aluno{
  height: 36px;
  width: 200px;

  word-break: keep-all;
}
.toggle-button {
  height: 42px;
  width:42px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  color:#222;
  display: none;
  border-radius: 6px;
  transition: all .06s;
}
.toggle-button:hover{color: #444;}
.toggle-button:active{color: white;background-color: rgba(0,0,0,.7);}
.notifications-icon{
  height: 48px;
  width: 48px;

  padding: 16px;
  color: #666!important;
}
.dropbox-field{
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
/*  */
.brand{
  height: 64px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}
.brand img{
  height: 50px;
    -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media screen and (max-width: 960px) {
  header.header{
    height: 52px;
  }
  .toggle-button {display: flex;}
  .botao-do-aluno{display: none;}
  .pages-nav{display: none;}
  .brand{height: 56px;}
  .brand img{height: 32px;}
  header.header.light .brand{
    display: none;
  }
  header.header.light{
    position: absolute!important;
  } 
}

</style>