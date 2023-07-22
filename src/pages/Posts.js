import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setPosts } from "../redux/posts/action";
//import { getPosts } from "../adminPannel/api/axios";
import Header from "../components/Header";
import { useEffect } from "react";

const FrontPosts = () => {
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Box>
      <Typography variant="h3">Posts List</Typography>
        <Stack direction="row" spacing={2}>
          <Box flex={10} p={2}>
            <div className="container">
              <div className="row mt-5 g-3">
                {posts && posts.map(
                    post => (
                        <div className="col-md-3" key={post.id} >
                        <div className="card">
                        <div className="card-body">
                    <h5>{post.title}</h5>
                    </div>
                    </div></div>
                    )
                    
                    )}
              </div>
            </div>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
export default FrontPosts;
