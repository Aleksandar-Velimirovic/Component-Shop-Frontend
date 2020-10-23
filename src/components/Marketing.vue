<template>
    <div class="container marketing mt-3">

        <!-- Three columns of text below the carousel -->
        <h4 class="text-center" style="margin-bottom:30px;font-weight:100;font-size:24px;font-family:Roboto;">Popular components:</h4>
        <div class="row" >
          <div class="col-md" v-for="product in products" :key="product.id">
            <img class="rounded" :src="product.image.url" alt="Generic placeholder image" width="140" height="140">
            <h4 style="font-weight:100;"><a href="">{{ product.product_title }}</a></h4>
            <star-rating v-model="product.rating" v-bind:star-size="20" v-bind:increment="0.5"/>
            <span style="font-weight:700;font-size:28px;">{{ product.price }}</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
          <!-- <button v-if="next_page_url" @click="getProductsByUrl()" class="btn btn-primary mt-3" style="margin-left:auto;margin-right:auto;">
            <div>
              Load More
            </div>
      </button> -->
      </div>
</template>

<script>

import StarRating from 'vue-star-rating'
import { mapActions, mapGetters } from 'vuex'

export default {

  computed:{
    ...mapGetters({
      products: 'getProducts',
      next_page_url: 'getNextPageUrl'
    })
  },

  components:{
    StarRating
  },

  methods:{
      ...mapActions({
        getProductsByUrl: 'getProductsByUrl'
      }),

      handleScroll(){
        this.getProductsByUrl()
      }
  },

  created(){
    // window.addEventListener('scroll', this.handleScroll);
    this.getProductsByUrl()
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>

</style>