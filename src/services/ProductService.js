import { HttpService } from './HttpService'
import store from '../store';

export class ProductService extends HttpService {
    
    getProductsByCategory(categoryId, filters = []){
        return this.axios.get(`/products/category/${categoryId}`, {
            params: {
                filters: filters
            }
        })
    }

    getProducts(){
        return this.axios.get('products')
    }

    getCategories(){
        return this.axios.get('categories')
    }

    getCategoryFilters(categoryId){
        return this.axios.get(`/category/attributes/filters/${categoryId}`)
    }

    searchProductsOfAnyCategory(searchTerm){
        return this.axios.get(`/products/search/${searchTerm}`)
    }

    getPopularProducts(){
        return this.axios.get('products/popular')
    }

    getGradebooksByUrl(){
        if(store.getters.getNextPageUrl){
            return this.axios.get(store.getters.getNextPageUrl)
        }
        console.log(store.getters.getNextPageUrl)
    }
}                           

export const productsService = new ProductService()