<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"><b style="font-family:Roboto">Online Component Shop</b></a>
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
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
          <Aside id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow/>
          <Login/>
          <Register/>
    <!-- {{$mq}} -->
    </div>
</template>

<script>

import Aside from "./Aside"
import Login from "./Login"
import Register from "./Register"

export default {
  components:{
    Aside,
    Login,
    Register
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

</style>