<template>
    <transition name="fade">
        <div class="t-modal" v-show="show" >
            <div class="modal-content ">
               <div class="modal-header">
                    <span class="modal-close unselectable" @click="close()"> 
                        <font-awesome-icon icon="times"></font-awesome-icon>
                    </span>
                </div>
                <slot></slot>  
            </div>
        </div>
  </transition>
</template>

<script>
export default {
    props:{
        show:{type:Boolean,default:true},
        title:{type:String,default:""},
        timer:{type:Number,default:null}
    },
    methods:{
        close(){ this.$emit("close")},

    }
 
}
</script>

<style scoped>

    .t-modal{
        position: fixed;
        top: 0;left:0;
        width: 100%;height:100%;
        z-index: 999999;
        overflow: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: rgb(0, 0, 0,.3);
 
    }
    .modal-content{
        margin-top: 64px;
        min-width: 300px;
        min-height: 300px;
        width: fit-content;
        height: fit-content;
        background-color: rgb(241, 239, 239)(245, 243, 243);
        box-shadow: 0px 4px 12px #0004;
    }
    @media screen and (max-width: 756px) {
        .modal-content{
            height: 100%;
            width: 100%;
            margin: 0;
        } 
    }
    .modal-close{
      
        cursor: pointer;
        font-size: 1em;
        margin-right: 0;
        margin-left: auto;
        height: 36px;
        width: 36px;
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    
    }.modal-close:active{ color: rgb(219, 17, 17);}
    
    .modal-header{
        width: 100%;
        height: fit-content;
        z-index: 1;
        padding: 0;
    }

    /* transtition */
    .fade-enter-active, .fade-leave-active {transition: opacity .4s;}
    .fade-enter, .fade-leave-to {opacity: 0;}
</style>