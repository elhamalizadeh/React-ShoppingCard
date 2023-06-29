import { ADD_TO_CART } from './actionType'
const initialState ={
    cart:[]
};

const cartReducer = (state = initialState , action) =>{
    switch (action.type){
        case ADD_TO_CART:
            const hasProduct = state.cart.find(p=>p.id === action.payload.id) ? true : false;
            state.cart = hasProduct ? state.cart.map(p =>p.id === action.payload.id ? {...p, qty : p.qty+1}:p) : [...state.cart , {...action.payload , qty:1 }];
            return{
                ...state,
                cart : state.cart
            }
        default:
            return state
    }
}

export default cartReducer;