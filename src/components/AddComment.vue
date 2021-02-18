<template>
    <div class="form-group">
        <label>Leave a comment and rating</label>
        <input type="textarea" class="form-control" v-model="content" maxlength="100">
        <star-rating v-model="rating" v-bind:star-size="20" v-bind:increment="0.5"/>
        <br>
        <button class="btn btn-outline-success" @click="addCommentAndRating()">Submit</button>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating'
import { commentService } from '../services/CommentService'

export default {

    data(){
        return{
            rating: null,
            content: ''
        }
    },

    props: ['product'],

    components:{
        StarRating
    },

    methods:{
        addCommentAndRating(){
            commentService.addComment({user_id: localStorage.getItem('userId'), product_id: 2, rating: this.rating, content: this.content}).then(() => {
            location.reload();
            })
        }
    }
}
</script>

<style>

</style>