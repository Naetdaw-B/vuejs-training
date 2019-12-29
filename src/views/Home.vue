<template>
    <div>
        <h1 class="title">Home {{ counter }}</h1>

        <p>
            <progress :class="'progress' + className" :value="counter" max="20">{{ counter }} %</progress>
        </p>

        <p style="margin-top:25px;">
            <button @click="counter+=1" :class="'button' + className">Update</button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 1
        }
    },
    computed: {
        className() {
            return this.counter % 2 ? ' is-primary' : ' is-danger'
        }
    }
}
</script>