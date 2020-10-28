<template>
    <b-row>
        <b-col sm="2">
          <b-form-group label="Categories:" style="border-bottom:1px solid gray;">
            <b-form-checkbox
              v-for="category in categories"
              v-model="selected"
              :key="category.id"
              :value="category.id"
            >
              {{ category.product_category_name }}
            </b-form-checkbox>
        </b-form-group>
        </b-col>
        <b-col sm="8">
          <div class="album py-5">
              <div class="container">
                <div v-if="searchedProducts.length > 0" class="row">
                  <div class="col-md-3" v-for="product in searchedProducts" :key="product.id">
                    <div class="card mb-4" style="align-items:center;">
                      <img class="card-img-top" style="height: 225px; width: 70%; display: block;" :src="product.image.url" data-holder-rendered="true">
                      <div class="card-body">
                        <h4 class="card-text" style="font-weight:100;"><a href="">{{ product.product_title }}</a></h4>
                        <star-rating v-model="product.rating" v-bind:star-size="20" v-bind:increment="0.5"/>
                        <span style="font-weight:700;font-size:28px;">1.199</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="searchedProducts.length == 0 && request == true">
                    <div class="alert alert-danger" style="text-align:center">
                        <h3>
                            Component not found using search term {{ $route.params.searchTerm }}
                        </h3>
                    </div>
                </div>
              </div>
          </div>
        </b-col>
    </b-row>
</template>

<script>

import { productsService } from "../services/ProductService";
import StarRating from 'vue-star-rating'

export default {

    data(){
        return{
            searchedProducts: [],
            categories: [],
            count: 0,
            request: false
        }
    },

    components:{
        StarRating
    },

    methods:{
        removeDuplicates(originalArray, prop) {
          var newArray = [];
          var lookupObject  = {};

          for(var i in originalArray) {
              lookupObject[originalArray[i][prop]] = originalArray[i];
          }

          for(i in lookupObject) {
              newArray.push(lookupObject[i]);
          }
            return newArray;
      }
    },

    created(){
        let array = []
        productsService.searchProductsOfAnyCategory(this.$route.params.searchTerm).then(response => {
            this.searchedProducts = response.data
            response.data.forEach(component => {
              array.push(component.category)
            });
            this.categories = this.removeDuplicates(array, 'product_category_name')
            this.request = true
        })
    }
}
</script>

<style>

</style>