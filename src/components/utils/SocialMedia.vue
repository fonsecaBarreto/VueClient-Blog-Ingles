<template>
  <a target="_blank" :href="path" class="socialMedia" :class="{twitter,facebook,youtube,instagram}">
    <slot></slot>
  </a >
</template>

<script>
export default {
  props:{facebook:Boolean,twitter:Boolean,youtube:Boolean,instagram:Boolean,path:{type:String,default:"/"}}
}
</script>

<style scoped>
  .socialMedia{
    padding: 4px 16px;
    margin: 4px;
    height: fit-content;
    width: 100%;
  
    color: white;
    cursor: pointer;
    border-radius: 4px
  }
  .socialMedia:hover{
    text-decoration: none;

  }
  .twitter{
    background-color: #00acee;
  }
  .instagram{
    background:linear-gradient(-45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  }
  .instagram:hover{background-color: #88103e;}
  .socialMedia.facebook{background-color: #134ab1 ;
  background: #3b5998;
  
  
  
  
  }
  .socialMedia.facebook:hover{background-color: #0f43a1 ;}
  .youtube{background-color: #c01515;
  background: #e90303;
  
  }
  .youtube:hover{background-color: #ad1212;}
</style>