<template>
    <div>
        <div v-if="isUserLoggedIn" class="container">
            <div class="album py-5" style="height:50vh;">
                        <div class="container">
                            <h4 class="text-center" style="font-size:24px;font-family:Roboto;"><b>{{ product.product_title }}</b></h4>
                            <div class="row" style="align-items:center;text-align:center;diplay:flex;justify-content:center;">
                                <div class="card mb-4" style="align-items:center;">
                                    <img class="card-img-top" style="height: 200px; width: 50%; display: block;" :src="product.image" data-holder-rendered="true">
                                    <div class="card-body">
                                        <span style="font-weight:700;font-size:28px;">{{ product.price }}</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <div style="text-align:center;margin-top:10px;font-family:Roboto;">
                <div class="form-group">
                    <label style="font-size:40px;">Leave a comment and rating for this product!</label>
                    <input type="text" class="form-control" maxlength="100" v-model="content">
                    <star-rating v-bind:star-size="40" v-model="rating" v-bind:increment="0.5" style="margin-top:3px;"/>
                    <br>
                    <button class="btn btn-outline-success" style="font-size:20px;" @click="addCommentAndRating()">Submit</button>
                </div>
            </div>
        </div>
        <div v-else class="container" style="text-align:center;margin-top:10px;">
            <div class="aler alert-danger" style="padding-top:10px;padding-bottom:10px;">
                <h3>Please Login to rate and comment!</h3>
            </div>
        </div>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating'
import { productsService } from '../services/ProductService'
import { commentService } from '../services/CommentService'
import { mapGetters} from "vuex"

export default {

    data(){
        return{
            product: {},
            rating: null,
            content: ''
        }
    },

    computed:{
    ...mapGetters({
      isUserLoggedIn: 'isUserLoggedIn',

    })
  },
    
    components:{
        StarRating
    },

    methods:{
        addCommentAndRating(){
            commentService.addComment({user_id: localStorage.getItem('userId'), product_id: this.product.id, rating: this.rating, content: this.content})
        }
    },

    created(){
        productsService.getSingleProduct(this.$route.params.id).then(response => {
            this.product = response.data.product
        })
    }
}
</script>

<style scoped>

</style>