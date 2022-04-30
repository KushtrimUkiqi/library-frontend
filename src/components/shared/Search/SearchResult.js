import React from 'react';
import { Link } from 'react-router-dom';


const SearchResult = ({result}) => {
    return (
        <Link to={result.link} class="ds-dataset-1">
            {result.text}
        </Link>
    );
}

export default SearchResult;
