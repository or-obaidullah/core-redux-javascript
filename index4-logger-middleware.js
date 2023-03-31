const { createStore, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

//Product constant
const GET_PRODUCT ="GET_PRODUCT"
const ADD_PRODUCT ="ADD_PRODUCT"



// Product state
const intialProductState = {
    products: ["banana","suger"],
    numberofProduct: 2
     
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



const store = createStore(productReducer, applyMiddleware(logger))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProduct());
store.dispatch(addProduct("apple"));
