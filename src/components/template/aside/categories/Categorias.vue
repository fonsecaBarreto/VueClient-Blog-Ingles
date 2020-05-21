<template>
  <div>
    <h3 class="custom-header"> <font-awesome-icon icon="tag" class="icon"></font-awesome-icon>Categorias</h3>
    <c-item v-for="(c,i) in categorias"  :key="i" :category="c"></c-item>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import CItem from "./CItem"
export default {
  components:{CItem},
  computed:{...mapGetters(["getCategories"]),
    categorias(){
      const categories = this.getCategories;
      if(categories == null ) return [null,null,null,null]
      return (this.getCategories).filter((c,i)=>(i < 12))
    }
  },
  async created(){
    if(this.getCategories == null){
      const err = await this.$store.dispatch("loadCategories"); if(err) console.log("error on category")
    }
  },
}
</script>
