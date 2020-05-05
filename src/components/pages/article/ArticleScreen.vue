<template>

    <div class="article-screen bd-red" v-if="post!=null">
      <h1>article</h1>
      <div class="app-container bd-red">

        <Article :data="post"></Article>
   
    </div> 
  </div>
</template>

<script>
 import Article from "../../Article"
export default {
components:{Article}, 
  data(){
   return {
     post:null,
     path:this.$route.params.path,
   }
 },async mounted(){
   this.post = await this.$store.dispatch("loadPost",this.path);
 } 
}
</script>

<style scoped>
  .article-screen{
    width: 100%;
    height: 100%;
    padding: 44px 0;
  }
</style>