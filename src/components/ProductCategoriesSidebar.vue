<template>
  <b-sidebar id="sidebar-categories" aria-labelledby="sidebar-categories-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3" style="text-align:center;align-items:center;">
          <h4 id="sidebar-no-header-title" style="font-family:Roboto;"><b>Choose product category</b></h4>
          <div v-for="category in categories" :key="category.id" class="list-group">
            <div class="list-group-item" @click="productCategory(category.id)" style="border-radius:0px;font-family:Roboto;font-weight:bold;cursor:pointer;">
              {{ category.product_category_name }}
            </div>
          </div>
          <button variant="primary" class="btn btn-outline-success" style="box-shadow:none;font-family:Roboto;border-radius:0px;font-weight:bold;margin-top:5px;" block @click="hide">Close Sidebar</button>
        </div>
      </template>
    </b-sidebar>
</template>

<script>

import { productsService } from "../services/ProductService";
import { mapActions } from "vuex"

export default {

    data(){
        return{
            categories: []
        }
    },

    methods: {
      productCategory(categoryId){
        this.getProductsByCategory({categoryId: categoryId})
        this.getCategoryFilters(categoryId)
        this.getCategory(categoryId)
        this.$router.push({name: 'ProductCategory', params: {categoryId: categoryId}})
      },

      ...mapActions({
            getProductsByCategory: 'getProductsByCategory',
            getCategoryFilters: 'getCategoryFilters',
            getCategory: 'getCategory'
        }),
    },

    created(){
        productsService.getCategories().then(response => {
            this.categories = response.data
        })
    }
}
</script>

<style>

</style>