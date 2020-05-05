<template>
  <div class="hot-large ">
     <image-vp class="" w100 w="100%" pb="100%" :src="data.picture.md"></image-vp>
      <div class="hot-large-body ">
  
        <router-link :to="'articles/' + data.path" class="title " >{{data.title}}</router-link>
        
    <div class="footer ">
         <span  class="category">
            <font-awesome-icon icon="bookmark"></font-awesome-icon>
            <span class="ml-1" v-if="data!= null && data.category != null">{{ getCategoryName(data.category) }}</span>
          </span>
          <span class="date">{{data.created_at}} </span>
        </div> 
       
      </div>
  </div>
</template>

<script>

import ImageVp from "../../utils/ImageVp"
import {mapGetters} from "vuex"
export default {
  components:{ImageVp},
  props:{data:{type:Object,default:null}},  
  computed:{...mapGetters(["getCategoriesByID","get_screenWidth"]),},
  methods:{
      getCategoryName(id){
      const cat = this.getCategoriesByID(id);
      return  cat != null ? cat.name : null
    }
  }
}
</script>

<style>
  .hot-large{
    position: relative;
    grid-row: span 3;
    margin: 4px;
  }
  .hot-large-body {
background: rgb(0,0,0);
background: -moz-linear-gradient(0deg, rgba(0,0,0,0.8267682072829132) 0%, rgba(0,0,0,0.7903536414565826) 26%, rgba(0,0,0,0) 100%);
background: -webkit-linear-gradient(0deg, rgba(0,0,0,0.8267682072829132) 0%, rgba(0,0,0,0.7903536414565826) 26%, rgba(0,0,0,0) 100%);
background: linear-gradient(0deg, rgba(0,0,0,0.8267682072829132) 0%, rgba(0,0,0,0.7903536414565826) 26%, rgba(0,0,0,0) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left:0;
    display:flex;
    flex-direction: column;
    padding: 6px;
    
  }
  .hot-large-body >.title{
    font-size: 1em;
    text-align: left;
    width: 100%;
    line-height: 1.1em;
    height: 2.2em;
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