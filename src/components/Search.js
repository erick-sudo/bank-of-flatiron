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

function Sortby({sort, setSort, sortBy, setSortBy, sortDirection, setSortDirection}) {
    return (
        <div className="sortby">
            <label>Sort By</label>
            <select value={sortBy} disabled={!sort} className="sort" onChange={(event) => {
                setSortBy(event.target.value)
            }}>
                <option value="category">Category</option>
                <option value="description">Description</option>
            </select>
            <div className="sortstate">
                <input type="checkbox" onChange={(event) => {
                    setSort(event.target.checked)
                }}/>
                <label>Sort</label>
            </div>
            <div className="sortdirection">
                <label>Sort Direction</label>
                <select value={sortDirection} disabled={!sort} className="sortdirection" onChange={(event) => {
                setSortDirection(event.target.value)
            }}>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            </div>
        </div>
    )
}

export {Search, Sortby}