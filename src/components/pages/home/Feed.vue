<template>
  <div class="feed ">
    <h3 class="custom-header" > <font-awesome-icon icon="stream" class="icon"></font-awesome-icon>Feed</h3>
      <span v-if="getFeed !=null" class="feed-flow">

        <FeedItem  class="" v-for="(c,i) in (getFeed && getFeed.length ? getFeed : null)" :key="i" :data="c">
          
        </FeedItem>
         <button-a project round @click.native="mais()" v-show="getFeedConfig.total > getFeedConfig.amount" class="mt-3">Mais</button-a>
      </span>
      <span v-else class="feed-flow">
        <feed-loading></feed-loading>
        <feed-loading></feed-loading>
        <feed-loading></feed-loading>
        <feed-loading></feed-loading>
        
      </span>
      
  </div>
</template>

<script>
import FeedItem from "./FeedItem" 
import {mapGetters} from "vuex"
import ButtonA from "../../ButtonA"
import FeedLoading from "./FeedLoading"
export default {
  components:{FeedItem,ButtonA,FeedLoading},
  computed:{...mapGetters(["getFeed","getFeedConfig"])},
  async created () {
    this.loadFeed();
  },
  methods: {
    async loadFeed(){
      const err = await this.$store.dispatch("loadFeed")
      if(err) alert("Alguma coisa está errada! :(  \n Recarregue a pagina por favor!")
    },
    mais(){this.loadFeed() }
  
  }
}
</script>

<style>

.feed-flow{
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
  .feed{
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    padding-bottom: 64px;
  }
  @media screen and (max-width: 960px) {
    .feed{
      padding-bottom: 32px;
    }
  }
</style>