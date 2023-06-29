import { ADD_TO_CART } from './actionType'
const initialState ={
    cart:[]
};

const cartReducer = (state = initialState , action) =>{
    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cart : [...state.cart ,{...action.payload , qty:1} ]
            }
        default:
            return state
    }
}

export default cartReducer;
