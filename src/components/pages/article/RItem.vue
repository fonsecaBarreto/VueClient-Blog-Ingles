<template>
  <div class="r-item " :style="style" v-if="post!= null">
     <router-link :to="post.path" @click.native="beforego()">
      <div class="r-inner ">
      
      
        <img :src="post.picture.sm" alt="" class="unselectable">
        
    
       
      
      </div>
     </router-link>
  </div>  
</template>

<script>
export default {
  props:{
    w:{type:Number,default:0},
    post:{type:Object,default:null}},
  data(){
    return{
      
    
    }
  },computed:{
    style(){
      return{
        width:`${Math.ceil(this.w)}px`,
      
      }
    }
  },methods:{
    beforego(){
      console.log("dev")
    }
  }
}
</script>

<style>
  .r-item{
    height: 100%;
    padding: 8px;
    overflow: hidden;
  }
  .r-inner{
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    transition: all .12s;
  }
  .r-inner:hover{
    transform: scale(1.02);
  }
  .r-inner:active{
    background: black;
     transform: scale(.98);
     transition: all 0s;
  }
  .r-inner .caption{
     position: absolute;
    left:0;right: 0;  bottom: 0;
    margin:auto;
    width: 100%;
    height: 64px;
    overflow: hidden;
    background-color: #fff5;
    padding: 6px;
   color:#333;
  }
  
     
  
  .r-inner img{
    position: absolute;
    top: 0;left:0;right: 0;  bottom: 0;
    margin:auto;
    object-fit: cover;
    height: 100%;
  }
</style>