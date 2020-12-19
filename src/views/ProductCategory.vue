<template>
    <div>
      <b-row>
        <b-col sm="2" style="margin-left:4px;align-items:center;text-align:center;border-right:1px solid black;height=100%;max-height:100%;background-color:#f8f9fa;">
            <h4 class="text-center" style="margin-bottom:30px;font-weight:100;font-size:24px;font-family:Roboto;">Filters:</h4>
            <div v-for="(filter, key) in filters" :key="key">
                <div>
                    <b style="font-family:Roboto;">{{filter.label}}</b>
                    <div v-for="(value, index) in filter.items" :key="index">
                        <label for="checkbox" style="margin-right:5px;font-family:Roboto;"> {{value.value}} </label>
                        <input type="checkbox" id="checkbox" v-model="value.checked">
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-success" @click="applyFilters()">Apply</button>
        </b-col>
        <b-col sm="8">
            <div class="album py-5">
                <div class="container">
                  <div class="alert alert-danger" v-if="products.length == 0 && mounted == true">
                    No results found
                  </div>
                    <h4 v-if="products.length > 0" class="text-center" style="margin-bottom:30px;font-weight:100;font-size:24px;font-family:Roboto;">{{categoryTitle.product_category_name}}</h4>
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
                </div>
            </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex"
import StarRating from 'vue-star-rating'

export default {
  
  data(){
      return{
         mounted: false
      }
  },

  computed:{
    ...mapGetters({
      filters: 'getFilters',
      products: 'getProducts',
      categoryId: 'getCategoryId',
      categoryTitle: 'getCategoryTitle'
    })
  },

  components:{
        StarRating
  },

  methods:{
        ...mapActions({
            getProductsByCategory: 'getProductsByCategory',
            getCategoryFilters: 'getCategoryFilters',
            getCategory: 'getCategory'
        }),

        filterGroupHasCheckedItem(filterGroup) {
          let result = false;

          filterGroup.items.forEach(item => {
              if(item.checked){
                result = true;
              }
          });

          return result;
      },

      getCheckedValuesFromFilterGroup(filterGroup) {
        let filteredItems = filterGroup.items.filter(item => {
          return item.checked;
        });

        return filteredItems.map(item => {
          return item.value;
        })
      },

      serializeCheckedFilters(){
        let serializedFilters = [];
        let self = this;

        this.filters.forEach(filter => {
          if( !self.filterGroupHasCheckedItem(filter) ){
              return;
          }

          serializedFilters.push({
              'attribute_id': filter.attribute_id,
              'values': self.getCheckedValuesFromFilterGroup(filter)
          });
        })

        return serializedFilters;
      },

      applyFilters(){
        let filters = this.serializeCheckedFilters();

        this.getProductsByCategory({
              categoryId: this.$route.params.categoryId,
              filters: filters
            }
        );
      }
    },

    created(){
        this.getProductsByCategory({categoryId: this.$route.params.categoryId}).then(() => {
          this.mounted = true
        })
        this.getCategoryFilters(this.$route.params.categoryId)
        this.getCategory(this.$route.params.categoryId)
        
    }
}
</script>

<style>

</style>