<template>
  <header class="header" :class="{light,chavoso,'whiterize':get_Menu}">
    <div class="app-container">
      
    
    <div class="header-container ">

       
        <toggle-button @toggleButton="toggleMenu()"></toggle-button>
   
        <div class="brand" href="">
          <router-link to="/">
            <img class="" src="../../assets/logo.png" alt="">
          </router-link>
        </div>

        <nav class="right-nav ">

          <project-button secondary v-if="chavoso == true && get_screenWidth > 756" >
            <span>Assine</span>
          </project-button> 

          <pages-nav class="pages-nav mx-4" :white="chavoso"></pages-nav>
          
          <project-button  class="" v-if="get_user === null && chavoso == false"  @click="logmein()">
            <span v-if="get_screenWidth > 960">Área do aluno </span>
            <font-awesome-icon icon="user" v-if="get_screenWidth < 960"></font-awesome-icon>
          </project-button> 
      
          <div v-if="get_user !== null && chavoso == false" class="dropbox-field">
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
import ToggleButton from "./ToggleButton"
export default {
  components:{ProjectButton,DropDown,ImageVp,PagesNav,ProfileAvatar,ToggleButton},
  props:{
    light:{type:Boolean,default:false},
    chavoso:{type:Boolean,default:false},
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
    transition:  width .22s;;
    z-index: 999;
  }
  .header-container{
    height: 72px;
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
    height: 48px;
      -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
/* light */
header.header.light.whiterize{background-color: rgb(240, 240, 240);}
header.header.light{
  width: 100%;
  background-color: rgba(126, 44, 44, 0);
  box-shadow:  none;
  border: none;
} 
/* chavoso */
header.header.chavoso{
  width: 100%;
  background-color: var(--primary-color);
  box-shadow:  none;
  border: none;

} 
header.header.chavoso .header-container{
   height: 110px;
} 
@media screen and (max-width: 960px) {
  header.header .header-container{
    height: 52px!important;
  }
 
  .toggle-button {display: flex;}
  .pages-nav{display: none;}
  .brand{
    height: 46px;
    margin: auto;
    position: absolute;
    left: 0;right: 0;
  }
  .brand img{height: 32px;}
  header.header.light .brand{display: none;}
  header.header.light{ position: absolute!important;} 
}

</style>