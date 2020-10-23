<template>
  <div>
    <div>
      <Carousel/>
    </div>
    <div class="container" >
      <!-- <Marketing/> -->
      <Album/>
    </div>
  </div>
</template>

<script>

import Carousel from "../components/Carousel"
// import Marketing from "../components/Marketing"
import Album from "../components/Album"

export default {
  components:{
    Carousel,
    // Marketing,
    Album
  }
}
</script>

<style>


</style>