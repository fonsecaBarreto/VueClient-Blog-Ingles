<template>
  <div class="carousel" >
 
      <div class="carousel-viewport" :style="viewportStyle" ref="carouselViewport">
          <div class="carousel-flow" :style="flowStyle">
              <image-vp class="" v-for="(img,i) in  images" :key="i" :src="img.sm"  :w="`${innerWidth}px`" :h="`${innerHeight}px`" ></image-vp>
          </div>
      </div>
      <span class="arrow left-arrow" @click="roll(1)" v-show="images && images.length > 1">
          <font-awesome-icon icon="angle-left"></font-awesome-icon>
      </span>
      <span class="arrow right-arrow" @click="roll(-1)" v-show="images && images.length > 1">
           <font-awesome-icon icon="angle-right"></font-awesome-icon>
      </span>
 
  </div>
</template>

<script>
import ImageVp from "../utils/ImageVp.vue"
export default {
   
    components:{ImageVp},
    props:{images:Array,w:{type:String,default:"100%"},h:{type:String,default:"240px"}},
    data(){
        return{
            innerWidth:0,
            innerHeight:0,
            passo:0
        }
    },
    methods:{
        roll(m){  this.passo = (m == +1) ? (this.passo < 0) ? this.passo+=1: -(this.images.length-1):
                         (m == -1) ? (this.passo > (this.images.length-1) * -1) ? this.passo-=1: 0 :
                          this.passo}
    },
    computed:{

        viewportStyle(){
            return{
                width:`${this.w}`,
                height:`${this.h}`,  
            }
        },
        flowStyle(){
            return{
                left: `${this.passo * this.innerWidth}px`
            }
        }
        
    },
    mounted(){
        this.innerWidth = this.$refs.carouselViewport.clientWidth;
        this.innerHeight = this.$refs.carouselViewport.clientHeight;
    }
  
   
}
</script>

<style scoped>

.arrow{
    height: 100%;
    width: 64px;
    background-color: rgba(255, 255, 255,.4);
    position: absolute;
    top:0;left: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: #777;
}
.arrow:active{
    color: #111;
}
.arrow.right-arrow{
    right: 0;
    left: auto;
}
.carousel{
    position: relative;
}
.carousel .carousel-viewport{
    width: 100%;
    position: relative;
    overflow: hidden;
   
}
.carousel .carousel-flow{
    position: relative;
    display: flex;
    width: fit-content;
    position: absolute;
    transition: left .155s;
    transition-timing-function: cubic-bezier(0,.17,.93,.68)
}
</style>