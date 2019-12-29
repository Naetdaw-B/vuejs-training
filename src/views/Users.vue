<template>
<div>
    <h1>User</h1>
    <p>
        <button @click="getUsers()" class="buttom is-primary">Get User</button>
    </p>
    <!-- <pre>{{users}}</pre> -->
    <hr/>
    <p>
        <input type="text" v-model="query" class="input" max="10" />
    </p>

    <table class="table">
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>

      <tr v-for="(each,idx) in filterUser" :key= "each.id">
      <td>{{idx+1}}</td>
      <td><router-link :to="'/users/' + each.id">{{each.name}}</router-link></td>
      <td>{{each.email}}</td>
      <td>{{each.phone}}</td>
      </tr>

    </table>
     <!-- <p v-for="(each,idx) in users" :key="each.id">{{ idx + 1 }} {{each.name}}</p> -->
   <!-- <figure v-for="(each) in users" :key="each.id" class="image is-128x128">
   <img :src="each.url"/>
   </figure> -->
</div>
</template>

<script>
import axios from 'axios';
export default {
    methods:{
        async getUsers(){
        // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        //     this.users = res.data
        // })
        //this.users = [1,2,3,4,5]
    try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.users = res.data
            console.log('this.users.length')
        } catch(e) {
           console.log(e.message)
           
        }
      }
    },
    computed:{
       filterUser() {
           const pattern = new RegExp(this.query, 'i')
           return this.users.filter(each => {
             return pattern.test(each.name) || pattern.test(each.address.street) 

           } )       
        }
    },
    data() {
        return{
            users: [],
            query: ''
        }
    }
}
</script>