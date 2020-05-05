<template>
  <div class="pop">
    <h3 class="custom-header">
      <font-awesome-icon icon="tag" class="icon"></font-awesome-icon>
      Categorias</h3>
    <router-link to="" v-for="(c,i) in categorias" :key="i" :data="c" class="category-name"
    >  {{c.name}}</router-link>
 
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed:{...mapGetters(["getCategories"]),
   categorias(){
      const articles = this.getCategories;
      if(articles == null ) return
      return (this.getCategories).filter((c,i)=>(i < 12))
    }
  
  },
}
</script>

<style >
  
  .category-name{
    padding: 8px 16px;
    font-size: 1.08em;
    text-align: left;
    width: 100%;
    line-height: 1.1em;
    max-height: 2.2em;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    position: relative;
    color: #333;
    
  }
  .category-name:hover{
   
  }

</style>