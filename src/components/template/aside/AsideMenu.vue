<template>

    <aside class="aside-menu bd-red">
        <Siga class="side-section "></Siga>
        <Categorias class="side-section categories"></Categorias>
        <Pop class="side-section popular"></Pop>
    </aside> 
</template>

<script>
import Pop from "./popular/Pop"
import Categorias from "./categories/Categorias"
import Siga from "../aside/Siga"
export default {
  components:{Pop,Categorias,Siga},
}
</script>

<style>

  .aside-menu{
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    height: fit-content;
  }
  .side-section{
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 1024px) {
    .aside-menu{
       grid-template-columns: 1fr 1fr;
       column-gap: 20px;
    }
    .popular{grid-column: span 2;}
  }
  @media screen and (max-width: 756px) {
    .aside-menu{
       grid-template-columns: 1fr;
       column-gap: 20px;
    }
    .popular{
      grid-column: span 1;
    }
  }
</style>