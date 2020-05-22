<template>
  <div class="home">
    <div class="app-container bd-green">
      <Hot class="my-1 mt-md-5 mb-md-3"></Hot>  
      <Blog class="bd-red">
        <Feed class=""></Feed>
      </Blog>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex"
import Hot from "./hot/Hot" 
import Feed from './Feed'
import Blog from "../../template/Blog"
export default {
  components:{Hot,Feed,Blog},

}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 960px) {
  .home{
    margin-top: 72px;
  }
}
.home-body{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-rows: 1fr;
  
}
.home-body-main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.feed{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}
.custom-header{
   position: relative;
    width: 100%;
    text-align: left;
    padding-bottom: 6px;
    font-size: 1.3em;
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom: 12px;

    margin-left: 0;margin-right: auto;
  }
  .custom-header:after{
    position: absolute;
    bottom: -2px; left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #cdcdcd;
  }
  .custom-header .icon{
    margin: 2px 4px 0 0;
    height: 16px;
  }
</style>