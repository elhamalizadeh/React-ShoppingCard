import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Header from "../../components/Header";

const ShowPost = () =>{

    const { id } = useParams();
    const [post,setPost] = useState(null);
    const [error, setError ] = useState(null)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>res.json())
        .then( data=>
            setPost(data)
            ).catch(err=>{
                setError(err.message)
            })
    })
    return (
        <>
  <Header />
<Box>
        <Stack direction="row" spacing={2}>
          <Box flex={10} p={2}>
            <div className="container">
              <div className="row mt-5 g-3">
              <Typography variant="h4">Post Details</Typography>
              {post && <div><h4> {post.id}-{post.title}</h4>
        <h6>{post.body}</h6></div>}
              </div>
            </div>
          </Box>
        </Stack>
      </Box>

        </>
    )
}

export default ShowPost;