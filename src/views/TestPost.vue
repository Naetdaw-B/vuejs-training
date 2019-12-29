<template>
<div>
    <div class="container">
        <div class="row ">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Vue Axios Post</div>
    
                    <div class="card-body">
                        <form>
                        <div class="form-group" >
                        <strong>CardNo:</strong>
                        <input type="text" class="form-control" v-model="CardNo">
                        </div>
                        <div class="form-group">
                        <strong>Email:</strong>
                        <input class="form-control" v-model="Email" />
                        </div>
                        <button @click="getUsers()" class="btn btn-success">Submit</button>
                        </form>
                      
                   
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
            return {
              CardNo: '',
              Email: '',
            
            }
        },
  methods:{
         
        async postUsers(){
    
    try {
            const res = await axios.post('https://gw4clubapp.azurewebsites.net/api/MbsReg')
            this.users = res.data
            console.log('this.users.length')
        } catch(e) {
           console.log(e.message)
           
        }
      }
    }
}
</script>