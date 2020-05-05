<template>
  <button-a primary @click.native="clickHandle()"> facebook</button-a>
</template>

<script>
window.authenticateCallback = (token)=>{
  console.log(token)
}
import * as queryString from 'query-string';
const stringifiedParams = queryString.stringify({
  client_id: 246864986698252,
  redirect_uri: 'http://localhost:3000/oauth',
  scope: ['email', 'user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
});
const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;
import ButtonA from "../ButtonA"
export default {
  components:{ButtonA},
  methods:{

    clickHandle(){
      
/*       var myWindow = window.opener.authenticateCallback(facebookLoginUrl, "_blank", "width=560,height=640");
 */      var myWindow = window.opener.authenticateCallback('asdasd');
      console.log(myWindow.document)
    
    } 
  }
}
</script>

<style>

</style>