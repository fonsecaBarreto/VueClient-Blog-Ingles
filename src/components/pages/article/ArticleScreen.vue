<template>
  <div id="top" ref="top" class="article-screen" v-if="loading!=true">
    <div class="app-container">
      <Blog>
        <transition  name="fade" mode="out-in" >
          <Article :data="post" v-if="loading!=true"></Article>
        </transition>

       <!--  A -->
        <recommended-flow v-if="!loading" id="recommended" :path="path"></recommended-flow>
        <div class="mt-3">
         <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5" data-width=""></div>
        </div>
    
      </Blog>
    </div> 
  </div>
</template>

<script>
 import Article from "../../article/Article"
import Blog from "../../template/Blog"
import RecommendedFlow from "./RecommendedFlow"
export default {
components:{Article,Blog,RecommendedFlow}, 
  data(){
   return {
     post:null,
     loading:true ,
 
   }
  }, 
  computed:{
   path(){return this.$route.params.path},
  },

 async mounted(){
   this.post = await this.$store.dispatch("loadPost",this.path);
   this.$store.commit("set_loading",false)
   this.loading=false;

   
 },
 watch:{
   async path(newval){
     this.loading=true;
     this.post = await this.$store.dispatch("loadPost",newval);
     this.loading=false;
   }
 }
}
</script>

<style scoped>
  .next-button{
    margin:auto;
    display: block;
    width: fit-content;
    line-height: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding:12px 6px 0 6px;
  }
  .next-button:active{
    background-color: #333;
    color: #fff;
    border-radius: 4px;
  }
  .next-button>span{
    font-size: 2em;
  }
  .next-button>.icon{
    font-size: 2em;
    height: 22px;
    widows: 22px;
  }
  .article-screen{
    width: 100%;
    height: 100%;
    margin-top: 24px;
  }
   @media only screen and (max-width: 960px) {
    .article-screen{
  
      margin-top: 70px;
    }
  }
</style>