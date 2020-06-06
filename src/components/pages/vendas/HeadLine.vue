<template>
  <div id="head-line" class="">
    <div class="app-container">
      <div class="dc-container">

        <span class="head-line-text dc-title ">Seja fluente em inglês e faça parte dos 5%.  Comece agora! </span>
        <project-button class=" m-auto py-3 px-5 ">ASSINE AGORA</project-button>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectButton from "../../utils/ProjectButton"
export default {
  components:{ProjectButton}
}
</script>

<style scoped>

  #head-line{
    width: 100%;
    height: fit-content;
    background-color: #85addd;
    padding: 64px 0;
  }
  @media only screen and (max-width:960px){
    #head-line{
      padding: 22px
    }
  }
  .head-line-text{
    max-width: 700px; 
    margin: auto;
    color: rgb(255, 255, 255);
  }
</style>