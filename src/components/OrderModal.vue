<template>
    <div>
        <b-modal 
            id="order-modal" 
            title="Order"
            ref="modal"
            hide-footer
            v-once
        >
            <div class="form-group">
                <label>First Name</label>
                <input class="form-control" type="text" v-model="order.customer_first_name" @click="removeErrorFirstName()">
                <small v-if="errors.first_name" style="color:red;">{{errors.customer_first_name[0]}}</small>
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input class="form-control" type="text" v-model="order.customer_last_name" @click="removeErrorLastName()">
                <small v-if="errors.last_name" style="color:red;">{{errors.customer_last_name[0]}}</small>
            </div>
            <div class="form-group">
                <label>City</label>
                <input class="form-control" type="text" v-model="order.city" @click="removeErrorCity()">
                <small v-if="errors.password" style="color:red;">{{errors.city[0]}}</small>
            </div>
            <div class="form-group">
                <label>Address</label>
                <input class="form-control" type="text" v-model="order.order_address" @click="removeErrorAddress()">
                <small v-if="errors.email" style="color:red;">{{errors.order_address[0]}}</small>
            </div>
            <div class="form-group">
                <label>Apartment number</label>
                <input class="form-control" type="text" v-model="order.apartment_number" @click="removeErroApartmentNumber()">
                <small v-if="errors.password" style="color:red;">{{errors.apartment_number[0]}}</small>
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input class="form-control" type="text" v-model="order.phone_number" @click="removeErrorPhoneNumber()">
                <small v-if="errors.repeat_password" style="color:red;">{{errors.phone_number[0]}}</small>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="addOrder()">Submit</button>
            </div>
        </b-modal>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
import { orderService } from "../services/OrderService"

export default {
    data(){
        return{
            order: {
                user_id: localStorage.getItem('userId'),
                product_id: []
            },
            errors: {}
        }
    },

    computed:{
        ...mapGetters({
            cartItems: 'getCartItems'
        })
    },

    methods: {

        addOrder(){
            orderService.addOrder(this.order).then(() => {
                this.$router.push({name: 'Home'})
                this.setCartItems(null)
                this.totalPrice = 0
            }).catch(error => {
                this.errors = error.response.data.errors
            })
        },

        ...mapMutations({
            setCartItems: 'setCartItems'
        }),

        removeErrorFirstName(){
            if(this.errors.first_name){
            this.errors.first_name = null
            }
        },

        removeErrorLastName(){
            if(this.errors.last_name){
            this.errors.last_name = null
            }
        },

        removeErrorCity(){
            if(this.errors.city){
                this.errors.city = null
            }
        },

        removeErrorAddress(){
            if(this.errors.address){
                this.errors.address = null
            }
        },

        removeErroApartmentNumber(){
            if(this.errors.appartmant_number){
                this.errors.appartmant_number = null
            }
        },

        removeErrorPhoneNumber(){
            if(this.errors.phone_number){
                this.errors.phone_number = null
            }
        }
        },

        created(){
            this.cartItems.map(item => {
                this.order.product_id.push(item.id)
            })
        }
}
</script>

<style>

</style>