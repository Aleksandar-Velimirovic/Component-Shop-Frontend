<template>
    <div style="background-color:#f8f9fa;">
        <b-row>
            <b-col sm="8" style="height=100vh;max-height:100vh;background-color:#f8f9fa;">
                <div class="album py-5" style="height:100vh;align-items:center;text-align:center;justify-content:center;background-color:white;">
                    <h1 v-if="products.length > 0" style="font-family:Roboto;font-weight:bold">In Cart</h1>
                    <div v-else class="emptyCart">
                        <div class="animation">
                            <h1 style="font-family:Roboto;font-weight:bold">Your Cart Is Empty</h1>
                            <img src="../images/shopping-cart-svg-png-icon-download-28.png" style="height:100x;width:150px;margin-top:100px;" alt="">
                        </div>
                        <p style="margin-top:3px;">There's nothing in your cart. <a href="/">Get back to the home page.</a></p>
                    </div>
                    <div v-for="product in products" class="container" :key="product.id">
                        <div class="row" style="align-items:center;text-align:center;justify-content:center;">
                            <div class="card mb-4" style="align-items:center;padding-left:10px;padding-right:10px;border-style: none;border-bottom: 1px solid black;border-radius:0px;border-color: #e6e6e6">
                                <h4 class="text-center" style="margin-top:30px;font-size:20px;font-family:Roboto;"><router-link :to="{name: 'SingleProduct', params:{id: product.id}}">{{ product.product_title }}</router-link></h4>
                                <img class="card-img-top" :src="product.image" style="height: 100px; width: 25%; display: block;" data-holder-rendered="true">
                                <div class="card-body">
                                    <!-- <star-rating v-model="product.rating" read-only v-bind:star-size="20" v-bind:increment="0.5"/> -->
                                    Price: <span style="font-weight:700;font-size:20px;color:red;">{{ product.price }}</span><span style="margin-left:2px;font-size:15px;font-weight:400;">RSD</span>
                                </div>
                                <button class="btn btn-outline-warning" style="margin-bottom:4px;font-size:15px;" @click="removeFromCart(product)">Remove From Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col sm="3">
                <div>
                    <div class="album py-5" style="height:100vh;align-items:center;text-align:center;justify-content:center;background-color:white;">
                        <div class="container">
                            <div class="row" style="align-items:center;text-align:center;justify-content:center;">
                                <div class="card mb-4" style="align-items:center;padding-left:10px;padding-right:10px;border-style: none;border-bottom: 1px solid black;border-radius:0px;border-color: #e6e6e6">
                                    <div class="card-body">
                                    <span style="font-size:25px;margin-right:5px;">Total Price:</span><span style="font-weight:700;font-size:25px;color:red;">{{totalPrice}}</span><span style="margin-left:2px;font-size:15px;font-weight:400;">RSD</span>
                                    </div>
                                    <button v-if="totalPrice > 0" class="btn btn-outline-success" style="margin-bottom:10px;font-size:25px;">Continue To Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from "vuex"

export default {
    data(){
        return{
            products: [],

            totalPrice: 0
        }
    },

    computed:{
        ...mapGetters({
            getCartItems: 'getCartItems'
        })
    },

    methods:{
        ...mapMutations({
            removeItemFromCart: 'removeItemFromCart'
        }),

        removeFromCart(product){
            this.removeItemFromCart(product)
            this.totalPrice -= product.price
        }
    },

    created(){

        this.products = this.getCartItems

        this.products.forEach(product => {
            this.totalPrice += product.price
        });
    }
}
</script>

<style scoped>
html, body { 
    
    margin: 0; 
}
.mb-4, .my-4 {
    margin-bottom: 0 !important;
}

.animation {
  /* position: relative;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 900;
  text-decoration: none;
  color: white;
  display: inline-block;
  background-size: 120% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -ms-background-clip: text;
  -ms-text-fill-color: transparent;
  background-clip: text;
  background-image: linear-gradient(45deg, 
                    #7794ff, 
                    #44107A,
                    #FF1361,
                    #FFF800); */
  animation: .8s shake infinite alternate;
}

@keyframes shake {
  0% { transform: skewX(-15deg); }
  5% { transform: skewX(15deg); }
  10% { transform: skewX(-15deg); }
  15% { transform: skewX(15deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }  
}
</style>