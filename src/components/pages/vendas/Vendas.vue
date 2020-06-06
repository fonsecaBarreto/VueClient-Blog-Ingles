<template>
  <div id="vendas" class="bd-green">

     <head-line></head-line>
    
    <About></About>
   
  <about-2></about-2>


    <about-3></about-3> 
   
  </div>
</template>

<script>
import HeadLine from "./HeadLine"
import About from "./About"
import About2 from "./AboutSecond"
import About3 from "./AboutThird"
export default {
  components:{HeadLine,About,About2,About3},
  mounted(){
    this.$store.commit("set_chavosoMode",true)
  }
}
</script>

<style >
  #vendas{
   width: 100%;
   height:100%;
   
  }
  #vendas .dc-pg{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  
  }
  #vendas .dc-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }
  #vendas .dc-title{
    font-family: "gothamUltra" Arial, Helvetica, sans-serif;
    width: 100%;
    display: flex;
    font-size: 2.65em;
    text-align: left;
    margin-bottom: 12px;
    color: #111;
    font-weight: 600;
  }
  #vendas .dc-description{
    font-family: "GothaProLig" Arial, Helvetica, sans-serif;
    display: flex;
    font-size: 1.1em;
    text-align: left;
    color: #222;
  }
  #vendas .dc-subtitle{
    font-family: "GothaProLig" Arial, Helvetica, sans-serif;
    display: flex;
    font-size: 1.3em;
    color: #111;
    font-weight: 600;
    width: 100%;
  }
  #vendas .dc-text{
    font-family: "GothaProLig" Arial, Helvetica, sans-serif;
    display: flex;
    font-size: 1.5em;
    color: #111;
    font-weight: 600;
  }
  #vendas .dc-list{
    font-family: "GothaProLig" Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    font-size: 1.4em;
    color: #111;
    padding: 0;
    margin-top: 24px;
    margin-left: 64px;
    list-style: none;
    font-weight: 600;
    width: 100%;
  }
  #vendas .dc-list li::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: #193D89;
    display: inline-block;
    border-radius: 50%;
    margin-left: -1em;
    margin-right: .4em;
    margin-bottom: 4px;
  }
  #vendas .dc-list li{padding: 5px 0;}
</style>