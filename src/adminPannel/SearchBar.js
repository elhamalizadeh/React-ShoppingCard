//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import {
    InputBase,
    styled,
  } from "@mui/material";

const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    const Search = styled("div")({
        backgroundColor: "white",
        color: "gray",
        padding: "0 10px",
        //borderRadius: theme.shape.borderRadius,
        width: "80%",
        border: "1px solid #000",
        borderRadius: "1em"
        //border: 1rem
});


    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                
                <Search >
            <InputBase placeholder="Search" onChange={handleSearchChange} type="text" id="search"/>
          </Search>
            </form>
        </header>
    )
}
export default SearchBar