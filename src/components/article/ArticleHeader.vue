<template>
  <div class="article-header" v-if="data != null">
      <span class="article-breads ">{{data.categoryname}} &rtri; {{data.path}}</span>

          <span class="article-category"> <font-awesome-icon icon="tag" class="icon"></font-awesome-icon> {{data.categoryname}}</span>
            <span class="article-title ">{{data.title}}</span>
          <author-view :author="data.author" :date="data.publication_date"></author-view>
        
   
    <!--   <h4> views {{data.views}}</h4>
      <h4> vote {{data.votes}}</h4> -->
     
    </div>
</template>

<script>
import AuthorView from "./AuthorView"
export default {
  components:{AuthorView},
  props:{data:{type:Object,default:null}}
}
</script>

<style scoped>

  .article-header{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
  }
  .article-title{
      text-align: left;
      width: 100%;
      font-size: 1.8em;
      line-height: 1.3em;
      max-height: 4em;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      position: relative;
      border-bottom: solid 1px #efefef;
  }
  .article-breads{
    color: #555;
    font-size: .8em;
    line-height: 1em;
    margin-bottom: 16px;
    text-align: left;
    width: 100%;
    overflow: hidden;
    max-height: 1em;
    white-space: normal;
   overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    position: relative;
  }
  .article-category{
    font-size: .9em;
  }
  .article-category .icon{
    padding: 1px;
  }
</style>