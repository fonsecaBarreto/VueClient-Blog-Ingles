<template>
  <div class="left">
    <div class="left-content">
      <h4 class="unselectable" id="enunciado">Seja um dos primeiros a receber conteúdos<span class="hightlight"> exclusivos</span> e cursos
         sobre como aprender <span class="hightlight1">inglês</span> ou aprimorar a fluência</h4>

      <FormGrouping solid >
        <input v-model="email" type="text" placeholder="Insira aqui o seu E-mail">
      </FormGrouping>

      <div class="w-100 d-flex">
        <button-a project class="cad-button" @click.native="cadastrar()" h="43px">CADASTRAR-SE</button-a>  
      </div>
    </div>

  </div>
</template>

<script>
import FormGrouping from "../../utils/FormGrouping"
import ButtonA from "../../ButtonA"
import axios from "axios"
import {API_URL} from "../../../global.js"

export default {
  components:{FormGrouping,ButtonA},
  data(){
    return{
      email:null
    }
  },
  methods:{
    async success() {
      await this.$swal("Well Done!", "E-mail Cadastrado com sucesso!", "success")
      window.location.href="https://www.mathewslins.com/home"
    },
    async cadastrar(){
        const err = await this.$store.dispatch('saveEmail',this.email)
        if(err) {
          if(!err.data) return await this.$swal("Hold your horses!", "error de conexão com o servidor", "error") 
      
          return await this.$swal("Hold your horses!", err.data.errors[0].msg, "error")
          
        }
        this.success();
    }
  }
}
</script>

<style>
  .left{
    flex:1;
    min-height: 300px;
    max-height: unset;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    position: relative;
    padding: 36px;
  
    }
  .hightlight{
    font-weight: 600;
    font-family: "gothamUltra";
    color:white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #193D89;
    font-size: 1em;
    letter-spacing: 2px;

  }
  .hightlight1{
    font-weight: 600;
    font-family: "gothamUltra";
 
    color: #E41311;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #193D89;
    font-size: 1em;
    letter-spacing: 2px;
  }
  .left .left-content{
    max-width: 700px;
    width: 100%;
  }
  .left #enunciado{
      color: #193D89;
      margin-bottom: 22px;
      font-size: 1.8em;
      text-transform: uppercase;
      text-shadow: 0px 1px 1px #0003;
  }
  .cad-button{
    margin-right: 0;
    margin-left: auto;
  }
  @media only screen and (max-width: 756px) {
    .cad-button{
      width: 100% !important;
    }
    .left{
        padding: 0;
    }
    .left #enunciado{
      margin-bottom: 27px;
      font-size: 1.65em;
      text-align: center;
      word-wrap: break-word;
    
    }
   /*  .hightlight{
      font-weight: 700;
      font-family: "gothamUltra";
      color: var(--primary-color);
      font-size: 1.1em;
      }
    .hightlight1{
      font-weight: 700;
      font-family: "gothamUltra";
      color: var(--second-color);
      font-size: 1.1em;
    } */
  }

</style>