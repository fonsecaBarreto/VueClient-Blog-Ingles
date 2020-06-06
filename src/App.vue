<template>
  <div id="app" class="">
    <router-view name="templatelayout" >
     <!--  <vue-page-transition name="fade-in"> -->
        <router-view name="content" >
        </router-view>
  <!--     </vue-page-transition> -->
    </router-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'App',
  computed:{...mapGetters(["get_loading"])},
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {window.removeEventListener('resize', this.handleResize);},
  methods: {
    handleResize() {
      this.$store.commit("set_screenWidth",window.innerWidth)
    }
  }
}
</script>

<style>

  #app {
    position: relative;
    font-family: "GothamMedium", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #444;
    height: 100vh;
    width: 100vw;
    overflow: auto;
  }
  .app-container{
    max-width: 1224px;
    margin: auto;
    padding: 0 24px;
  }
  @media screen and (max-width: 960px) {
    .app-container{
      max-width: unset;
      padding: 0 8px;
    }
  }
  .status{
    font-size: .8em;
    color: #858585;
  }

</style>
