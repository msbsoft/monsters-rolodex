import React from "react"
import "./search-box.style.css"

/* Note: We are destructuring props object within the arrow function */
const SearchBox = ({placeHolder, handleSearch}) => {

    return (
        <input 
            className="search"
            type="search" 
            onChange={handleSearch} 
            placeholder={placeHolder}/>
    )
}

export default SearchBox;

