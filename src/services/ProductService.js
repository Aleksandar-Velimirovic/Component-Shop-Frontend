import { HttpService } from './HttpService'

export class ProductService extends HttpService {
    
    getProductsByCategory(categoryId, filters = []){
        return this.axios.get(`/products/category/${categoryId}`, {
            params: {
                filters: filters
            }
        })
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
}                           

export const productsService = new ProductService()