import React from 'react';

//hooks
import {useState} from 'react';

//components
import SearchInput from './SearchInput';
import SearchResultContainer from './SearchResultContainer';

export default function Search({placeholder}) {

    const [searchState,setSearchState] = useState(false);
    const [searchResults,setSearchResults] = useState([{text: "Book 1"},{text: "Book 1"},{text: "Book 1"},{text: "Book 1"}]);

    async function search(event)
    { const searchQuery = event.target.value; 
      setSearchState(searchQuery.length > 0);
    }


    function openSearch()
    {
      setSearchState();
    }

    function closeSearch()
    {
      setSearchState(false);
    }

  return (
    <form className="d-flex">
    <span class="algolia-autocomplete algolia-autocomplete-left" style={{position: "relative", display: "inline-block", direction: "ltr"}}>
        <SearchInput
          placeholder={placeholder}
          onKeyUp={search}
          onFocus={openSearch}
          onBlur={closeSearch}>
        </SearchInput>
        <SearchResultContainer searchResults={searchResults} searchState={searchState}> 
        </SearchResultContainer>
    </span>
  </form>
  )
}
