<template>
  <div class="right bd-red">
    <div class="right-content bd-blue">
      <div class="right-vp ">
     
     <img :src="mathews" alt="MathewsLins descontraido" onerror="this.onerror=null;this.src='imagefound.gif';"> 
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mathews:require("../../../assets/mathews.png")}
  }
}
</script>

<style>
.right{
  min-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  position: relative;
}
.right .right-content{
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translateY(-42px)
}
.right .right-content:before{
    content: "";
    position: absolute;
    bottom: 0;left: 0; right: 0;
    margin: auto;
    width: 360px;
    height: 288px;
    background-color: rgba(255,255,255,.55);
    border-radius: 8px;
    transform: rotate(12deg);
    box-shadow: 2px 6px 8px #00000016;

}
.right .right-content:after{
    content: "";
    position: absolute;
    bottom: 0;left: 0; right: 0;
    margin: auto;
    width: 360px;
    height: 288px;
     background-image: url("../../../assets/bg4.jpg");
    border-radius: 8px;
    box-shadow: 1px 3px 8px #0003;
    border: solid 6px white;
  
}
.right-vp{
  overflow: hidden;
  width: 360px;
  height: 360px;
  border-radius: 8px;
  position: relative;
  z-index: 1;

}
.right-vp img{
  height: 100%;
  position: absolute;
  bottom: 6px;
  right:6px
  
}
 @media only screen and (max-width: 1024px) {
    .right{ min-width: unset}
    .right .right-content{
      transform: translateY(0);
      padding-top: 16px;
    }

  }
 @media only screen and (max-width: 480px) {
 
    .right-vp{
      width: 300px;
      height: 300px;
    }
    .right .right-content:before{
      width: 300px;
      height: 240px;
    }
    .right .right-content:after{
        width: 300px;
        height: 240px;
    }
  }
 @media only screen and (max-width: 375px) {
 
    .right-vp{
      width: 250px;
      height: 250px;
    }
    .right .right-content:before{
      width: 250px;
      height: 200px;
    }
    .right .right-content:after{
        width: 250px;
        height: 200px;
    }
  }
</style>