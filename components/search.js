import React from 'react';
import {fetchPosts, searchPosts} from "../store/actions/postActions";
import {useDispatch} from "react-redux";

const Search = () => {
    const dispatch = useDispatch();

    function searchProducts(key, value) {
        dispatch(searchPosts(value));
        dispatch(fetchPosts(value));
    }

    return (
        <div className='search'>
            <div className="container">
                <input
                    type="search"
                    placeholder="издөө"
                    className="navbar__search"
                    onChange={(e) => searchProducts("q", e.target.value)}
                    />
            </div>
        </div>
    );
};

export default Search;