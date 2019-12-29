<template>
    <div>
        <div :class="className">
            <div class="modal-background"></div>
             <div class="model-content">
               <div class="box">
                   <h1 class="title">Model Window</h1>
               </div>
               </div>
           <button @click="show=false" class="modal-close is-large" aria-label="close"></button>
         </div>
        <button @click="show=true" class="button is-primary">Show Modal</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false
        }
    },
    computed: {
        className(){
            return this.show ? 'modal is-active':'modal'
        }
    }
}
</script>