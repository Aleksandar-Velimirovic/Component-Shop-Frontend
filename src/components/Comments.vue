<template>
    <div>
        <div class="album py-5" style="margin-top:150px;">
            <h4 class="text-center" style="font-size:24px;font-family:Roboto;"><b>Comments</b></h4>
             <div v-for="comment in product.comments" :key="comment.id" class="list-group list-group-flush">
                <div class="list-group-item">
                    <div style="width:20%;">
                        <div v-if="comment.rating">
                            <h4>{{comment.rating}}</h4>
                        </div>
                        <star-rating v-model="comment.rating" :show-rating="false" read-only v-bind:star-size="20" v-bind:increment="0.5"/>
                    </div>
                    <div >
                        <span>{{comment.content}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating'
// import { commentService } from '../services/CommentService'

export default {

    data(){
        return{
            rating: null,
            content: '',
            userHasOrdered: false
        }
    },

    components:{
        StarRating
    },

    props: ['product'],

    // methods:{
    //     addCommentAndRating(){
    //         commentService.addComment({user_id: localStorage.getItem('userId'), product_id: this.product.id, rating: this.rating, content: this.content}).then(() => {
    //         location.reload();
    //         })
    //     }
    // }
}
</script>

<style>

.list-group-item{
    border-bottom: thin solid !important;
    border-color:#d9d9d9 !important;
    display:flex;
    justify-content:flex-start;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 100px;

}
</style>