<template>
  <div id="market-about-third" class="bd-red">
    <div class="video-container bd-blue">
      <div class="app-container">
        <iframe class="m-auto" id="ytplayer" type="text/html"
        src="http://www.youtube.com/embed/AQooc2hrRPI?autoplay=1&origin=http://example.com"
        frameborder="0"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#ytplayer{
  width: 900px;
  height: 540px;
}
@media only screen and (max-width:1226px){
  #ytplayer{
    width: 720px;
    height: 432px;
  }
}
@media only screen and (max-width:960px){
  #ytplayer{
    width: 640px;
    height: 384px;
  }
}
@media only screen and (max-width:756px){
  #ytplayer{
    width: 480px;
    height: 288px;
  }
}
@media only screen and (max-width:480px){
  #ytplayer{
    width: 280px;
    height:168px;
  }
}
 #market-about-third{
    padding: 120px 0;
    margin:0;
 }
 #market-about-third .video-container{
   background-color: rgb(233, 99, 139);
   padding: 64px 12px;
   display:flex
}

</style>