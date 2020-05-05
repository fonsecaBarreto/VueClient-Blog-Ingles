<template>
    <div class="header-header">
      <h2>{{first}}<span style="color:white;">{{second}}</span></h2>
    </div>
     
   
</template>

<script>
export default {
  props:{first:String,second:String}
}
</script>

<style scoped>
  .header-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;;
    align-items: center;
    color: #666;
    color: var(--primary-color);
  }
  .header-header h2{
    text-transform: uppercase;
    position: relative;
  }
  .header-header h2:after{
    content: "";
    position: absolute;
    bottom: 6px;
    left: -16px;
    width: 224px;
    height: 4px;
    background-color: var(--third-color);;
     z-index: -1;
  }
  .header-header h2:before{
    content: "";
    position: absolute;
    bottom: 10px;
    right: 0px;
    width: 160px;
    height: 32px;
    background-color: var(--second-color);
    z-index: -1;
  }

</style>