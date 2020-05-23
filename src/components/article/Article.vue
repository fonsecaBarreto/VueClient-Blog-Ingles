<template>

    <div class="article bd-green" v-if="data != null">
       <article-header :data="data"></article-header>
       <div class="article-description"> 
            <div>
            <image-vp class="article-image" :srcset="data.picture" sizes="360px" w="240px" pb="240px"> </image-vp>
           </div>   
            <span class="article-description-text">
              {{data.description}}
            </span>
        </div>
       
        <span v-html="data.content" class="content bd-green">
            
        </span> 
</div> 
</template>

<script>
import ImageVp from "../utils/ImageVp"
import ArticleHeader from "./ArticleHeader"
import {mapGetters} from "vuex"
export default {
  components:{ArticleHeader,ImageVp},
  props:{data:{type:Object,default:null}},
  methods:{
    async vote(vote){
      const err = await this.$store.dispatch("vote",{vote,path:this.data.path})
      if(err) alert("erro de conexão com o servidor")
      else {
        switch(vote){
          case "down": this.data.votes-=1;break;
          case "up":   this.data.votes+=1;break;
        }
      }
    }
    
  }
}
</script>

<style scoped>
  .article-description-text{
    width: fit-content;
    padding: 16px;
    font-size: 1.1em;
  }
  .article-image{
    box-shadow: 0px 3px 8px #0003;
    width: fit-content;
    overflow: hidden;
    border-radius: 4px;
  }
  .article .article-description{
    margin: 48px 32px;
    position: relative;
    background-color: rgba(255,255,255,.4);
    box-shadow:  -5px 2px 6px #0001;
    display: flex;
    justify-self: start;
    flex-direction: row;
  }
 @media only screen and (max-width: 960px) {
   .article .article-description{
     flex-direction: column;
     box-shadow:  none;
     align-items: center;
   }
 }
  .article .article-description::after{
    content: "";
    position: absolute;
    top: 0;left: 0;right:0;
    margin: auto;
    width: 90%;
    height: 100%;
    background-color: #eee;
    transform: rotate(-3deg) ;
    z-index: -1;
    border-radius: 3px;
  }
  /*  */
  .picture-container{
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    margin: 32px auto;
    position: relative;
    overflow: hidden;
  }
  .picture-container>.image-prlx{
    position: absolute;
    top: -200px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .article{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #333 ;
  
  }

  .article .content{
    width: 100%;
    max-width: 800px;
    color: #333;
    padding: 12px ;
    display: block;
    font-size: 1.1em;
 
  }
  .article-description{
    color:#555;
  
  }
  
</style>