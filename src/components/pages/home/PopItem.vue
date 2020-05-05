<template>
     <div class="pop-item " v-if="data!= null">
        <router-link :to="'articles/' + data.path" class="title" >{{data.title}}</router-link>
        <div class="footer ">

          <span  class="category">
            <font-awesome-icon icon="tag"></font-awesome-icon>
            <span class="ml-1" v-if="data!= null && data.category != null">{{ getCategoryName(data.category) }}</span>
          </span>
          <span class="date">{{data.created_at | date}} </span>
          <div class="view-status">{{data.views}}  <font-awesome-icon icon="eye"></font-awesome-icon></div>
        </div>
      
      </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  props:{data:{type:Object,default:null}},  
  computed:{...mapGetters(["getCategoriesByID","get_screenWidth"])
  
  
  
  },
  methods:{
      getCategoryName(id){
      const cat = this.getCategoriesByID(id);
      return  cat != null ? cat.name : null
    }
  },filters:{
    date(dataInput){
      const data = new Date(dataInput);
      const dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
      return dataFormatada
    }
  }
}
</script>

<style>
.view-status{
  position: absolute;
  bottom: 16px;
  right: 14px;
  font-size: .8em;
  color: #858585;
}
.pop-item{
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding:14px 16px;
  position: relative;
 
}
.pop-item >.title{
  font-size: 1em;
  text-align: left;
  width: 100%;
  line-height: 1.1em;
  max-height: 2.2em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  position: relative;
   color: #333;
}

.pop-item .footer{
  color: #555;
  font-size: .85em;
  width: 100%;
  margin-bottom: 0;
  margin-top: 1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.pop-item .footer .date{
  color: #888;
  font-size: .9em;
  line-height: 1.7em;
  margin-left: 12px;
}
</style>