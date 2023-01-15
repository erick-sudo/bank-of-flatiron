import React from "react";
import searchIcon from "../gallery/search.png"

function Search({searchString, handleInput}) {
    return (
        <div className="search-bar">
            <input onInput={handleInput} className="search-input" name="search" value={searchString} type="text" placeholder="Search..." />
            <img className="search-icon" src={searchIcon} alt="search"/>
        </div>
    )
}

function Sortby() {
    return (
        <div className="sortby">
            <label>Filter By</label>
            <select className="sort">
                <option value="category">Category</option>
                <option value="description">Description</option>
            </select>
        </div>
    )
}

export {Search, Sortby}