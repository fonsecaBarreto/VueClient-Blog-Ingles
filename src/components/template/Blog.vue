<template>
   
      <div class="blog-body " >
       
          <section class="blog-body-main ">
            <slot></slot>
          </section>
   
        <aside-menu></aside-menu>
      </div>
    
  
</template>

<script>
import AsideMenu from "./aside/AsideMenu"

export default {
  components:{AsideMenu}
}
</script>

<style scoped>
.blog-body{
  
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 1fr;
  column-gap: 24px;
  padding: 0;
  box-sizing: border-box;
  padding-bottom: 48px;
}
.blog-body-main{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  grid-column: span 1;
 
}
@media screen and (max-width: 1024px) {
  .blog-body{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
 
}



</style>