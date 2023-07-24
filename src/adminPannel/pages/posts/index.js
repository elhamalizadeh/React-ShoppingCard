import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setPosts } from "../../../redux/posts/action";
//import { getPosts } from "../adminPannel/api/axios";
//import Header from "../../../components/Header";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../Sidebar";
import { ThemeProvider } from "@emotion/react";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Navbar from "../../Navbar";
import { createTheme } from "@mui/material";
import axios from "axios";
import Posts from "../../../adminPannel/components/Posts";
import Pagination from "../../../adminPannel/components/Pagination";

const FrontPosts = () => {

  ///--------------using redux------------
  // const { posts } = useSelector((state) => state.posts);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

//----------------- using axios---------

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false);
  };

  fetchPosts();
}, []);

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);

//--------------------



  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2}>
            <Sidebar setMode={setMode} mode={mode} />

            <Stack flex={6} direction="row" spacing={2} sx={{ margin: 5 }}>
              {/* <React.Fragment>
                <Paper
                  elevation={3}
                  sx={{ marginRight: "15%", marginLeft: "15%" }}
                >
                  <Box>
                    <div className="row mt-5 g-3">
                      {posts &&
                        posts.map((post) => (
                          <article>
                            <h3>Post ID: {post.id}</h3>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>

                            <Link to={`${post.id}`}>
                              <button className="btn btn-primary">
                                read more
                              </button>
                            </Link>
                          </article>
                        ))}
                    </div>
                  </Box>
                </Paper>
              </React.Fragment> */}

<div className='container mt-3'>
      <h2 className='text-primary mb-3'>My Blog</h2>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
            </Stack>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default FrontPosts;
