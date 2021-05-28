import React from 'react';

const Search = () => {

    const add = (e: React.KeyboardEvent) => {
        const target = e.target as HTMLTextAreaElement;
        console.log(target.value);
    }
    return (
        <div className="search">
            <input type="text" placeholder="What needs to be done?" onKeyDown={add}></input>
        </div>
    );
};

export default Search;