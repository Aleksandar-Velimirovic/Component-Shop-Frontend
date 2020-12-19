<template>
    <b-modal
      id="modal-cart"
      ref="modal"
      title="Added to cart"
      hide-footer
    >
        <div class="album py-5">
            <div class="container">
                <h4 class="text-center" style="margin-bottom:30px;font-size:24px;font-family:Roboto;"><b>{{ product.product_title }}</b></h4>
                <div class="row" style="align-items:center;text-align:center;diplay:flex;justify-content:center;">
                    <div class="card mb-4" style="align-items:center;">
                        <img class="card-img-top" style="height: 100px; width: 20%; display: block;" :src="product.image" data-holder-rendered="true">
                        <div class="card-body">
                            <span style="font-weight:700;font-size:28px;">{{ product.price }}</span><span style="margin-left:2px;font-size:20px;font-weight:400;">RSD</span>
                            <p style="display:flex;">
                                <button class="btn btn-outline-success" style="margin-right:3px;" @click="$router.push({name: 'Cart'})">To Cart</button>
                                <button class="btn btn-outline-success" @click="hideModal()">Back To Product</button>
                            </p>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {

    props: ['product'],

    methods:{
        hideModal(){
            this.$bvModal.hide('modal-cart')
        }
    }
}
</script>