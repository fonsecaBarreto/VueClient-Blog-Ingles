<template>
   <div class="toggle-button " @click='toggleButton()'>
      <font-awesome-icon icon="bars"></font-awesome-icon>
    </div>
</template>

<script>
export default {
  methods:{
    toggleButton(){
      this.$emit("toggleButton")
    }
  }
}
</script>

<style scoped>
  .toggle-button {
    height: 42px;
    width:42px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    color:#222;
    display: none;
    border-radius: 4px;
    transition: all .06s;
  }
  .toggle-button:hover{color: #444;}
  .toggle-button:active{color: white;background-color: rgba(0,0,0,.7);}
  
  
</style>