import React from 'react'

export default function SearchInput({placeholder,onKeyUp,onFocus,onBlur}) {
  return (
    <input 
    onKeyUp={onKeyUp}
    onBlur={onBlur} 
    onFocus={(event) => {if(event.target.value.length > 0) onFocus()}}
    type="text" class="form-control ds-input" id="search-input" 
    placeholder={placeholder} 
    autocomplete="off" spellcheck="false" 
    style={{position: "relative", verticalAlign: "top",minWidth: '300px'}}/>
  )
}
