<template>
    <div class="px-2 px-md-0">
         <h3 class="custom-header">
           <font-awesome-icon icon="hashtag" class="icon"></font-awesome-icon>
            Siga-nos</h3>

          <social-media  class="" instagram  :path="instagram">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
            <span class="ml-2"> instagram  </span>
          </social-media>

          <social-media facebook :path="facebook">
         
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
              <span class="ml-2">facebook</span>

          </social-media>
          <social-media youtube :path="youtube" >
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }"/>
               <span class="ml-2">youtube</span>
            </social-media>
        </div>
</template>

<script>
import SocialMedia from "../../utils/SocialMedia"
import {facebook, instagram, youtube} from "../../../global.js"
export default {
  components:{SocialMedia},
  data(){
    return{
      facebook,instagram,youtube
    }
  }
}

</script>

<style>

</style>