import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
import {API_URL,STORAGE_KEY} from "../../global.js"
import {articles} from "./articles"
Vue.use(Vuex)
const INITIAL_STATE={
  screenWidth:null,
  user:null,
  accessToken:localStorage.getItem(STORAGE_KEY) || null
}
export default new Vuex.Store({
  modules:{articles},
  state:{...INITIAL_STATE},
  getters:{
    get_screenWidth:state=>state.screenWidth,
    get_user:state=>state.user,
    get_accessToken:state=>state.accessToken,
  },mutations:{
    set_screenWidth: (state,v)=> state.screenWidth=v,
    set_user: (state,v)=> state.user=v,
    set_accessToken:(state,v)=> state.accessToken=v
  },actions:{
    async saveUser({dispatch},credentials){ /* signup */
      try{
        await axios.post(`${API_URL}/users/signup`,{...credentials});
        await dispatch("obtainToken",{...credentials})
      }catch(err){ return err.response}
    },
    async obtainToken({commit,dispatch},credentials){ //signin
      try{
        const {data} = await axios.post(`${API_URL}/users/signin`,{...credentials})
        localStorage.setItem(STORAGE_KEY,data.accessToken);
        commit(`set_accessToken`,data.accessToken);
        await dispatch("verifyToken")
      }catch(err){return err.response}
    },
    async verifyToken({state,dispatch,commit}){
      try{
        axios.defaults.headers.common["authorization"]=`bearer ${state.accessToken}`
        const {data} = await axios.post(`${API_URL}/users/auth`);
        console.log(data)
        return commit("set_user",data)
      }catch(err){
        await dispatch("clearStorage");
        return err.response}
    },
    async clearStorage({commit}){ // clear all
      delete axios.defaults.headers.common["authorization"];
      delete localStorage.removeItem(STORAGE_KEY);
      commit("set_user",null);
      commit("set_accessToken",null)
    },
  }
 
})
