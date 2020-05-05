<template>
  <nav class="pagesNav ">
    <router-link to="/home" tag="span" class="page-item">Inicio</router-link>
    <router-link to="/exclusivo" tag="span" class="page-item">exclusivo</router-link>
    <router-link to="/curso" tag="span" class="page-item">Curso</router-link>
    <router-link to="/sobre" tag="span" class="page-item">Sobre</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav.pagesNav{
  width: 100%;
}
nav.pagesNav .page-item{
  padding: 0 16px;
  font-size: 1.2em;
  cursor: pointer;
  color: #666;
}
nav.pagesNav .page-item:hover{
  color: #111;
}
</style>