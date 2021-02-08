<template>
    <div>
        <div class="album py-5" style="margin-top:150px;">
            <h4 class="text-center" style="font-size:24px;font-family:Roboto;"><b>Comments</b></h4>
            <div v-for="comment in product.comments" :key="comment.id" class="list-group list-group-flush">
                <div class="list-group-item" style="border-bottom:thin solid;border-color:#d9d9d9;display:flex;justify-content:space-between;">
                    <div style="width:20%;">
                        <div v-if="comment.rating">
                            <h4>{{comment.rating.rating}}</h4><span></span>
                        </div>
                        <b-progress v-if="comment.rating" class="mt-2" max="5" style="width:100px;margin-bottom:5px;">
                            <b-progress-bar :value="comment.rating.rating" variant="warning"></b-progress-bar>
                        </b-progress>
                    </div>
                    <div style="padding-top:30px;">
                        <span>{{comment.content}}</span>
                    </div>
                </div>
            </div>
            <br>
            <div v-if="userHasOrdered" class="form-group">
                <label>Leave a comment and rating</label>
                <input type="textarea" class="form-control" v-model="content">
                <star-rating v-model="rating" v-bind:star-size="20" v-bind:increment="0.5"/>
                <br>
                <button class="btn btn-outline-success" @click="addCommentAndRating()">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating'
import { commentService } from '../services/CommentService'

export default {

    data(){
        return{
            userHasOrdered: localStorage.getItem('userHasOrdered'),
            // comment: {
            //     user_id: localStorage.getItem('userId'),
            //     product_id: this.productId,
            //     rating: null,
            //     content: ''
            // },
            rating: null,
            content: ''
        }
    },

    components:{
        StarRating
    },

    props: ['product'],

    methods:{
        addCommentAndRating(){
            commentService.addComment({user_id: localStorage.getItem('userId'), product_id: this.product.id, rating: this.rating, content: this.content}).then(response => {
                console.log(response)
            })
        }
    }
}
</script>

<style>

</style>