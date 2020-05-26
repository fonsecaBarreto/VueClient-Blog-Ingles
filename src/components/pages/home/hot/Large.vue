<template>
  <div class="hot-large bd-blue">
    <div class="hot-large-image bd-red">
        <image-vp class="article-image" :srcset="article.picture" sizes="360px" w="100%" pb="100%" > </image-vp>
   

      <div class="hot-large-body">
        <router-link :to="'articles/' + article.path" class="title " >{{article.title}}</router-link> 
        <div class="footer ">
          <span  class="category" v-if="article.categoryname!= null">
            <font-awesome-icon icon="tag"></font-awesome-icon>
            <span class="ml-1" >{{article.categoryname}}</span>
          </span>
        <span class="date">{{article.publication_date | dateformat}} </span> 
        </div> 
      </div>  
  </div>

  </div>
</template>

<script>
import ImageVp from "../../../utils/ImageVp"
import {mapGetters} from "vuex"
export default {
  components:{ImageVp},
  props:{
    article:{type:Object,default:null},
    image:{type:String,default:null}
  },  
  computed:{...mapGetters(["getCategoriesByID","get_screenWidth"]),},

}
</script>

<style>
 
  .hot-large{
    position: relative;
    width: calc(100% - 6px);
    flex:1;
    height: calc(100% - 6px);
     position: relative;
     background-color: white;
    background-color: rgba(255,255,255,.6);
    box-shadow: 0px 2px 5px #0001;
   
  }
  .hot-large::before{
    content:"";
    width: 98%;
    height: 100%;
        background-color: #f2f2f2;
    position: absolute;
    top:0;left:0;
    transform: rotate(-3deg) translateY(6px); 
    border-radius: 3px;
  
  }
  .hot-large .hot-large-image{
    height: 100%;
    position: absolute;
    top: 0;bottom:0;left: 0;right: 0;margin: auto;
    object-fit: cover;
  } 
 

  .hot-large-body {
    background: rgb(0,0,0);
    background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);  
    width: 100%;
    min-height: 64px;
    max-height: 96px;
    position: absolute;
    bottom: -8px;
    left:0;
    right:0;
    margin: auto;
    display:flex;
    flex-direction: column;
    padding: 8px 6px;
  }
   @media screen and (max-width: 756px) {
    .hot-large{
      position: relative;
      width: 100%;
      padding-bottom: 100%;
    }
    .hot-large-body {
      bottom: 0px;
    }
 
  }
  .hot-large-body >.title{
    font-size: 1em;
    text-align: left;
    width: 100%;
    line-height: 1.2em;
    height: 2.4em;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: bold;
    margin-bottom: 4px;
    color: white;
    text-shadow: 0px 10px 8px #0000;
  }
  .hot-large-body .footer{
    flex:1;
    color: #555;
    font-size: .85em;
    width: 100%;
    height: fit-content;
    margin-bottom: 0;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: rgb(0, 0, 0);
    color: white;
  }
  .hot-large-body .footer .date{
    color: #888;
    font-size: .85em;
    color: rgb(0, 0, 0);
    color: white;
  }
</style>