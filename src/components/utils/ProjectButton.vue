<template>
  <button class="button-project" @click="click()" :class="{secondary}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{secondary:Boolean},
  methods:{
    click(){
      this.$emit("click")
    }
  }
}
</script>

<style scoped>

  .button-project{
    width: fit-content;
    padding: 6px 19px;
    color: white;
    border: none;
    white-space: nowrap;
    text-shadow: 0px 0px 6px #0003;
    box-shadow: 0px 0px 6px #0002;
    border-radius: 64px;
    background: rgb(25,61,137);
    outline: none;
  }

  .button-project:hover{ background: rgb(23, 54, 121); }
  .button-project:active{ background: rgb(34, 74, 161); }

  .button-project.secondary{background-color: rgb(202, 13, 29)};
  .button-project.secondary:active{background-color:rgb(189, 13, 13);}

</style>