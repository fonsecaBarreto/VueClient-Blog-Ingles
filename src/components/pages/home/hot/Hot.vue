<template>
  <div>
      <h3 class="custom-header"  v-show="get_screenWidth < 960"><font-awesome-icon icon="star" class="icon" ></font-awesome-icon>Check this out!</h3>
      <div class="hot">
      
        <hot-item :data="a" v-for="(a,i) in hotArticles" :key="i"  
        :large="i<1 || get_screenWidth < 756 && i<2" 
        :flat=" (get_screenWidth >756  && i>=1) || (get_screenWidth < 756 && i>1)">
        </hot-item> 
      </div>
  </div> 
 
</template>

<script>
import HotItem from "./HotItem"
import {mapGetters} from "vuex"

export default {
  components:{HotItem},
  computed:{
    ...mapGetters(["getEditor","get_screenWidth"]),
    hotArticles(){
      const articles = this.getEditor;
      if(this.get_screenWidth < 756){
        return articles!= null ?articles.filter((c,i)=>( i < 4)):[null,null,null,null]
      }
      if(this.get_screenWidth < 1024){
        return articles!= null ?(this.getEditor).filter((c,i)=>(  i < 4)):[null,null,null,null]
      } 
      return articles != null ? (this.getEditor).filter((c,i)=>(  i < 7)): [null,null,null,null,null,null,null]
    }
  },
  async created(){ // load resource from db
    if(this.getEditor == null){
     var err = await this.$store.dispatch("loadEditor"); if(err) console.log("error em favoritos")
    }
  }  
}
</script>

<style>
  .hot{
    height: fit-content;
    width: 100%;
    display: grid;
    grid-template-columns: 316px repeat(2, 1fr);
    grid-template-rows: repeat(3, 100px);
    padding: 0 22px;
    column-gap: 6px;
    row-gap: 4px;
  
  }
 @media screen and (max-width: 1024px) {
    .hot {
      grid-template-columns: 316px 1fr;
      padding: 0 8px;
    }
  }
  @media screen and (max-width: 756px) {
    .hot {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto repeat(2, 100px);
       row-gap: 4px;
       column-gap: 8px;
    }
  } 

</style>