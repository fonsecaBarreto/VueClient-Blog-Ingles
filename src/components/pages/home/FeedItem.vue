<template>

   <div class="feed-item " v-if="data!= null">
     <router-link to="/" tag="span">
      <image-vp w="180px" h="180px" :src="data.picture.sm"></image-vp>
     </router-link>
     <div class="feed-item-body">
        <router-link :to="'articles/' + data.path" class="title" >{{data.title}}</router-link>
        <span class="description"> {{data.description}}</span>
        <div class="footer">

          <span  class="category">
            <font-awesome-icon icon="bookmark"></font-awesome-icon>
            <span class="ml-1" v-if="data!= null && data.category != null">{{ getCategoryName(data.category) }}</span>
          </span>
          <span class="date">{{data.created_at}} </span>
        </div>
        
      </div> 
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import ImageVp from "../../utils/ImageVp"
export default {
  components:{ImageVp},
  props:{data:{type:Object,default:null}},  
  computed:{...mapGetters(["getCategoriesByID","get_screenWidth"])
  },
  methods:{
      getCategoryName(id){
      const cat = this.getCategoriesByID(id);
      return  cat != null ? cat.name : null
    }
  }
}
</script>

<style>
.feed-item{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 12px ;
  padding: 0 22px;
  position: relative;
  height: 180px;
}
.feed-item-body{
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 12px;
}

.feed-item-body .description{
  flex: 1;
  
  color: #666;
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
  margin: auto;
  text-align: left;
  width: 100%;
}
.feed-item-body >.title{
  font-size: 1.3em;
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
.feed-item-body .footer{
  color: #555;
font-size: .85em;
  width: 100%;
  margin-bottom: 0;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.feed-item-body .footer .date{
  color: #888;
  font-size: .85em;
}
</style>