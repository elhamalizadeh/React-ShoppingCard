import { SET_POSTS , SET_ERROR} from "./actionType";
import axios from "axios"

export const setPosts = (posts) =>{
    return {
        type: SET_POSTS ,
        payload: posts
    }

}

export const setError = (err) =>{
    return {
        type: SET_ERROR ,
        payload: err
    }

}

export const fetchPosts = () => {
    return function(dispatch){
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(setPosts(data))
            console.log(data)
        }).catch(err=>{
             dispatch(setError(err.message))
            console.log("error dare")
        })
    }


}