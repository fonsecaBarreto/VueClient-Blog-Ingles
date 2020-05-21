<template>
  <div v-if="posts && posts.length">

    <h3 class="custom-header" > <font-awesome-icon icon="angle-double-right" class="icon"></font-awesome-icon>Veja Também</h3>
    <div class="px-4">
      <div  class="recommended" ref="recommended">

        <span class="seta left-ar" v-show="total > 4 && passo > -2"  @click="passo--">
          <font-awesome-icon icon="chevron-left"></font-awesome-icon>
        </span>
        <span class="seta right-ar"  v-show="total > 4 && passo <0" @click="passo++">
          <font-awesome-icon icon="chevron-right"></font-awesome-icon>
        </span> 

        <div class="vp ">
          <div class="r-flow " :style="style">
            <r-item :w="width/4" v-for="(p,i) in posts" :key="i" :post="p"></r-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import RItem from "./RItem"
export default {
  props:{path:{type:String,default:null}},
  components:{RItem},
  computed:{
    ...mapGetters(["get_screenWidth"]),
    screenWidth(){
      return this.get_screenWidth;
    },
    style(){
      return{
        left:`${(Math.ceil(this.width/4)*this.passo)}px`
      }
    }
  },
  data(){
    return {
      posts:null,
      total:null,
      width:0,
      passo:0,
    }
  },

  async mounted(){
    this.posts = await this.$store.dispatch("loadRecommended",this.path);
    this.total = this.posts != null ? this.posts.length : 0;
    this.$nextTick(()=>{
      this.width = this.$refs.recommended.clientWidth;
    })
  },
  watch:{
    screenWidth () {
      this.width = this.$refs.recommended.clientWidth;
    }
  }
 

}
</script>

<style scoped>

  .recommended{
    position: flex;
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 25%;
  }
  .recommended .seta{
    position: absolute;
    top: 0;left: 0px;bottom: 0;
    margin: auto;
    width: 32px;height: 32px;
    border-radius: 50%;
    font-size: 1.1em;
    background-color: rgb(138, 135, 135,.2);
    display:flex;justify-content: center;align-items: center;
    color: rgb(0, 0, 0);
    z-index: 1;
    cursor: pointer;
    transition: .1s;
  }
  .recommended .seta:hover{
    color:#333;
    background:white;

  }
  .recommended .seta:active{
    transform: scale(.94);

  }
  .recommended .seta.left-ar{
    left:-12px;
    right: unset;
    box-shadow: 2px 2px 4px #0005;
  }
  .recommended .seta.right-ar{
    right:-12px;
    left: unset;
    box-shadow: -2px 2px 4px #0005;
  }
  .recommended .vp{
    height: 100%;
    padding-bottom: 25%;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
  }
  .r-flow{
    position: absolute;
    left: 0;top: 0;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width:fit-content;
    transition: .2s;
  }
</style>