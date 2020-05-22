<template>

<transition name="fade">
  <div class="ovf" v-show="get_Menu">

  <transition name="swipdown">
      <nav class="menu bd-red" v-show="get_Menu">
          <router-link to="/home"      class="menu-item bd-red">Inicio</router-link>
          <router-link to="/exclusivo" class="menu-item">Exclusivo</router-link>
          <router-link to="/curso"     class="menu-item">Curso</router-link>
          <router-link to="/sobre"     class="menu-item">Sobre</router-link>
          
          <span class="menu-item">

            <button-a project round 
                @click.native="logmein()"
                v-if="get_user === null " class="botao-do-aluno">Área do aluno
            </button-a>
          </span>

      </nav>
    </transition> 
  </div>
</transition>
</template>

<script>

import {mapGetters} from "vuex";
import ButtonA from "../ButtonA"
export default {
  components:{ ButtonA},
  computed:{...mapGetters(["get_Menu","get_user"])},
  methods:{
   logmein(){
      this.$emit("logmein")
    },
  }
}
</script>

<style scoped>
  .ovf{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 52px;right: 0;
    background: rgb(0,0,0,.3);  
  }
  .menu{
    position: fixed;
    top: 52px;right: 0;
    height: 100vh;
    width:100vw;
    background: rgb(239, 239, 239);  
    box-shadow: 0px 4px 20px #0009;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 32px;
  } 
  .menu-item{
    width: 100%;
    font-size: 1.6em;
    padding:8px;
    color: #333;
    text-align: right;
    padding-right:42px;
    border-bottom: solid 1px #ddd;
  }
  @media screen and (min-width: 960px) {
    .ovf{
      display: none;
    } 
    
  
  }
</style>