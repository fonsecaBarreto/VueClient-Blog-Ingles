<template>
  <div class="">
    <div class="hot" >
        <hot-item-large :data="getArticles[0]" class="">

        </hot-item-large>

        <hot-item  v-for="(a,i) in hotArticles" :key="i" :data="a" class=""></hot-item>
    
    </div>
  </div>
</template>

<script>
import HotItem from "./HotItem"
import HotItemLarge from "./HotItemLarge"
import {mapGetters} from "vuex"

export default {
  components:{HotItem,HotItemLarge},
  computed:{
    ...mapGetters(["getArticles","get_screenWidth"]),
    hotArticles(){
      const articles = this.getArticles;
      if(articles == null ) return
      if(this.get_screenWidth > 1226){
        return (this.getArticles).filter((c,i)=>(i > 0 && i < 7))
      }
       return (this.getArticles).filter((c,i)=>(i > 0 && i < 4))
    }
  }
}
</script>

<style>
.hot{
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 320px repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: fit-content;
  margin-top: 24px;
  overflow: hidden;
 
  
}
@media screen and (max-width: 1226px) {
  .hot {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 756px) {
  .hot {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
}

</style>