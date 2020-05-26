<template>
  <div class="flat">
    <image-vp w="90px" pb="100%" :srcset="article.picture" sizes="90px" ></image-vp>
    <div class="flat-body ">
      <router-link  :to="'articles/' + article.path" class="title" >{{article.title}}</router-link>
      <div class="footer ">
        <span  class="category" v-if="article.categoryname!= null">
          <font-awesome-icon icon="tag"></font-awesome-icon>
          <span class="ml-1" >{{article.categoryname}}</span>
        </span>
        <span class="date" >{{article.publication_date | dateformat}} </span>
      </div> 
    </div> 
  </div>
</template>

<script>
import ImageVp from "../../../utils/ImageVp"
import {mapGetters} from "vuex"
export default {
  props:{
    article:{type:Object,default:null},
    image:{type:String,default:null},
    category:{type:String,default:null},
    
  },
  components:{ImageVp},
  computed:{
    ...mapGetters(["getCategoriesByID","get_screenWidth"]),

  }
}
</script>
<style scoped>
  .hold{
    background-color: #cdcdcd;
  }
  .flat{
    flex: 1;
    width: 100%;
    height: 98px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding:4px;
    position: relative;
    background-color: rgba(255,255,255,.4);
    box-shadow: 0px 2px 5px #0001;
   
  }
  .flat::before{
    content: "";
    position: absolute;
    left: 6px;
    width: 98%;
    height: 92%;
    
    background-color: #f2f2f2;
    transform: rotate(-2deg) translateY(3px); 
    z-index: -1;
    border-radius: 2px;
    transition: all .5s;
  }
  @media screen and (max-width: 756px) {
    .flat {
      padding: 4px 4px 0 0;
    }
  } 
  .flat-body{
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 8px 10px;
    padding: 4px 0;
  }
  .flat-body >.title{
    font-size: 1em;
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
    font-weight: bold;
    color: #444;
  }
  .flat-body .footer{
    color: #555;
    font-size: .85em;
    width: 100%;
    margin-bottom: 0;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .flat-body .footer .date{
    color: #888;
    font-size: .85em;
  }
</style>