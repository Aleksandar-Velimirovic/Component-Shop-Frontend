<template>
    <b-modal
      id="modal-register"
      ref="modal"
      title="Register"
      @hide="hideModal()"
      hide-footer
    >
      <div>
        <div class="form-group">
          <label>Name</label>
          <input class="form-control" type="text" v-model="user.name" @click="removeErrorName()">
          <small v-if="errors.name" style="color:red;">{{errors.name[0]}}</small>
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
          <label>Confirm Password</label>
          <input class="form-control" type="password" v-model="user.repeat_password" @click="removeErrorConfirmPassword()">
          <small v-if="errors.repeat_password" style="color:red;">{{errors.repeat_password[0]}}</small>
        </div>
        <div class="form-group">
          <button @click="register()" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </b-modal>
</template>

<script>

import { authService } from "../services/AuthService"

  export default {
    data() {
      return {
        user: {},
        errors: {}
      }
    },
    methods: {

      register(){
        authService.register(this.user).then(() => {
            this.$nextTick(() => {
              this.$bvModal.hide('modal-register')
              this.user = {}
            })
        }).catch(error => {
          this.errors = error.response.data.errors
        })
      },

      hideModal(){
        this.user = {}
        this.errors = {}
        this.$bvModal.hide('modal-prevent-closing')
      },

      removeErrorName(){
        if(this.errors.name){
          this.errors.name = null
        }
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
      },

      removeErrorConfirmPassword(){
        if(this.errors.repeat_password){
            this.errors.repeat_password = null
        }
      }
    }
  }
</script>