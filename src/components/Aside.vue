<template>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
         <template style="height:100vh" v-slot:default="{ hide }">
            <div class="p-3">
                <nav class="mb-3">
                    <b-nav vertical>
                    <b-nav-item v-if="!isUserLoggedIn" v-b-modal.modal-prevent-closing>Login</b-nav-item>
                    <b-nav-item v-if="isUserLoggedIn" @click="logoutUser()">Logout</b-nav-item>
                    <b-nav-item v-if="!isUserLoggedIn" v-b-modal.modal-register>Register</b-nav-item>
                    <b-nav-item>
                        <li class="nav-item active" style="padding-top:10px;" @click="$router.push({name: 'Cart'})">
                            <img src="../images/shopping-cart-svg-png-icon-download-28.png" style="height:30px;width:40px;padding:0;cursor:pointer;" alt=""><b-badge v-if="getNumberOfItemsInCart > 0" pill variant="danger" style="margin-bottom:10px;">{{ getNumberOfItemsInCart }}</b-badge>
                        </li>
                    </b-nav-item>
                    <b-nav-item>
                        <div class="form-inline my-2 my-lg-0">
                            <small v-if="searchErrorMessage" style="color:red;margin-right:3px;">{{searchErrorMessage}}</small>
                            <input class="form-control mr-sm-2" type="search" @click="removeSearchErrorMessage()" v-model="searchTerm" placeholder="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="search()">Search</button>
                        </div>
                    </b-nav-item>
                    </b-nav>
                </nav>
                <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
            </div>
        </template>
    </b-sidebar>
</template>

<script>

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
      getSearchTerm: 'getSearchTerm',
      isUserLoggedIn: 'isUserLoggedIn',
      getNumberOfItemsInCart: 'getNumberOfItemsInCart'
    })
  },

  methods:{

      ...mapMutations({
        setSearchTerm: 'setSearchTerm'
      }),

      ...mapActions({
          searchProducts: "searchProductsOfAnyCategory",
          logout: "logout"
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

      logoutUser(){
        this.logout().then(() => {
          if(this.$route.name !== 'Home'){
            this.$router.push({name: 'Home'})
          }
          location.reload();
        })
      },

      removeSearchErrorMessage(){
        if(this.searchErrorMessage){
          this.searchErrorMessage = null
        }
      },
    }
}
</script>
