<template>
    <div class="album py-5">
        <div class="container">
          <h4 class="text-center" style="margin-bottom:30px;font-weight:100;font-size:24px;font-family:Roboto;">Popular components:</h4>
          <div class="row">
            <div class="col-md-3" v-for="product in products" :key="product.id">
              <div class="card mb-4" style="align-items:center;">
                <img class="card-img-top" style="height: 225px; width: 70%; display: block;" :src="product.image" data-holder-rendered="true">
                <div class="card-body">
                  <h4 class="card-text" style="font-weight:100;"><router-link :to="{name: 'SingleProduct', params:{id: product.id}}">{{ product.product_title }}</router-link></h4>
                  <star-rating v-model="product.rating" read-only v-bind:star-size="20" v-bind:increment="0.5"/>
                  <span style="font-weight:700;font-size:28px;">1.199</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
                </div>
              </div>
            </div>
          </div>
          <button @click="test()">test</button>
        </div>
      </div>
</template>

<script>

import StarRating from 'vue-star-rating'
import { productsService} from '../services/ProductService'
import { mapGetters } from "vuex"
import { authService } from "../services/AuthService"

export default {
    data(){
        return{
            products: []
        }
    },

    components:{
        StarRating
    },

    computed: {
      ...mapGetters({
        searchedProducts: 'getSearchedProducts'
      })
    },

    methods:{
      test(){
        authService.test()
      }
    },

    created(){
        productsService.getProducts().then(response => {
            this.products = response.data.data
        })
    }
}
</script>

<style>

</style>