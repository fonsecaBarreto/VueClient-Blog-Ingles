<template>
 
    <div v-if="data" class="hot-item bd-green" :class="{flat,large}">
        <app-flat  v-if="flat"  :article="data" :image="imageResult" ></app-flat>
        <app-large v-if="large" :article="data" :image="imageResult"  ></app-large> 
    </div>

</template>

<script>
import {mapGetters} from "vuex"
import Flat from "./Flat"
import Large from "./Large"
export default {
  components:{AppFlat:Flat,AppLarge:Large},
  props:{
    data:{type:Object,default:null},
    flat:{type:Boolean,default:false},
    large:{type:Boolean,default:false}
  },  
  computed:{
    ...mapGetters(["getCategoriesByID","get_screenWidth"]),
     imageResult(){
      return (this.data.picture  && this.data.picture.sm) ? this.data.picture.sm : null
    }
  }


}
</script>

<style>
  .hot-item{
    height: 100%;
    width: 100%;
  }
  .hot-item.large{
     grid-row: span 3;
  }
  @media screen and (max-width: 756px) {
    .hot-item.large{
      position: relative;
      grid-row: span 1;
      grid-column: span 1; 
    }
    .hot-item.flat{
       grid-column: span 2;
    }
  } 


</style>