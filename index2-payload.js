const { createStore } = require("redux")

const ADD_USER = 'ADD_USER'

const initialUser = {         //state
    users: ["Abir"],
    count:1

}

const incrementUser = (user) => {     //action
    return {
        type: ADD_USER,
        payload:user
    }
}

const countUser = (state=initialUser, action) =>{     //reducer
    switch (action.type) {
        case ADD_USER:
            return {
                users:[...state.users, action.payload],
                count: state.count + 1
            }
    
        default:
            break;
    }
}

//store
const store = createStore(countUser);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementUser("kobir"));
store.dispatch(incrementUser("Rakib"));