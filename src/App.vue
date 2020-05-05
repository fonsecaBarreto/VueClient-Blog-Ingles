<template>
  <div id="app" class="">
    <main-template>
      <transition  name="fade" mode="out-in" >
        <router-view>
        </router-view>
      </transition> 
    </main-template>
  </div>
</template>

<script>
import MainTemplate from "./components/template/Main"
export default {
  name: 'App',
  components: {MainTemplate},
  created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
  methods: {
      handleResize() {
        this.$store.commit("set_screenWidth",window.innerWidth)
      }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    width: 100vw;
  }
  .app-container{
    max-width: 1220px;
    margin: auto;
    padding: 0 24px;
  }
  @font-face {
    font-family: "GothamMedium";
    src: url("./assets/GothamMedium.ttf");
  }
  *{
    font-family: 'GothamMedium', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
