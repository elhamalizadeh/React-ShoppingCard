import { SET_POSTS , SET_ERROR} from "./actionType";
import axios from "axios"

export const setPosts = (posts) =>{
    return {
        type: SET_POSTS ,
        payload: posts
    }

}

// -----------------use axios in redux---------------

export const fetchPosts = () => {
    return function(dispatch){
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(setPosts(data))
            //dispatch(SET_ERROR(null))
            console.log(data)
        }).catch(err=>{
             dispatch(SET_ERROR(err.message))
            console.log("error dare")
        })
    }


}