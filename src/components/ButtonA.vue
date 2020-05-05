<template>
  <button class="button-a"
    :class="{primary,success,danger,round,project}">
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
    round:Boolean
  }
}
</script>

<style scoped>
  .round{
    border-radius: 64px!important;
  }
  .project{
    background: rgb(25,61,137);
    background: -moz-linear-gradient(90deg, rgba(25,61,137,1) 0%, rgba(35,51,102,1) 74%, rgba(35,51,102,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(25,61,137,1) 0%, rgba(35,51,102,1) 74%, rgba(35,51,102,1) 100%);
    background: linear-gradient(90deg, rgba(25,61,137,1) 0%, rgba(35,51,102,1) 74%, rgba(35,51,102,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#193d89",endColorstr="#233366",GradientType=1);
  }
  .button-a{
    border-radius: 2px;
    padding: 5px 18px;
    border: none;
    color: white;
    text-shadow: 0px 0px 8px #0003;
    box-shadow: 0px 0px 6px #0002;
  }
  .button-a.primary{background: rgb(30, 121, 207);}
    .button-a.primary:hover{background: rgb(20, 107, 189);}
  .button-a.danger{background: rgb(161, 24, 15);}
    .button-a.danger{background: rgb(131, 18, 10);}
  .button-a.success{background: rgb(29, 160, 79);}
    .button-a.success{background: rgb(19, 121, 58);}
  
</style>