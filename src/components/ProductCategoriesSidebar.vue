<template>
  <b-sidebar id="sidebar-categories" aria-labelledby="sidebar-categories-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title" style="font-family:Roboto;">Choose product category</h4>
          <div v-for="category in categories" :key="category.id" class="list-group">
            <div class="list-group-item" style="border-radius:0px;font-family:Roboto;font-weight:bold;">
              {{ category.product_category_name }}
            </div>
          </div>
          <b-button variant="primary" style="border-radius:0px;font-family:Roboto;background-color:#ff9999;color:#000000;font-weight:bold;margin-top:5px;" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
</template>

<script>

import { productsService } from "../services/ProductService";

export default {

    data(){
        return{
            categories: []
        }
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