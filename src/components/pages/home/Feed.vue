<template>
  <div class="feed">
    <h3 class="custom-headr" > <font-awesome-icon icon="tag" class="icon"></font-awesome-icon>Feed</h3>
    <FeedItem v-for="(c,i) in FeedArticles" :key="i" :data="c">
    </FeedItem>

  </div>
</template>

<script>
import FeedItem from "./FeedItem"
import {mapGetters} from "vuex"
export default {
  computed:{...mapGetters(["getArticles"]),
  FeedArticles(){
      const articles = this.getArticles;
      if(articles == null ) return
      return (this.getArticles).filter((c,i)=>(i < 6))
    }
  
  },
  components:{FeedItem}
}
</script>

<style>
  .feed{
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;

  }
</style>