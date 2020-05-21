<template>
  <div class="category-item">
    <router-link :to="'/category/'+category.path" v-if="category!=null" class="category-name">  
      {{category.name}}
    </router-link>

    <div class="category-hold" v-if="category==null"></div>

  </div>
</template>

<script>
export default {
  props:{category:{type:Object,default:null}}
}
</script>

<style scoped>
  .category-hold{
    background-color: #eee;
    height: 28px;
    margin: 8px 16px;
    border-radius: 4px;
  }
 .category-item{
   width:100%;
  }
  .category-item .category-name{
     padding: 9px 16px;
    font-size: 1.08em;
    text-align: left;
    color: #333;
    width: 100%;
    line-height: 1.1em;
    max-height: 2.2em;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>