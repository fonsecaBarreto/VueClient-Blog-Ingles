<template>
 
    <div class="login-box">
      <transition name="swipeup">
          <img class="brand" src="../../assets/logo.png" alt="" >
      </transition>
      <transition name="swipeup">
        <div class="form-panel" >
          <div class="form">
          
            <transition name="slide">
              <form-grouping label="Name" v-show="signup" :warning="findError('name')">
                <input type="text" v-model="inputs.name" @focus="spliceError('name')">
              </form-grouping>   
            </transition>
              <form-grouping label="E-mail" :warning="findError('email')">
                <input type="text" v-model="inputs.email" @focus="spliceError('email')">
              </form-grouping>
              <form-grouping label="Password" :warning="findError('password')">
                <input type="password" v-model="inputs.password" @focus="spliceError('password')">
              </form-grouping>
               
              <transition name="slide" >
                <form-grouping label="Confirm password" v-show="signup" :warning="findError('password_repeat')">
                  <input type="password" v-model="inputs.password_repeat" @focus="spliceError('password_repeat')">
                </form-grouping>
              </transition>
              <span class="mt-2"> {{serverStatus}}</span>

            <transition name="slide">
              <form-grouping class="mt-2"  >
                <button-a class="btn my-2" :class="signup?'btn-primary':'btn-success'" 
                @click.native="signup?save():signin()" >{{!signup?"Entrar":"Cadastrar"}}</button-a>
                <!--  -->
            
               
               
                <span class="hiddenbutton" @click="signup=!signup">{{!signup?"Ainda não tenho cadastro":"já tenho adastro"}}</span>
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
  name:"",
  email:"lucasfonsecab@hotmail.com",
  password:"123456",
  password_repeat:"",
  profile:{}
}
const INITIAL_STATE={
  inputs:{...INITIAL_INPUTS},
  signup:false,
  errors:[]
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
    findError(param){
      if(!this.errors.length) return null;
      const equals = this.errors.filter(e=>e.param == param);
      if(equals.length) return equals[0].msg;
    },
    spliceError(param){
      if(!this.errors.length) return null;
      this.errors =  this.errors.filter(e=>e.param != param);  
    },
    async save(){
      const err = await this.$store.dispatch("saveUser",{...this.inputs})
      if(err && err.errors && err.errors.length) return this.errors = err.errors;
        this.$emit("closeModal")
        this.inputs = this.inputs = {...INITIAL_INPUTS}
    },
    async signin(){
      const err = await this.$store.dispatch("obtainToken",{...this.inputs});
      if(err && err.errors && err.errors.length) return this.errors = err.errors;
          this.$emit("closeModal")
          this.inputs = this.inputs = {...INITIAL_INPUTS};
    },
    /* async oauth(){
   
      const err = await this.$store.dispatch("oauth");
      if(err && err.errors && err.errors.length) return this.errors = err.errors;
      else if(err ===undefined){
        this.success = true;
        setTimeout(()=>{
          this.$emit("closeModal")
          this.success = false
          this.inputs = this.inputs = {...INITIAL_INPUTS};
        },100)
      }
    }, */
  }
}
</script>

<style >
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

  .login-box .form-panel .form{ padding: 24px 32px;}
  .login-box .form-panel{
    height: 100%;
    background-color: rgb(255, 255, 255);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login-box{
    padding: 32px 24px;
    width: 100%;
    height: fit-content;
    height: fit-content;
    min-height: 200px;
    border-radius: 3px;
    box-shadow:inset  0px 4px 12px #0001;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .2s;
    background-color: white;
  
  }
 

</style>