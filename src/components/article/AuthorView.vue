<template>
  <div class="authorView mt-3" v-if="author!= null">
    <div class="author-picture">
        <image-vp :src="author.picture != null  ? author.picture.sm : null" round w="48px" h="48px"></image-vp>

    </div>
    <div class="body">
      <span class="author-name">{{author.name}}</span>
      <span class="status">{{date | dateformat }} </span>
    </div>
  </div>
</template>

<script>
import ImageVp from "../utils/ImageVp"
export default {
  components:{ImageVp},
  props:{
    author:{type:Object,default:null},
    date:{type:String,default:null}
    
  }
}
</script>

<style scoped>
  .author-name{
    color: #555;
  }
  .author-picture{
    width:56px;
    height:56px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    box-shadow: 0px 1px 3px #0006;
   
    border-radius: 50%;
  }
  .authorView{
    height: fit-content;
    display: flex;
    justify-items: flex-start;
    align-items: center;
   
  }
  .authorView .body{
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: flex-start;
    margin-left: 6px;
  }
</style>