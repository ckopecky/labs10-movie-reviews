import React from 'react';
import './Hero.css';

const SearchQueryHeader = (props) => {
    const searchResultsLength = () => {
        return props.searchResults.length  === 1 ? 
            <div>
                {`  (${props.searchResults.length } result)`}
            </div>    
        :
        
        props.searchResults.length === 0 ?
            <div></div>
        :
            <div> 
                {`  (${props.searchResults.length } results)`}
            </div>
    }
    return (
        <h1 className="search-h1">
            <div className="search-results-query">
                  <h5 className="search-label">{props.searchResults.length > 0 ? "Search Results for:": ""}</h5> 
                  <div className="search-results-length">
                    <h5 className="query"> {`${props.searchInput}`}</h5>
                    <h5 className="result-length">{searchResultsLength()}</h5>
                  </div>
            </div>
        </h1>
    );
};

export default SearchQueryHeader;