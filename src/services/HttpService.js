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
}