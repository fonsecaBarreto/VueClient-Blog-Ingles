<template>
  <header class="header" :class="{light,'whiterize':get_Menu}">
    <div class="app-container">
      
    
    <div class="header-container bd-red">

        <div class="toggle-button bd-red" @click='toggleMenu()'>
          <font-awesome-icon icon="bars"></font-awesome-icon>
        </div>
   
      
        <div class="brand" href="">
          <router-link to="/">
            <img class="" src="../../assets/logo.png" alt="">
          </router-link>
        </div>

        <nav class="right-nav bd-red">
          <pages-nav class="pages-nav mr-4" :white="light"></pages-nav>
          

          <project-button  class="" v-if="get_user === null "  @click="logmein()">
            <span v-if="get_screenWidth > 960">Área do aluno </span>
            <font-awesome-icon icon="user" v-if="get_screenWidth < 960"></font-awesome-icon>
          </project-button> 


          <div v-if="get_user !== null " class="dropbox-field">
              <profile-avatar :user="get_user"></profile-avatar>
              <drop-down >
                <router-link to="/logout">logout</router-link>
                <a href="https://aluno.mathewslins.com">Area do Aluno</a>
              </drop-down>
          </div> 

        </nav> 
      </div>
    </div>
  
  </header>
</template>

<script>
import ProjectButton from "../utils/ProjectButton"
import {mapGetters} from "vuex"
import DropDown from "../utils/Dropdown"
import ImageVp from "../utils/ImageVp"
import PagesNav from "./PagesNav"
import ProfileAvatar from "../utils/ProfileAvatar"
export default {
  components:{ProjectButton,DropDown,ImageVp,PagesNav,ProfileAvatar},
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
  height: fit-content;
  background-color: rgb(240, 240, 240);
  box-shadow:  0px 2px 8px #0001;
  border-bottom: solid 1px #ddd;
  position: relative;
  transition:  width .12s;;
  z-index: 999;
}
header.header.light.whiterize{background-color: rgb(240, 240, 240);}
header.header.light{
  width: 100%;
  background-color: rgba(126, 44, 44, 0);
  box-shadow:  none;
  border: none;
} 
.header-container{
  height: 70px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
}
/*  right*/
.right-nav{
  width: fit-content;
  display: flex;
  margin-right: 0;
  margin-left: auto;
  align-items: center;
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
  border-radius: 4px;
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
  header.header .header-container{
    height: 52px;
  }
  .toggle-button {display: flex;}
  .pages-nav{display: none;}
  .brand{
    height: 48px;
    margin: auto;
    position: absolute;
    left: 0;right: 0;
  
  }
  .brand img{height: 32px;}
  header.header.light .brand{display: none;}
  header.header.light{ position: absolute!important;} 
}

</style>