import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/'

export class HttpService{
    constructor(){
        axios.defaults.baseURL = BASE_URL
        axios.defaults.headers.common.Accept = 'application/json'
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
        axios.defaults.headers.common.AccessControlAllowOrigin = '*'
        this.axios = axios
    }

    parseUrl(url){
        if(typeof url === 'string' && url.includes(BASE_URL)){
            return url.substr(BASE_URL.length)
        }
        return url
    }

    setHeaders() {
     console.log(axios.defaults.headers)   
    }
}