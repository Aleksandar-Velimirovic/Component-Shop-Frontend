<template>
    <b-row>
        <b-col sm="2" style="height=100%;max-height:100%;background-color:#f8f9fa;margin-left:2px;">
          <b-form-group label="Categories:">
            <div style="border-bottom:1px solid gray;">

            </div>
            <b-form-checkbox
              v-for="category in categories"
              v-model="filters"
              :key="category.id"
              :value="category.id"
            >
              {{ category.product_category_name }}
            </b-form-checkbox>
            <button class="btn btn-outline-success" style="font-size:15px;margin-top:1px;" @click="filterSearchedProducts()">Apply filters</button>
        </b-form-group>
        </b-col>
        <b-col sm="8">
          <div class="album py-5">
              <div class="container">
                <div v-if="products.length > 0" class="row">
                  <div class="col-md-3" v-for="product in products" :key="product.id">
                    <div class="card mb-4" style="align-items:center;">
                      <img class="card-img-top" style="height: 225px; width: 70%; display: block;" :src="product.image.url" data-holder-rendered="true">
                      <div class="card-body">
                        <h4 class="card-text" style="font-weight:100;"><router-link :to="{name: 'SingleProduct', params:{id: product.id}}">{{ product.product_title }}</router-link></h4>
                        <star-rating v-model="product.rating" v-bind:star-size="20" v-bind:increment="0.5"/>
                        <span style="font-weight:700;font-size:28px;">1.199</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="products.length == 0 && mounted == true">
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
import StarRating from 'vue-star-rating'
import { mapGetters, mapActions } from "vuex"

export default {

    data(){
      return{
        mounted: false,
        filters: []
      }
    },

    computed:{
      ...mapGetters({
        products: "getSearchedProducts",
        categories: "getSearchedProductsCategories",
        getSearchTerm: "getSearchTerm"
      })
    },

    components:{
        StarRating
    },

    methods:{
      ...mapActions({
        searchProducts: "searchProductsOfAnyCategory"
      }),



      filterSearchedProducts(){
        this.searchProducts({searchTerm: localStorage.getItem('searchTerm'), filters: this.filters})
      },

    },
    created(){
      this.searchProducts({searchTerm: localStorage.getItem('searchTerm')}).then(() => {
        this.mounted = true
      })
    }
}
</script>

<style>

</style>