<template>
  <div>
    <div>
      <Carousel/>
    </div>
    <div class="container" >
      <Album/>
    </div>
  </div>
</template>

<script>

import Carousel from "../components/Carousel"
import Album from "../components/Album"
// import { mapGetters } from "vuex"

export default {

  components:{
    Carousel,
    Album
  }
}
</script>

<style>


</style>