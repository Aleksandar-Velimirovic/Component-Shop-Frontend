<template>
    <div>
        <b-row>
            <b-col sm="3" style="height=100vh;max-height:100vh;background-color:#f8f9fa;margin-left:2px;">
                <h4 style="font-family:Roboto;">
                    Specifications
                </h4>
                <table class="table">
                    <tbody>
                        <tr v-for="value in productAttribueValues" :key="value.id">
                        <th style="background-color:#fff5cc;font-weight:100;font-family:Roboto;">{{ value.product_category_attribute.label }}:</th>
                            <td style="font-weight:100;font-family:Roboto;">{{ value.value }}</td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
            <b-col sm="5">
                <div class="album py-5" style="height:100vh;">
                    <div class="container">
                        <h4 class="text-center" style="margin-bottom:30px;font-size:24px;font-family:Roboto;"><b>{{ product.product_title }}</b></h4>
                        <div class="row" style="align-items:center;text-align:center;diplay:flex;justify-content:center;">
                            <div class="card mb-4" style="align-items:center;">
                                <img class="card-img-top" style="height: 500px; width: 75%; display: block;" :src="product.image" data-holder-rendered="true">
                                <div class="card-body">
                                    <star-rating v-model="product.rating" read-only v-bind:star-size="20" v-bind:increment="0.5"/>
                                    <span style="font-weight:700;font-size:28px;">{{ product.price }}</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
                                    <p style="margin-top:5px;">
                                        <button class="btn btn-outline-success" @click="addToCart()">Add To Cart</button>
                                    </p>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductInCart v-bind:product="product" style="max-height:50%;height:50%;"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { productsService } from '../services/ProductService'
import StarRating from 'vue-star-rating'
import { mapMutations } from "vuex"
import ProductInCart from "../components/ProductInCart"

export default {
    data(){
        return{
            product: {},
            productAttribueValues: {},
            inCart: false
        }
    },

    components:{
        StarRating,
        ProductInCart
    },

    methods:{
        ...mapMutations({
            setCartItems: 'setCartItems'
        }),

        addToCart(){
            this.setCartItems(this.product)
            this.inCart = true
            this.$bvModal.show('modal-cart')
        }
    },

    created(){
        productsService.getSingleProduct(this.$route.params.id).then(response => {
            this.product = response.data.product
            this.productAttribueValues = response.data.productAttribueValues
        })
    }
}
</script>

<style>

</style>