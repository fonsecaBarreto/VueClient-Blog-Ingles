import axios from 'axios'
import {API_URL} from "../../global.js"
export const articles = {
  state:{
    categories:null,
    mostViewed:null,
    editor:null,
    feed:null,
    feedConfig:{
      total:0,
      offset:0,
      limit:8,
      amount:0
    }
  },getters:{
    getEditor:(state)=>state.editor,
    getFeed:(state)=>state.feed,
    getFeedConfig:(state)=>state.feedConfig,
    getCategories:(state)=>state.categories,
    getCategoriesByID:(state)=>(id)=> state.categories != null ? state.categories.find(c=>c.id==id) : null,
    getCategoriesByPAth:(state)=>(path)=> state.categories != null ? state.categories.find(c=>c.path==path) : null,
    getMostViewed:(state)=>state.mostViewed
  },mutations:{
    setEditor:(state,v)=>state.editor = v,
    setFeedConfig:(state,v)=>state.feedConfig=v,
    setFeed:(state,v)=>state.feed=v,
    setCategories:(state,v)=>state.categories = v,
    setMostViewed:(state,v)=>state.mostViewed = v
  },
  actions:{
    loadRecommended:async(c,path)=>{
      try{
          const {data} = await axios.get(`${API_URL}/posts/recommended/${path}`);
          return data;
      }catch(err){return null}
    },
    /*  */
    loadFeed: async ({commit,state})=>{
      try{
          var {total,offset,limit,amount} = {...state.feedConfig};
          if(total == 0 || (total > amount)){
            const {data} = await axios.get(`${API_URL}/posts/date?o=${offset}&l=${limit}`);
            if(data && data.articles){
              total=data.count
              offset+=data.articles.length;
              amount+=data.articles.length;
              if(state.feed == null)commit("setFeed",[...data.articles]);
              else commit("setFeed",[...state.feed, ...data.articles]);
              commit("setFeedConfig",{total,offset,amount,limit})   
            }
          }    
      }catch(err){ return err.response }
    },
    loadEditor:async({commit})=>{
      try{
        const {data} = await axios.get(`${API_URL}/posts/favorites`)
        commit("setEditor",data)
      }catch(err){return err.response}
    },
    loadMostViewed:async ({commit})=>{
      try{
        const {data} = await axios.get(`${API_URL}/posts/views?l=6`)
        commit("setMostViewed",data)
      }catch(err){
        return err.response
      }
    },
    loadPost: async(c,path)=>{
      try{
        const {data} = await axios.get(`${API_URL}/posts/path/${path}`);
        return data
      }catch(err){
        return null
      } 
    },
    loadPostsFromCategory:async(c,path)=>{
      try{
        const {data} = await axios.get(`${API_URL}/posts/category/${path}`);
        return data
      }catch(err){
        return null
      } 
    },
    loadCategories:async({commit})=>{
      try{
        const {data} = await axios.get(`${API_URL}/categories`)
        commit("setCategories",data)
      }catch(err){return err.response}
    },
    vote: async(c,{path,vote})=>{
      try{
        await axios.put(`${API_URL}/posts/vote/${path}?v=${vote}`)
      }catch(err){ return err.response}
    },
  }
}