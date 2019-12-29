<template>
    <div>
  <h1 class="title">User Profile</h1>
  <pre>{{user}}</pre>
    </div>
</template>
<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'
export default {
    async mounted() {
        const id = this.$route.params.id
        const res = await axios.get(url + '/' + id)
        this.user = res.data
    },
    data(){
        return{
            user:{}
        }
    }

}
</script>