<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"><b style="font-family:Roboto">Online Component Shop</b></a>
          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            
          </button> -->
          <div class="mb-3" v-if="$mq === 'md' || $mq === 'sm'">
            <b-button class="navbar-toggler" v-b-toggle href="#sidebar-no-header" @click.prevent><span class="navbar-toggler-icon"></span></b-button>
          </div>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
             <li class="nav-item active">
               <img src="../images/kisspng-amazon-com-shopping-cart-computer-icons-e-commerce-shopping-cart-5ab5c0a29c8a14.1766476815218607706412.png" style="height:45px;width:50px; padding:0;" alt="">
             </li>
             <li class="nav-item active">
               <a href="#" class="nav-link" style="font-family:Roboto;padding-top:11px;">Login</a>
             </li>
             <li class="nav-item active">
               <a href="#" class="nav-link" style="font-family:Roboto;padding-top:11px;">Register</a>
             </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div>
        <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
          <template v-slot:default="{ hide }">
            <div class="p-3">
              <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <nav class="mb-3">
                <b-nav vertical>
                  <b-nav-item active @click="hide">Active</b-nav-item>
                  <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                  <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
                </b-nav>
              </nav>
              <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
          </div>
      </template>
    </b-sidebar>
  </div>
    {{$mq}}
    </div>
</template>

<script>
export default {
  data(){
    return{
        width: null
      }
  },

  mounted(){
      this.width = document.documentElement.clientWidth
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

</style>