<template>
 
    <div class="login-box " :class="{loading}">
      <transition name="swipeup">
          <img class="brand" src="../../assets/logo.png" alt="" >
      </transition>
      <transition name="swipeup">
        <div class="form-panel " >
          <div class="form bd-red">
          
              <form-grouping label="E-mail" >
                <input class="a1-input" type="text" v-model="inputs.email" >
              </form-grouping>
              <form-grouping label="Password" >
                <input class="a1-input" type="password" v-model="inputs.password">
              </form-grouping>
             
              <span class="warning" v-if="errors && errors.length">{{errors[0].msg || errors[0]}}</span>
             
            <transition name="slide">
              <form-grouping class="mt-2"  >
                <button-a project  w100
                @click.native="signin()">Entrar</button-a>
              </form-grouping>
            </transition>
         
          </div>
      
        </div>
      </transition>
    </div>

</template>

<script>
import FormGrouping from "../utils/FormGrouping"
import ButtonA from "../ButtonA"

const INITIAL_INPUTS ={
  email:null,
  password:null

}
const INITIAL_STATE={
  inputs:{...INITIAL_INPUTS},
  signup:false,
  errors:[],
  loading:false
}
export default {
  components:{FormGrouping,ButtonA},
  data(){return {...INITIAL_STATE}},
  computed:{
    serverStatus(){
      if(this.errors.length){
        const err = this.errors.find(e=>e.param == undefined);
        return err != undefined ? err.msg : null
      }
      return null
    }
  }
  ,methods:{
    async signin(){
      this.errors= [];
      this.loading=true
      const err = await this.$store.dispatch("obtainToken",{...this.inputs});
      setTimeout(() => {this.loading = false;}, 420);
      
      if(err && err.errors && err.errors.length) return this.errors = err.errors;
      else if(err == undefined){
        this.$emit("closeModal")
        this.inputs = this.inputs = {...INITIAL_INPUTS};
        
        //window.location.href="https://aluno.mathewslins.com/"
      }
    },
  }
}
</script>

<style >

.warning{
  color:rgb(223, 4, 4);
  font-size: .95em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
  .a1-input{
    width: 350px;
  }
  .success-panel{
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .brand{
    height: 129px;
    padding: 22px 0;
  }
  .hiddenbutton{
    color: rgb(24, 24, 145);
    font-weight: normal;
    cursor: pointer;
    padding-top: 12px;
  }
  .hiddenbutton:hover{ text-decoration: underline;}

  .login-box .form-panel .form{ padding: 22px 24px}
  .login-box .form-panel{
    height: 100%;
    background-color: rgb(255, 255, 255);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .login-box{
    padding: 0 3px 32px 3px;
    width: 100%;
    height: fit-content;
    min-height: 200px;
    border-radius: 3px;
    box-shadow:inset  0px 4px 16px #00000008;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .2s;
    background-color: white;
  
  }
    @media screen and (max-width: 960px) {
        .login-box{
            width: 100%;
            height: 100%;
           
            
         
        }
    }
.login-box.loading{position: relative;}
.login-box.loading::after{
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  background-image: url("../../assets/loading.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 128px;

}
 

</style>