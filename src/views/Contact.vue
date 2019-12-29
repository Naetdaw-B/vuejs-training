<template>
    <div>
       <h1 class="title">Contact</h1>
     
       <p v-for="each in language" :key="each.text">{{ each.text }}</p>
       <div class="list is-hoverable">
       <a v-for="each in language" :key="each.text" href="#" class="list-item" >{{ each.text }}</a>

       </div>


    </div>
</template>
<script>
export default {
    data() {
        return {
         language:[
             { text : 'javascript'},
             { text : 'JAVA'},
             { text : 'PHP'},
             { text : 'CSS'},
           ]
        }
    }
}
</script>