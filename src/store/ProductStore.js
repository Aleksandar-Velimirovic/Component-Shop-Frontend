import { productsService } from "../services/ProductService";

export const ProductStore = {
    state:{
        products: [],
        searchedProducts: [],
        filters: [],
        category_id:null,
        categories: [],
        searchTerm: localStorage.getItem('searchTerm'),
        categoryTitle: '',
        cartItems: JSON.parse(localStorage.getItem("products")) ?? [],
        numberOfItemsInCart: localStorage.getItem('numberOfItemsInCart'),
        hasUserOrdered: localStorage.getItem('hasUserOrdered')
    },

    mutations:{

        setProducts(state, products){
            state.products = products
        },
    
        setCategoryId(state, id){
            state.category_id = id;
        },
    
        setFilters(state, filters){
            state.filters = filters.map(filter => {
                filter.items = filter.items.map(item => {
                    return {
                        'value' : item,
                        'checked': 0
                    }
    
                })
                return filter
            })
        },

        setSearchedProducts(state, products){
            state.searchedProducts = products
        },

        setSearchTerm(state, term){
            localStorage.setItem('searchTerm', term)
            state.searchTerm = term
        },

        setSearchedProductsCategories(state, categories){
            var newArray = [];
            var lookupObject  = {};
  
            for(var i in categories) {
                lookupObject[categories[i]['product_category_name']] = categories[i];
            }
  
            for(i in lookupObject) {
                newArray.push(lookupObject[i]);
            }

            state.categories = newArray
        },

        setCategoryTitle(state, title){
            state.categoryTitle = title
        },

        setCartItems(state, item){
            if(item == null){
                state.cartItems = []
                state.numberOfItemsInCart = 0
                localStorage.removeItem('products')
                localStorage.removeItem('numberOfItemsInCart')
            }else{
                state.cartItems.push(item)
                localStorage.setItem('products', JSON.stringify(state.cartItems))
                state.numberOfItemsInCart = state.cartItems.length
                localStorage.setItem('numberOfItemsInCart', state.cartItems.length)
            }
        },

        removeItemFromCart(state,item){
            const index = state.cartItems.indexOf(item)

            state.cartItems.splice(index, 1)

            localStorage.setItem('products', JSON.stringify(state.cartItems))

            state.numberOfItemsInCart = state.cartItems.length
            
            localStorage.setItem('numberOfItemsInCart', state.cartItems.length)
        },

        setHasUserOrdered(state, bool){
            state.hasUserOrdered = bool
            localStorage.setItem('hasUserOrdered', state.hasUserOrdered)
        }
    },

    actions:{

        async getProductsByCategory(context, params){
            let response = await productsService.getProductsByCategory(params.filters, params.categoryId)
            context.commit('setProducts', response.data)

        },

        async getCategoryFilters(context, categoryId){
            let response = await productsService.getCategoryFilters(categoryId)
            context.commit('setFilters', response.data)
        },

        async searchProductsOfAnyCategory(context, params){
            let response = await productsService.searchProductsOfAnyCategory(params.searchTerm, params.filters)
            context.commit('setSearchedProducts', response.data)
            
            context.commit('setSearchedProductsCategories', response.data.map(component => {
                return component.category
            }))
        },

        async getCategory(context, categoryId){
            let response = await productsService.getCategoryTitle(categoryId)
            context.commit('setCategoryTitle', response.data)
        },

    },

    getters:{
        getFilters(state){
            return state.filters
        },

        getSearchedProductsCategories(state){
            return state.categories
        },

        getSearchTerm(state){
            console.log(state.searchTerm)
            return state.searchTerm
        },

        getSearchedProducts(state){
            return state.searchedProducts
        },

        getProducts(state){
            return state.products
        },

        getCategoryId(state){
            return state.category_id
        },

        getCategoryTitle(state){
            return state.categoryTitle
        },

        getCartItems(state){
            return state.cartItems
        },

        getNumberOfItemsInCart(state){
            return state.numberOfItemsInCart
        },

        getHasUserOrdered(state){
            return state.hasUserOrdered
        }
    }
}