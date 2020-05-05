<template>
  <header class="header">
    <div class="app-container  header-container ">
      
      <div class="brand " href="">
        <router-link to="/">
          <img class="" src="../../assets/logo.png" alt="">
        </router-link>
      </div>


      <nav class="right-nav ">
          <pages-nav class="pages-nav"></pages-nav>
        <div class="toggle-button ">
          <font-awesome-icon icon="bars"></font-awesome-icon>
        </div>

        <button-a project round 
          @click.native="logmein()"
          v-show="get_user === null" class="botao-do-aluno">Área do aluno
        </button-a>


        <div v-show="get_user !== null" class="dropbox-field">
          <font-awesome-icon icon="bell" class="notifications-icon"></font-awesome-icon>
            <image-vp :round="true" w="40px" h="40px"></image-vp>
            <drop-down>
               <router-link to="/logout">logout</router-link>
               <router-link to="/perfil">Perfil</router-link>
               <router-link to="/perfil">activities</router-link>
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
import PagesNav from "../pages/home/PagesNav"
export default {
  components:{ButtonA,DropDown,ImageVp,PagesNav},
  computed:{...mapGetters(["get_user"])},
  methods:{
    logmein(){
      this.$emit("logmein")
    }
  }
}
</script>

<style scoped>
/* header */
header.header{
  height: 70px;
  background-color: rgb(242, 242, 242);
  box-shadow: inset 0px 2px 12px #0001;
  border-bottom: solid 1px #ddd;
  position: relative;

}
.header-container{
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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
  height: 56px;
  width:56px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  color:#222;
  display: none;
}
@media screen and (max-width: 900px) {
    .toggle-button {
      display: flex;
    }
    .botao-do-aluno{
      display: none;
    }
    .pages-nav{
      display: none;
    }
}
.toggle-button:hover{color: #444;}
.toggle-button:active{color: white;background-color: rgba(0,0,0,.5);}
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
}

</style>