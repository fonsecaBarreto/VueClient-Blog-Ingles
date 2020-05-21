<template>
    <div class="pop-item-container bd-red">

      <div class="pop-item bd-blue" v-if="data!= null">
          <router-link :to="'/articles/' + data.path+'#app'" class="title" >{{data.title}}</router-link>
          <div class="footer ">
            <span  class="category">
              <font-awesome-icon icon="tag"></font-awesome-icon>
              <span class="ml-1" v-if="data!= null && data.category != null">{{ getCategoryName(data.category) }}</span>
            </span>

            <div class="mr-0 ml-auto d-flex ">
              <span class="status">{{data.publication_date | dateformat}} </span>
              <div class="status mx-3"> <font-awesome-icon icon="eye"></font-awesome-icon> {{data.views}} </div>
              <div class="status "><font-awesome-icon icon="heart"></font-awesome-icon> {{data.votes}} </div>
            </div>
          </div>
      </div>

      <div class="pop-hold" v-if="data == null"></div>

    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  props:{data:{type:Object,default:null}},  
  computed:{...mapGetters(["getCategoriesByID","get_screenWidth"])},
  methods:{
      getCategoryName(id){
        const cat = this.getCategoriesByID(id);
        return  cat != null ? cat.name : null
      }
  }
}
</script>

<style>
.pop-hold{
  background-color: #eee;
  height: 48px;
  border-radius: 4px;
}
.pop-item-container{
  flex: 1;
  width: 100%;
  height: 100%;
  padding:18px 12px;
}

.pop-item{
 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
 
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
  align-items: center;
  justify-content: flex-start;
}
.pop-item .footer .date{
  color: #888;
  font-size: .9em;
  line-height: 1.7em;
  margin-left: 12px;
}
</style>