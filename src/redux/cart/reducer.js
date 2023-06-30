import { ADD_TO_CART , INCREMENT , DECREMENT , DELETEPRODUCT, CLEARCART } from './actionType'
const initialState ={
    cart:[]
};

const cartReducer = (state = initialState , action) =>{
    switch (action.type){
        case ADD_TO_CART:
            const hasProduct = state.cart.find(p=>p.id === action.payload.id) ? true : false;// if product id exist in cart
            state.cart = hasProduct ? state.cart.map(p =>p.id === action.payload.id ? {...p, qty : p.qty+1}: p ) : [...state.cart , {...action.payload , qty:1 }];
            return{
                ...state,
                cart : state.cart
            }

            case INCREMENT:
                state.cart =  state.cart.map(p =>p.id === action.payload ? {...p, qty : p.qty+1}: p );
                return{
                    ...state,
                    cart : state.cart
                }

                case DECREMENT:
                    const product = state.cart.find(p =>p.id === action.payload);
                    // if (product.qty > 1 ){
                    //     state.cart =  state.cart.map(p =>p.id === action.payload ? {...p, qty : p.qty-1}: p );
                    // }else{
                    //     state.cart =  state.cart
                    // }

                    state.cart = product.qty > 1 ? state.cart.map(p =>p.id === action.payload ? {...p, qty : p.qty-1}: p ):  state.cart;
                return{
                    ...state,
                    cart : state.cart
                }

                case DELETEPRODUCT:
                    state.cart = state.cart.filter(p => p.id !== action.payload )
                    return{
                        ...state,
                        cart : state.cart
                    }

                case CLEARCART:
                    //state.cart = state.cart.clear()
                    return{
                        ...state,
                        cart : []
                    }
        default:
            return state
    }
}

export default cartReducer;
