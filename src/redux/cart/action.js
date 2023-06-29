import { ADD_TO_CART } from './actionType'
export const AddToCart = (product) =>{

    return{
        type: ADD_TO_CART ,
        payload: product
    }
}