<template>
  <div class="landing-content bd-green">
   
        <router-link to="/">
           <img src="../../../assets/logo.png" alt="" class="landing-logo">
        </router-link>
       <div class="app-container inside bd-red px-0">
          <app-left ></app-left>
           <app-right ></app-right> 
        </div>  
      
    </div>
</template>

<script>
import Left from "./Left";
import Right from "./Right";
export default {
  components:{AppLeft:Left,AppRight:Right}
}
</script>

<style scoped>
  .landing-content{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 0;

  }
  .landing-content .landing-logo{
      height: 102px;
    display: none;
  }
  .inside{
   
    height: fit-content;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 32px 12px;
    
  }
  @media only screen and (max-width: 1024px) {
    .inside{
      flex-direction: column;
      margin-top: 32px;
    }
    .landing-content{
      padding-bottom: 48px;
    }
  }
  @media only screen and (max-width: 960px) {
     .landing-content .landing-logo{
      height: 86px;
      display: flex;
      margin-top: 16px;
    }
    .inside{
      flex-direction: column;
      margin-top: 18px;
    }
    .landing-content{
      padding-bottom: 22px;
    }
  }
 
</style>