<template>
    <transition name="fade">
      <div class="feed-item bd-red" v-if="data!= null">
        <router-link to="/" tag="span">
          <image-vp 
          
            :w="get_screenWidth > 756 ? '180px' : '100px'" 
            :h="get_screenWidth > 756 ? '180px' : '100px'" 
            :srcset="data.picture" sizes="240px"></image-vp>
        </router-link>
        <div class="feed-item-body bd-blue">
            <router-link :to="'articles/' + data.path" class="title bd-red" >{{data.title}}</router-link>
            <span class="description bd-green" v-show="get_screenWidth > 756 "> {{data.description}}</span>
            <div class="footer bd-red  mb-md-1" >

              <span  class="category" v-if="data.categoryname != null">
                <font-awesome-icon icon="tag"></font-awesome-icon>
                <span class="ml-1" >{{ data.categoryname }}</span>
              </span>
              <span class="date mr-0 ml-auto">{{data.publication_date | dateformat}} </span>
            </div>
            
          </div> 
        </div>
      </transition>
</template>

<script>
import {mapGetters} from "vuex"
import ImageVp from "../../utils/ImageVp"
export default {
  components:{ImageVp},
  props:{data:{type:Object,default:null}},  
  computed:{...mapGetters(["getCategoriesByID","get_screenWidth"])},
}
</script>

<style>
.feed-item{
  text-transform: uppercase;
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
  background-color: rgba(255,255,255,.4);
  box-shadow: 0px 2px 5px #0001;
}
.feed-item::before{
  content: "";
  position: absolute;
  left: 6px;
  width: 98%;
  height: 92%;
  background-color: #f2f2f2;
  transform: rotate(-2deg) translateY(3px); 
  z-index: -1;
  border-radius: 2px;
}

.feed-item-body{
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 12px;
}

.feed-item-body .description{
  flex: 1;
  color: #666;
  font-size: .9em;
  line-height: 1em;
  height: 3em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin: auto;
  margin-top: 8px;
  text-align: left;
  width: 100%;
}
.feed-item-body >.title{
  font-size: 1.2em;
  text-align: left;
  width: 100%;
  line-height: 1.2em;
  max-height: 2.4em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: bold;
  color: #444;
  


}
 @media only screen and (max-width: 756px) {
   .feed-item-body >.title{
      font-size: 1em;
      line-height: 1.1em;
      max-height: 2.2em; 
   }
   .feed-item{
     height: 100px;
     margin: 8px ;
     padding: 0 8px;
   }
   .feed-item-body{
      padding: 4px 6px;
    }
   
 }
.feed-item-body .footer{
  color: #555;
font-size: .85em;
  width: 100%;
  margin-bottom: 0;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.feed-item-body .footer .date{
  color: #888;
  font-size: .85em;
}
</style>