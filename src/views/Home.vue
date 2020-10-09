<template>
  <div>
    <div>
      <Carousel/>
    </div>
    <aside style="float:left;width:25%;">aaa</aside>
    <Marketing style="float:right;width:70%;"/>
  </div>
</template>

<script>

import Carousel from "../components/Carousel"
import Marketing from "../components/Marketing"

export default {
  components:{
    Carousel,
    Marketing
  }
}
</script>

<style>


</style>