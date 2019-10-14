import React from 'react';

const Search = (props) => {
    return (
        <div >
            <input 
                type="search" 
                id="search"
                placeholder="Search" 
                onChange={props.handleSearch()}
            />
        </div>
    )
}

export default Search;