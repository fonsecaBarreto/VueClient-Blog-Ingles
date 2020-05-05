<template>
  <div class="daily" :class="{retract}">
    <GayHeader first="your daily" second=" Reading"></GayHeader>
    <Article :data="getArticles[0]"></Article>
    <div class="ov-read-more">
       <button-a project round
        @click.native ="retract=!retract"
       > Ler Mais </button-a>
    </div>
  </div>

</template>

<script>
import Article from "../../Article"
import GayHeader from "./GayHeader"
import ButtonA from "../../ButtonA"
import {mapGetters} from "vuex"
export default {
  components:{GayHeader,Article,  ButtonA},
  computed:{...mapGetters(["getArticles"])},
  data(){
    return{
      retract:true
    }
  }
}
</script>

<style>
  .ov-read-more{
    width: 100%;
    height: 72px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255,255,255);
    background: -moz-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(244,246,251,0.835171568627451) 74%, rgba(255,255,255,0) 100%);
    background: -webkit-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(244,246,251,0.835171568627451) 74%, rgba(255,255,255,0) 100%);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(244,246,251,0.835171568627451) 74%, rgba(255,255,255,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
  }
  .daily{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: unset;
    overflow: hidden;
   
    transition: all .4s;
  }
  .retract{
    height: 560px;
  }

</style>