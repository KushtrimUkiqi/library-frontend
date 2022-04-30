import React from 'react';

// components
import SearchResult from './SearchResult';

export default function SearchResultContainer({searchResults,searchState}) {
  return (
    <span class="ds-dropdown-menu ds-with-1" role="listbox" id="algolia-autocomplete-listbox-0" 
    style={{minWidth: '300px',backgroundColor: "white",position: "absolute", top: "115%", zIndex: 100,flexDirection: "column",right: "0px", display: searchState ? "flex" : "none"}}>
      {
          searchResults.map((value,index) => <SearchResult result={{link: '' ,text: value.text}}></SearchResult>)
      }
    </span>
  )
}
