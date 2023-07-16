import { getPosts } from "../adminPannel/api/axios";
import { useState, useEffect } from "react";
import SearchBar from "../adminPannel/components/search/SearchBar";
import ListPage from "../adminPannel/components/search/ListPage";
import "../adminPannel/components/search/index.css";
import { Box } from "@mui/material";

const SearchPage = () =>{
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      getPosts().then((json) => {
        setPosts(json);
        setSearchResults(json);
      });
    }, []);


    return(
        <Box flex={4} p={2}>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </Box>
    )
}
export default SearchPage;