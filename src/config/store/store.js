import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
import {API_URL,STORAGE_KEY} from "../../global.js"
import {articles} from "./articles"
import {layout} from "./layout"
import {Aluno} from "./aluno"
Vue.use(Vuex)
const INITIAL_STATE={
  screenWidth:null,
}
export default new Vuex.Store({
  modules:{articles,layout,Aluno},
  state:{...INITIAL_STATE},
  getters:{
    get_screenWidth:state=>state.screenWidth,
  },mutations:{
    set_screenWidth: (state,v)=> state.screenWidth=v,
  },actions:{
    async saveEmail(c,email){
      try{
        const {data} = await axios.post(`${API_URL}/emailsignature`,{email})
        return 
      }catch(err){return err.response }
    }
  }
 
})
