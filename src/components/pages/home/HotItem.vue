<template>
   <div class="hot-item " v-if="data!= null" >
     <router-link to="/" class="image-link">
      <image-vp w="100px" pb="100%" :src="data.picture.sm"></image-vp>
   
     </router-link>
      <div class="hot-item-body ">
        <router-link :to="'articles/' + data.path" class="title" >{{data.title}}</router-link>
        <div class="footer ">

          <span  class="category">
            <font-awesome-icon icon="tag"></font-awesome-icon>
            <span class="ml-1" v-if="data!= null && data.category != null">{{ getCategoryName(data.category) }}</span>
          </span>
          <span class="date">{{data.created_at}} </span>
        </div>
       
      </div>
    </div>
</template>

<script>

import ImageVp from "../../utils/ImageVp"
import {mapGetters} from "vuex"
export default {
  components:{ImageVp},
  props:{data:{type:Object,default:null}},  
  computed:{...mapGetters(["getCategoriesByID","get_screenWidth"]),},
  methods:{
      getCategoryName(id){
      const cat = this.getCategoriesByID(id);
      return  cat != null ? cat.name : null
    }
  }

}
</script>

<style>
.image-link{
  width: fit-content
}
.hot-item{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-height: 100px;
  width: 100%;
  height: 100%;
  margin: 4px;
  position: relative;
  
}
.hot-item-body{
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 12px;

}
.hot-item-body >.title{
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
  font-weight: bold;
}
.hot-item-body .footer{
  color: #555;
  font-size: .85em;
  width: 100%;
  margin-bottom: 0;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.hot-item-body .footer .date{
  color: #888;
  font-size: .85em;
}

</style>