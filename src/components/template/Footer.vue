<template>
  
  <footer class="footer" :class="{light}">
    <div class="app-container">
      <div class="footer-flow bd-red">
          <img src="../../assets/logo.png" alt="" v-if="!light">
          <div class="d-flex">

            <a target="_blank"  :href="instagram" class="footer-social "><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/> </a>
            <a target="_blank"  :href="facebook" class="footer-social"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/> </a>
            <a target="_blank"  :href="youtube" class="footer-social"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }"/> </a>
             
          </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {facebook, instagram, youtube} from "../../global.js"
export default {
  props:{light:{type:Boolean}},
  data(){
    return{

      facebook,instagram,youtube
    }
  }
}
</script>

<style>
.footer-social{
  height: 48px;
  width: 48px;
  font-size: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#eee
}
footer.footer{
  height: fit-content;
  background: rgb(63, 62, 62);
  position: relative;
}

.footer-flow{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
}
footer.footer.light .footer-flow{
  height: fit-content;
}
.footer-flow img{
  height: 96px;
}
@media screen and (max-width: 900px) {
    .footer-flow img{
      height: 68px;
    }
}
</style>