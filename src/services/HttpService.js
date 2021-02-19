import axios from 'axios'

const BASE_URL = 'https://floating-hollows-40923.herokuapp.com/api/'

export class HttpService{
    constructor(){
        axios.defaults.baseURL = BASE_URL
        axios.defaults.headers.common.Accept = 'application/json'
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
        axios.defaults.headers.common.AccessControlAllowOrigin = '*'
        this.axios = axios
    }
}