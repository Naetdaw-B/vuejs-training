<template>
    <div>
         <nav class="navbar">
          <div class="navbar-brand">
           <a @click="toggleActive()" :class="`navbar-burger burger` + className"  >
               <span ></span>
               <span ></span>
              <span ></span>
             </a>
          </div>
             <div :class="`navbar-menu ${className}`">
             <router-link
             @click.native="toggleActive()"
             v-for="each in links"
             :key="each.to"
             :to="each.to"
            class="navbar-item"
             >{{each.text}}
            </router-link>


            
           </div>
         </nav>
    </div>
</template>

<script>
export default {
  methods: {
    toggleActive(){
      this.isActive = !this.isActive
    }
  },
  computed:{
      className() {
        return this.isActive ? 'is-active' : ''
      }
  },
 data() {
  return {
      isActive: false,
      links: [
          {
              to: '/',
              text: 'Home'

          },
          {
              to:'/about',
              text:'About'
          },

            {
              to:'/contact',
              text:'Contact'
          },
            {
              to:'/form',
              text:'Form'
          },
            {
              to:'/photo',
              text:'Photo'
          },
            {
              to:'/users',
              text:'Users'
          },
          
      ]

    }

}

}

</script>