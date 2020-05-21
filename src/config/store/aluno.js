import axios from 'axios'
import {API_URL,STORAGE_KEY} from "../../global.js"
export const Aluno = {
  state:{
    user:null,
    accessToken:localStorage.getItem(STORAGE_KEY) || null,
    modules:null
  },getters:{
    get_modules: state=>state.modules,
    get_user:state=>state.user,
    get_accessToken:state=>state.accessToken,
  },mutations:{
    set_modules: (state,v)=> state.modules=v,
    set_user: (state,v)=> state.user=v,
    set_accessToken:(state,v)=> state.accessToken=v
  },actions:{
    
    async loadModules({commit}){
      try{
        const {data} =await axios.get(`${API_URL}/modules`);
        commit("set_modules",data)
      }catch(err){err.response.data.errors || err.response}
    },
    /*  */
    async obtainToken({commit,dispatch},credentials){ //signin
      try{
        const {email,password} = credentials
        const {data} = await axios.post(`${API_URL}/students/signin`,{email,password})
        localStorage.setItem(STORAGE_KEY,data.accessToken);
        commit(`set_accessToken`,data.accessToken);
        await dispatch("verifyToken")
      }catch(err){return err.response.data || "Erro do servidor"}
    },
    async verifyToken({state,dispatch,commit}){
      try{
        axios.defaults.headers.common["authorization"]=`bearer ${state.accessToken}`
        const {data} = await axios.post(`${API_URL}/students/auth`);
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
}