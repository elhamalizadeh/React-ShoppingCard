import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartReducer from './cart/reducer'
import postReducer from "./posts/reducer";

const rootReducer = combineReducers({
    products : productReducer,
    ShoppingCart : cartReducer,
    posts : postReducer
})
export default rootReducer