<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/"><b style="font-family:Roboto">Online Component Shop</b></a>
          <div class="mb-3" v-if="$mq === 'md' || $mq === 'sm'">
            <b-button class="navbar-toggler" v-b-toggle href="#sidebar-no-header" @click.prevent><span class="navbar-toggler-icon"></span></b-button>
          </div>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
             <li class="nav-item active">
                <img src="../images/kisspng-amazon-com-shopping-cart-computer-icons-e-commerce-shopping-cart-5ab5c0a29c8a14.1766476815218607706412.png" style="height:45px;width:50px; padding:0;" alt="">
             </li>
             <li class="nav-item active">
                <a href="#" class="nav-link" style="font-family:Roboto;padding-top:11px;">
                  <b-button class="nav-link" v-b-modal.modal-prevent-closing v-b-tooltip.hover title="Login to buy products!" style=" background:none!important;border:none;padding:0!important;"><b>Login</b></b-button>
                </a>
             </li>
             <li class="nav-item active">
                <a href="#" class="nav-link" style="font-family:Roboto;padding-top:11px;">
                  <b-button class="nav-link" v-b-modal.modal-register v-b-tooltip.hover title="Login to buy products!" style=" background:none!important;border:none;padding:0!important;"><b>Register</b></b-button>
                </a>
             </li>
             <button class="btn btn-outline-success" style="box-shadow:none;font-family:Roboto;" v-b-toggle.sidebar-categories>Components <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15211315791553239378-512.png" style="height:30px;width:30px;" alt=""></button>
            </ul>
            <div class="form-inline my-2 my-lg-0">
              <small v-if="searchErrorMessage" style="color:red;margin-right:3px;">{{searchErrorMessage}}</small>
              <input class="form-control mr-sm-2" type="search" @click="removeSearchErrorMessage()" v-model="searchTerm" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="search()">Search</button>
            </div>
          </div>
          <!-- #f8f9fa -->
        </nav>
          <Aside id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow/>
          <Login/>
          <Register/>
          <ProductCategoriesSidebar/>
    <!-- {{$mq}} -->
    </div>
</template>

<script>

import Aside from "./Aside"
import Login from "./Login"
import Register from "./Register"
import ProductCategoriesSidebar from "./ProductCategoriesSidebar"
import { mapMutations, mapGetters, mapActions } from "vuex"

export default {

  data(){
    return{
      searchTerm: '',
      searchErrorMessage: null
    }
  },

  computed:{
    ...mapGetters({
      getSearchTerm: 'getSearchTerm'
    })
  },

  methods:{

      ...mapMutations({
        setSearchTerm: 'setSearchTerm'
      }),

      ...mapActions({
          searchProducts: "searchProductsOfAnyCategory"
        }),

      search(){
        if(this.searchTerm !== ''){
          this.setSearchTerm(this.searchTerm)
          this.searchProducts({searchTerm: this.getSearchTerm})
          this.$router.push({name: 'SearchedComponents', params: {'searchTerm': this.searchTerm}})
        }else{
          return this.searchErrorMessage = 'Please enter a search term to search products!'
        }
      },

      removeSearchErrorMessage(){
        if(this.searchErrorMessage){
          this.searchErrorMessage = null
        }
      },
    },

  components:{
    Aside,
    Login,
    Register,
    ProductCategoriesSidebar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

</style>