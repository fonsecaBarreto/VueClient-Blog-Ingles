<template>
  <div class="category bd-red" >
    <div class="app-container ">
      <Blog class="">
        <span class="article-breads "> Categorias &rtri; {{categoryPath}} </span>
        <transition name="fade">
          <div class="posts-flow bd-red">
        
              <c-post-item v-for="(c,i) in posts" :key="i" :post="c"></c-post-item> 
        
          </div>
        </transition>
     
      </Blog>
    </div>
  </div>
</template>

<script>
import Blog from "../../template/Blog"
import {mapGetters} from "vuex"
import CPostItem from "./CPostItem"
export default { 
  components:{Blog,CPostItem},
  data(){
    return{
      posts:null
    }
  },
  async mounted(){
    this.posts = await this.$store.dispatch("loadPostsFromCategory",this.categoryPath);
 },
 computed:{
   categoryPath(){return this.$route.params.path},
 },
 watch:{
   async categoryPath(newval){
 
     this.loading=true;
      this.posts = await this.$store.dispatch("loadPostsFromCategory",this.categoryPath);
     this.loading=false; 
   }
 }
}
</script>

<style scoped>
 .article-breads{
    color: #555;
    font-size: .8em;
    line-height: 1.2em;
    margin-bottom: 16px;
    text-align: left;
    width: 100%;
    overflow: hidden;
    max-height: 1.3em;
    white-space: normal;
   overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    position: relative;
  }
  .posts-flow{
    height: fit-content;
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4,1fr);
    column-gap: 10px;
    row-gap: 10px;
    padding:10px;
  }
  .category{
    width: 100%;
    height: 100%;
    margin-top: 24px;
  }
@media screen and (max-width: 960px) {
  .category{
    margin-top: 70px;
  }
  .posts-flow{

    grid-template-columns: repeat(2,1fr);
   
  }
}
</style>