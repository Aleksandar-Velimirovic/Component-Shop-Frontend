<template>
  <div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        :title="title"
        @hide="hideModal()"
        hide-footer
      >
        <div>
          <div v-if="errors.verify" class="alert alert-danger">
            <p>
              {{ errors.verify[0] }}
            </p>
          </div>
          <div v-if="errors.credentials" class="alert alert-danger">
            <p>
              {{ errors.credentials[0] }}
            </p>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input class="form-control" type="text" v-model="user.email" @click="removeErrorEmail()">
            <small v-if="errors.email" style="color:red;">{{errors.email[0]}}</small>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input class="form-control" type="password" v-model="user.password" @click="removeErrorPassword()">
            <small v-if="errors.password" style="color:red;">{{errors.password[0]}}</small>
          </div>
          <div class="form-group">
            <button @click="login()" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </b-modal>
      <!-- <OrderModal/> -->
  </div>
</template>

<script>

import { authService } from "../services/AuthService"
import { mapMutations, mapGetters } from 'vuex'
// import OrderModal from "./OrderModal"

  export default {
    data() {
      return {
        user: {},
        errors: {},
        title: 'Login'
      }
    },

    computed:{
        ...mapGetters({
            isUserLoggedIn: 'isUserLoggedIn'
        })
    },

    components:{
        // OrderModal
    },

    methods: {

      ...mapMutations({
        setToken: 'setToken'
      }),

      login(){
        authService.login(this.user).then(response => {
          this.$nextTick(() => {
            if(this.$route.name=="Cart"){
              this.$bvModal.show('order-modal')
              this.$bvModal.hide('modal-prevent-closing')
            }
            this.$bvModal.hide('modal-prevent-closing')
            this.user = {}
          })
          authService.setHeaders(response.data.token)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('userId', response.data.userId)
          this.setToken(response.data.token)
        }).catch(error => {
          this.errors = error.response.data.errors
        })
      },

      hideModal(){
        this.user = {}
        this.errors = {}
        this.$bvModal.hide('modal-prevent-closing')
      },

      removeErrorEmail(){
        if(this.errors.email){
            this.errors.email = null
        }
      },

      removeErrorPassword(){
        if(this.errors.password){
            this.errors.password = null
        }
      }
    },

    created(){
      if(this.$route.name=="Cart"){
        this.title = "Please Login to order!"
      }
    }
  }
</script>