<template>
<div :class="{w100}">
  <div class="image-vp " :style="estilo" :class="{'round':round}">
    <img :src="src" :srcset="srcsetString" alt=""  :sizes="sizes">
  </div>
</div>
</template>

<script>
export default {
    props:{
        widths:{type:Array,default:()=>([240,360,480])},
        sizes:{type:String,default:"360px"},
        round:Boolean,
        src:{type:String,default: require("./empty.svg")},
        srcset:{type: Object, default: null},
        w100:{type:Boolean,default:false},
        h:{type:String,default:"64px"},
        w:{type:String,default:"64px"},
        pb:{type:String,default:"0"}
        
    },computed:{
        estilo(){
            return{
                width:`${this.w}`,
                height:`${this.h}`,  
                paddingBottom:`${this.pb}`,  
            }
        },
        srcsetString(){
            var srcsetstring = null;
            if(this.srcset != null){
                srcsetstring =`
                    ${this.srcset.sm} ${this.widths[0]}w,
                    ${this.srcset.md} ${this.widths[1]}w,
                    ${this.srcset.lg} ${this.widths[2]}w,` 
                }
            return srcsetstring;
        }
    }
}
</script>

<style scoped>
.w100{
    width: 100%!important;
}
 .image-vp{
    overflow: hidden;
    position: relative;
}
.image-vp.round{
    border-radius: 50% !important;
}
.image-vp img{
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}


</style>