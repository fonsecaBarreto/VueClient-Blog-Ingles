<template>
  <nav class="pagesNav unselectable" :class="{white}">
    <router-link to="/home"  tag="span" class="page-item ">Inicio</router-link>
    <router-link to="/curso" tag="span" class="page-item">Curso</router-link>
    <router-link to="/sobre" tag="span" class="page-item">Sobre</router-link>
    
  </nav>
</template>
<script>
export default {
  props:{white:Boolean},
  computed:{
   
  }
}
</script>
<style>
  nav.pagesNav{

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;}
    
  nav.pagesNav .page-item{
    font-family: "GothaProLig";
    padding: 0 12px;
    font-size: 1em;
    cursor: pointer;
    transition: color .08s;
    display: flex;
    position: relative;
    align-items: center;
    color: #555;
    font-weight: 600;
  }
  nav.pagesNav .page-item :hover{color: #444;} 
  nav.pagesNav.white .page-item{color: rgb(230, 230, 230)}
  nav.pagesNav.white .page-item:hover{color: rgb(255, 255, 255);} 

  @media only screen and (max-width:960px){
    nav.pagesNav{
      flex-direction: column;
    }
    nav.pagesNav .page-item{
      padding: 0 22px;
      height: 52px;
      width: 100%;
      border-bottom: solid 1px #ddd;
      font-size: 1.4em;
    }
    nav.pagesNav .page-item:active{
      background-color: rgba(0,0,0,.1);
      
    }
  }
</style>