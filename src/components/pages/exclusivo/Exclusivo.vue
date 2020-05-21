<template>
 <div class="landing-page bd-red">
    <app-content class="bd-red"></app-content> 
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
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background-image: url("../../../assets/bg.webp"),url("../../../assets/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 32px 18px 48px 18px;
 
  }
  
</style>