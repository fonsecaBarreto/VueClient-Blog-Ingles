<template>
  <div class="pop">
    <h3 class="custom-header">
      <font-awesome-icon icon="fire" class="icon"></font-awesome-icon>
      Popular</h3>
    <PopItem v-for="(c,i) in popArticles" :key="i" :data="c">
    </PopItem>
  </div>
</template>

<script>
import PopItem from "./PopItem"
import {mapGetters} from "vuex"
export default {
  computed:{...mapGetters(["getArticles"]),
   popArticles(){
      const articles = this.getArticles;
      if(articles == null ) return
      return (this.getArticles).filter((c,i)=>(i < 6))
    }
  
  },
  components:{PopItem}
}
</script>

<style >
  .pop{
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 28px;
  }
  
</style>