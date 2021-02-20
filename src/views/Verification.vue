<template>
    <div>
        <p>Just a moment...</p>
    </div>
</template>

<script>

import { authService } from '../services/AuthService'
import { mapMutations } from "vuex"

export default {

    methods: {
        ...mapMutations({
            setErrorMessage: 'setmailVerificationMessage'
        })
    },

    created(){
        authService.verifyUser(this.$route.params.token).then(response => {
            this.setErrorMessage(response.data.message.mail[0])
            this.$router.push({name: 'Home'})
        })
    }
}
</script>

<style>

</style>