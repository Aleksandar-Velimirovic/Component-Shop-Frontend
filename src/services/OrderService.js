import { HttpService } from './HttpService'

export class OrderService extends HttpService {
    
    addOrder(order){
        return this.axios.post('createOrder', order)
    }
}                           

export const orderService = new OrderService()