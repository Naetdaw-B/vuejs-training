<template>
    <div>
        <section class="section">
            <div class="container">
                <navbar />
                <h1 class="title">App</h1>
                <router-view />
            </div>
        </section>
    </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import Navbar from './components/NavBar'
export default {
    components: {
        navbar: Navbar
    },
    head: {
        title: {
            inner: 'Hello World'
        },
        link: [
            {
                href: 'https://fonts.googleapis.com/css?family=Kanit&display=swap',
                rel: 'stylesheet'
            }
        ]
    }
}
</script>

<style>
body {
    font-family: 'Kanit';
}
</style>