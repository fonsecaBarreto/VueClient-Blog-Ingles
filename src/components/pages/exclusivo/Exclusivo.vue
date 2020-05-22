<template>
 <div class="landing-page bd-blue">
    <app-content class=""></app-content> 
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Content from "./Content"
export default {
  components:{AppContent:Content},
  computed:{...mapGetters(["getFeed"])},
  data(){
    return {}
  },
  mounted(){
    this.$store.commit("set_lightMode",true)
  }
}
</script>

<style scoped>
 .landing-page{
    flex: 1;
    display: flex;
    min-height: calc(100vh - 48px);
    height: 100%;
    width: 100%;
    background-image: url("../../../assets/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 32px 18px 48px 18px;
    flex-grow: 100;
 
  }
  
</style>