<template>
    <div>
        
    </div>
</template>

<script>
import { productsService } from '../services/ProductService'

export default {
    data(){
        return{
            product: {}
        }
    },

    created(){
        productsService.getSingleProduct(this.$route.params.id).then(response => {
            this.product = response.data
        })
    }
}
</script>

<style>

</style>