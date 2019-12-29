<template>
<div>
    <h1 class="title">Form</h1>

    <div class="field">
    <input v-model="person.name" type="text" :class="`input ${className('name') }`" />
    </div>
    <div class="field">
    <input v-model="person.surname"  type="text" :class="`input ${className('surname') }`" placeholder="surname" />
    </div>



     <div class="field">
         <label class="checkbox">
    <input type="checkbox" v-model="person.isMarried" />Married
         </label>
    </div>
    
    <div class="field">
    <label class="checkbox">
    <input type="checkbox" v-model="person.hobbies" value="reading" />Reading</label>
    <label class="checkbox">
    <input type="checkbox" v-model="person.hobbies" value="music" />Music</label>
   <label class="checkbox">
    <input type="checkbox" v-model="person.hobbies" value="hangout" />Hangout</label>
    </div>

    <div class="field">
       <div class="control">
          <label class="radio">
             <input type="radio" v-model="person.gender" value="F" >Female
          </label>
       </div>

    <div class="control">
          <label class="radio">
              <input type="radio" v-model="person.gender" value="M" >Male
          </label>
       </div>
    </div>

    <div class="field">
        <div class="select">
        <select v-model="person.language">
        <option v-for="each in language" :value="each" :key="each">{{ each }}</option>
        </select>
     </div>
    </div>

<p> {{person}} </p>
<p> {{person.name.length}} </p>


</div>
</template>
<script>
import 'animate.css/animate.min.css'
export default {
    // computed:{
    //     className(){
    //         return {
    //             name: this.person.name ? 'is-success' : 'is-danger',
    //             surname:'is-success'
    //         }
    //     }
    // },
    methods: {
      className(fieldName) {
        return this.person[fieldName] ? 'is-success' : 'is-danger animated shake'
      }
    },
    data() {
      return{
          language:['Javascript','PHP'],
          dirty:{
             name: false,
             surname: false
          },
          person:{
             name: 'Admin',
             surname:'test',
             isMarried:false,
             hobbies: [],
             gender:[],
             language:'javascript'
              }
          }
          
      }
    }

</script>