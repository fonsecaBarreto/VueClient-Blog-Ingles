<template>
  <div>
    <h3 class="custom-header"><font-awesome-icon icon="fire" class="icon"></font-awesome-icon>Popular</h3>
    <pop-item v-for="(a,i) in articles" :key="i" :data="a"> </pop-item>
  </div>
</template>

<script>
import PopItem from "./PopItem"
import {mapGetters} from "vuex"
export default {
  components:{PopItem},
  computed:{...mapGetters(["getMostViewed"]),
  articles(){
    const articles = this.getMostViewed;
      if(articles == null) return [null,null,null,null,null];
      return (this.getMostViewed).filter((c,i)=>(i < 6))
    } 
  },
  async created(){
    if(this.getMostViewed == null){
      const err = await this.$store.dispatch("loadMostViewed"); if(err) alert('erro ao carregar Categorias');
    }
  },
}
</script>
