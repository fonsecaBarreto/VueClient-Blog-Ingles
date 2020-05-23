<template>
  <div id="top" ref="top" class="article-screen" >
    <div class="app-container">
      <Blog>
        <transition  name="fade" mode="out-in" >
          <Article :data="post" v-if="content==true"></Article>
        </transition>

       <!--  A -->
        <recommended-flow  id="recommended" :path="path"></recommended-flow>
  
    
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
     content:true
   }
  }, 
  computed:{
   path(){return this.$route.params.path},
  },

  mounted(){
   this.$store.dispatch("loadPost",this.path)
   .then(posts=>this.post = posts)
  
 },
 watch:{
   async path(newval){
     console.log(newval)
     this.content=false;
     this.post = await this.$store.dispatch("loadPost",newval);
     this.content=true;
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