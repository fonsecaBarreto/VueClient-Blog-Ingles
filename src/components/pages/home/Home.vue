<template>
  <div class="home">
    <div class="app-container">

      <Hot class="my-4"></Hot>  


     
      <div class="home-body " >
        <section class="home-body-main">
          <Feed class=""></Feed>
        </section>
        
        <aside class="">
            <Categorias></Categorias>
            <Pop></Pop>
        </aside> 
      
      </div>
    
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex"

import Hot from "./Hot" 


import Pop from "./Pop"
import Categorias from "./Categorias"
import Feed from './Feed'
export default {
  components:{Hot,Pop,Feed,Categorias},
  computed:{
      ...mapGetters(["getArticles","getCategories"])
  },
async mounted(){
    var err = await this.$store.dispatch("loadArticles"); if(err) alert('erro ao carregar Artigos');
    err = await this.$store.dispatch("loadCategories"); if(err) alert('erro ao carregar Categorias');
  }  
}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
}
.home-body{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-rows: 1fr;
  
}
.home-body-main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.feed{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}
.custom-header{
   position: relative;
    width: 100%;
    text-align: left;
    padding-bottom: 6px;
    font-size: 1.3em;
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom: 12px;
  }
  .custom-header:after{
    position: absolute;
    bottom: -2px; left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #aaa;
  }
  .custom-header .icon{
    margin: 2px 4px 0 0;
    height: 16px;
  }
</style>