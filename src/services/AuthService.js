import { HttpService } from './HttpService'

export class AuthService extends HttpService {
    
    register(user){
        return this.axios.post('register', user)
    }

    login(user){
        return this.axios.post('login', user)
    }

    verifyUser(token){
        return this.axios.get(`verification/${token}`)
    }

    test(){
        return this.axios.get('test')
    }
}                           

export const authService = new AuthService()