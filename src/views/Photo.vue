<template>
    <div>
        <img src="/converse.jpg" @click="isSelected=!isSelected" :style="style" alt="photo" width="50%" height="50%" />
    <p>{{isSelected}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isSelected:false
            // select:{ border:'solid black 3px',cursor:'pointer'},
            // deselect:{ cursor:'pointer'}
        }
    },
    computed: {
        style() {
            return this.isSelected ? { border:'solid black 3px', cursor:'pointer' } : { cursor:'pointer'}
        }
    }
  
}
</script>