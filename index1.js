// state - count: 0
//action - increment, decrement, reset
//reducer
//store- dispatch

const { createStore } = require("redux")

//Constant
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'


// state - count: 0
const initialCounterState = {
    count:0
    // amount:0
}



//action - increment, decrement, reset
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
}
const resetCounterAction = () => {
    return {
        type: RESET
    }
}
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload:value
    }
}

//creating reducer - do accept state,action 
const counterReducer = (state=initialCounterState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count +1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count -1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
    
        default:
            state;
    }
}

//store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));