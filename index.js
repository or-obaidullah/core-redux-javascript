const { createStore, combineReducers } = require("redux")
//Multiple reducer

//Product constant
const GET_PRODUCT ="GET_PRODUCT"
const ADD_PRODUCT ="ADD_PRODUCT"

//Cart constant
const GET_CART_ITEMS ="GET_CART_ITEMS"
const ADD_TO_CART="ADD_TO_CART"

// Product state
const intialProductState = {
    products: ["banana","suger"],
    numberofProduct: 2
     
}
// Cart state
const intialCartState = {
    products: ["banana"],
    numberofProduct: 1
     
}

//Product actions
const getProduct = () =>{
    return {
        type: GET_PRODUCT
    }
}
const addProduct = (product) =>{
    return {
        type: ADD_PRODUCT,
        payload:product
    }
}
//Product actions
const getCart = () =>{
    return {
        type: GET_CART_ITEMS
    }
}
const addCart = (product) =>{
    return {
        type: ADD_TO_CART,
        payload:product
    }
}


//Product Reducer
const productReducer = (state=intialProductState, action) =>{
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberofProduct: state.numberofProduct + 1
            }
    
        default:
            return state;
    }
}

//Cart Reducer
const cartReducer = (state=intialCartState, action) =>{
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_TO_CART:
            return {
                products: [...state.products, action.payload],
                numberofProduct: state.numberofProduct + 1
            }
    
        default:
            return state;
    }
}

//Combine
const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})
const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProduct());
store.dispatch(addProduct("apple"));


store.dispatch(getCart());
store.dispatch(addCart("apple"));