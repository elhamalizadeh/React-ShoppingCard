import { Box } from "@mui/material";
import Post from "./Post";

import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'
import './index.css';


const FeedPage = () =>{

  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])

    return(
        <Box flex={4} p={2} >
           
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    
          {/* <Post />
          <Post />
          <Post /> */}
        </Box>
    )
}
export default FeedPage;