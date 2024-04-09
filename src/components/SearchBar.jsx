import React from 'react'
import './css/searchbar.css'

const SearchBar = () => {
    return (
        <>
            <div className="search_container  search_container_2">
                <div className="searchBar">
                    <p><img src="/assets/icons/label-text.png" alt="" /> </p>
                    <img className='searchIcon' src="/assets/icons/leading-icon.png" alt="" />
                    <input type="text" placeholder='Search by profile, setting, artifact etc...' />
                    <img className='cancelIcon' src="/assets/icons/trailing-icon.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default SearchBar