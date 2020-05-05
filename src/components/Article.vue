<template>
  <div class="article bd-green" v-if="data != null">
    <div class="article-header bd-red">
      <span class="article-title">{{data.title}} asda sdasdas dsa dsad asda sd asdas adasd asdasdsada asdas asd</span>
      <auhtor-view></auhtor-view>
      <div class="social-media"></div>
    </div>
        <image-vp class="" :src="data.picture.md" w="100%" pb="30%" w100> </image-vp>
      
      <h5>{{data.description}}</h5>
          
      <div v-html="data.content">
          {{data.content}}
       </div> 
   
  </div>
</template>

<script>
import ImageVp from "./utils/ImageVp"
import AuthorView from "./AuthorView"
export default {
  components:{ImageVp},
  props:{data:{type:Object,default:null}}
}
</script>

<style scoped>
  .article{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    color: #333 ;
  }
  .article .article-header{
    display: flex;
    flex-direction: column;
  }
  .article-header .article-title{
      text-align: left;
      width: 100%;
      font-size: 2em;
      line-height: 1em;
      max-height: 4em;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      position: relative;
  }
</style>