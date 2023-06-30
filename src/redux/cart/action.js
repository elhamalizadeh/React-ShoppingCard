import { ADD_TO_CART , INCREMENT , DECREMENT} from './actionType';


export const AddToCart = (product) =>{
    return{
        type: ADD_TO_CART ,
        payload: product
    }
}

export const Increment = (productId) =>{
    return{
        type: INCREMENT ,
        payload: productId
    }

}

export const Decrement = (productId) =>{
    return{
        type: DECREMENT ,
        payload: productId
    }

}