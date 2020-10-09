<template>
    <div class="container marketing mt-3">

        <!-- Three columns of text below the carousel -->
        <h4 class="text-center" style="margin-bottom:30px;font-weight:100;font-size:24px;font-family:Roboto;">Popular components:</h4>
        <div class="row">
          <div class="col-lg-4">
            <img class="rounded" src="https://img.gigatron.rs/img/products/large/image5b8d49f46baad.png" alt="Generic placeholder image" width="140" height="140">
            <h4 style="font-weight:100;"><a href="">JETION slušalice JT-DEP038 (Siva)</a></h4>
            <star-rating v-bind:star-size="20" v-bind:increment="0.5"/>
            <span style="font-weight:700;font-size:28px;">1.199</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded" src="https://img.gigatron.rs/img/products/large/image58fdfe280c89e.png" alt="Generic placeholder image" width="140" height="140">
            <h4 style="font-weight:100;"><a href="">AMD Ryzen 5 1600X 3.6 GHz (4.0 GHz) BOX</a></h4>
            <star-rating v-bind:star-size="20" v-bind:increment="0.5"/>
            <span style="font-weight:700;font-size:28px;">16.999</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded" src="https://img.gigatron.rs/img/products/large/image5c8f670af276f.png" alt="Generic placeholder image" width="140" height="140">
            <h4 style="font-weight:100;"><a href="">ASRock B450M PRO4</a></h4>
            <star-rating v-bind:star-size="20" v-bind:increment="0.5"/>
            <span style="font-weight:700;font-size:28px;">10.999</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
      </div>
</template>

<script>

import StarRating from 'vue-star-rating'

export default {
  components:{
    StarRating
  }
}
</script>

<style>

</style>