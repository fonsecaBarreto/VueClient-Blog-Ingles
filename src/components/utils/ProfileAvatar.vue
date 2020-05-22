<template>
<div>

   <img  class="profile-avatar" :src="oUsuario.picture" alt="">
  
</div>
</template>
<script>
const USER ={
  picture:require('./nouser.png')
}
export default {
  props:{user:Object},
  computed:{
      oUsuario(){
        var usuario = {...USER}
        if(this.user != null){
          usuario.picture = this.user.picture ? this.user.picture.sm : USER.picture
        }
        return usuario
      }
  }
}
</script>

<style scoped>
.profile-avatar{
    height: 42px;
    width: 42px;
    background-color: white;
    margin:auto auto auto 0;
    border-radius: 50%;
    box-shadow: inset 0px 0px 4px #0004;
    border: solid 2px rgb(255, 255, 255);
  }
</style>