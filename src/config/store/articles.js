import axios from 'axios'
import {API_URL,STORAGE_KEY} from "../../global.js"
export const articles = {
  state:{
    articles:null,
    categories:null
  },getters:{
    getArticles:state=>state.articles,
    getCategories:(state,v)=>state.categories,
    getCategoriesByID:(state)=>(id)=> state.categories != null ? state.categories.find(c=>c.id==id) : null
  },mutations:{
    setArticles:(state,v)=>state.articles = v,
    setCategories:(state,v)=>state.categories = v
  },
  actions:{
    loadPost: async(c,path)=>{
      const {data} = await axios.get(`${API_URL}/posts/path/${path}`);
      return data
    },
    loadArticles: async ({commit})=>{
      try{
        const {data} = await axios.get(`${API_URL}/posts`)
        commit("setArticles",data)
      }catch(err){ return err.response.data }
    },
    loadCategories:async({commit})=>{
      try{
        const {data} = await axios.get(`${API_URL}/categories`)
        commit("setCategories",data)
      }catch(err){return err.response.data}
    }
  }
}