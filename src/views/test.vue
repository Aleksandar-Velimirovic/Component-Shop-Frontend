<template>
    <div>
        <input type="text" v-model="test">
        <button @click="submit()">submit</button>
    </div>
</template>

<script>

import axios from "axios"

export default {
    data(){
        return{
            test: ''
        }
    },

    methods:{
        submit(){
            axios.post('http://localhost:8000/api/test', this.test, { headers: {Authorization: `basic: ${'token'}`}})
        }
    }
}
</script>

<style>

</style>