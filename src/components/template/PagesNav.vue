<template>
  <nav class="pagesNav " >
    <router-link to="/home" tag="span" class="page-item">Inicio</router-link>
    <router-link to="/exclusivo" tag="span" class="page-item">Exclusivo</router-link>
    <router-link to="/curso" tag="span" class="page-item">Curso</router-link>
    <router-link to="/sobre" tag="span" class="page-item">Sobre</router-link>
  </nav>
</template>

<script>
export default {
  props:{white:{type:Boolean,default:false}}
}
</script>

<style>
nav.pagesNav{
  width: 100%;
}
nav.pagesNav .page-item{
  padding: 0 12px;
  font-size: 1em;
  cursor: pointer;
  color: #666;
  transition: color .1s;
    -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
nav.pagesNav .page-item:hover{color: #353535;}
nav.pagesNav.white .page-item{
  padding: 0 12px;
  font-size: 1.05em;
  cursor: pointer;
  color: rgb(222, 222, 222);
  transition: color .1s;
}
nav.pagesNav.white .page-item:hover{color: #ffffff;}

</style>