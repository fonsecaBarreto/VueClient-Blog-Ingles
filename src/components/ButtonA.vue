<template>
  <button class="button-a" :style="{height:h,width:w}" @click="click()"
    :class="{primary,success,danger,round,project,w100}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{
    primary:Boolean,
    success:Boolean,
    danger:Boolean,
    project:Boolean,
    round:Boolean,
    w100:Boolean,
    w:{type:String,default:"fit-content"},
    h:{type:String,default:"fit-content"}
  }
}
</script>

<style scoped>

  .button-a{
    width: fit-content;
    border-radius: 2px;
    padding: 6px 20px;
    border: none;
    color: white;
     white-space: nowrap;
    text-shadow: 0px 0px 8px #0003;
    box-shadow: 0px 0px 6px #0002;
    border-radius: 5px;
  }
  .w100{ width: 100% !important;}
  .round{border-radius: 64px!important;}

  .button-a.primary{background: rgb(30, 121, 207);}
    .button-a.primary:hover{background: rgb(20, 107, 189);}

  .button-a.danger{background: rgb(161, 24, 15);}
    .button-a.danger:hover{background: rgb(131, 18, 10);}
  .button-a.success{background: rgb(29, 160, 79);}
    .button-a.success:hover{background: rgb(19, 121, 58);}
  .project{
    background: rgb(25,61,137);
    background: -moz-linear-gradient(90deg, rgba(25,61,137,1) 0%, rgba(35,51,102,1) 74%, rgba(35,51,102,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(25,61,137,1) 0%, rgba(35,51,102,1) 74%, rgba(35,51,102,1) 100%);
    background: linear-gradient(90deg, rgba(25,61,137,1) 0%, rgba(35,51,102,1) 74%, rgba(35,51,102,1) 100%);
  }

  .button-a.project:active{ background: rgb(23, 54, 121); }
  .button-a.project:active{ background: rgb(24, 59, 134); }
  
</style>