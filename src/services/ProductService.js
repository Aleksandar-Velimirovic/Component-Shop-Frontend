import { HttpService } from './HttpService'

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

    searchProductsOfAnyCategory(searchTerm, filters = []){
        console.log(filters)
        return this.axios.get(`/products/search/${searchTerm}`, {
            params: {
                filters: filters
            }
        })
    }

    getPopularProducts(){
        return this.axios.get('products/popular')
    }
}                           

export const productsService = new ProductService()