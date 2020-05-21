<template>
  <div>
    <div class="category-post bd-blue">
      <router-link :to="'/articles/'+post.path">
        <div class="image-vp">
            <img class="image" :src="post.picture.sm" alt=""> 
        </div>
        
       <!--  <span class="title">{{post.title}}=</span> -->
         <div class="footer ">

       
            <span class="status">{{post.publication_date | dateformat}} </span>
            <div class="status mx-3"> <font-awesome-icon icon="eye"></font-awesome-icon> {{post.views}} </div>
            <div class="status "><font-awesome-icon icon="heart"></font-awesome-icon> {{post.votes}} </div>
         
        </div>
      </router-link>
    </div>
  </div>
 
</template>

<script>
export default {
  props:{post:{type:Object,default:null}}
}
</script>

<style scoped>
  .category-post .footer{
    color: #555;
    font-size: .85em;
    width: 100%;
    height: fit-content;
    margin-bottom: 0;
    margin-top: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .category-post{
    width: 100%;
    height: fit-content; 
    overflow:hidden;
    position: relative;
    transition: .12s;
    padding: 4px;

  }
  .category-post:hover{
    transform: scale(1.01);
    text-decoration: none;
  }

  .category-post::before{
    content: "";
    position: absolute;
    left: 6px;
    width: 98%;
    height: 92%;
    background-color: #eee;
    transform: rotate(-2deg) translateY(3px); 
    z-index: -1;
    border-radius: 2px;
  }
  .image-vp{
     width: 100%;
      padding-bottom: 100%;
      position: relative;
  }
  .category-post .image-vp>.image{
    position: absolute;
    top:0;bottom:0;
    left:0;right:0;
    object-fit: cover;
    margin: auto;
    height: 100%;
  }
  .category-post .title{
    margin-top: 2px;
    font-family: "GothamMedium";
    font-weight: 500;
    font-size: .8em;
    text-align: left;
    width: 100%;
    line-height: 1em;
    height: 3em;
    text-transform: uppercase;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #444;
  }
</style>