import React from 'react'
import Select from 'react-select'
import { useState } from 'react'

//stateActions
import { useSelector,useDispatch } from 'react-redux';
import { setPageSize } from '../state/BookPages';

export default function BooksTopBar({categories}) {
  
  const categoriesList = useSelector((state) => state.categories.value.length > 0 ? 
                                                state.categories.value 
                                                  .map((element) => {
                                                    return {
                                                      value: element,
                                                      label: element
                                                    }
                                                  }) :
                                                  []
                                                  );
  const dispatch = useDispatch();

  const [selectedCategories,setSelectedCategories] = useState([{}]);
  const [selectedPageSize,setSelectedPageSize] = useState(useSelector(state => 
    state.bookPages.pageSize));

  const pageSizeList = [{value: 12 , label: '12'},{value: 24 , label: '24'},{value: 36 , label: '36'}];

  return (
    <div className='container col-10' style={{display: 'flex',paddingTop: '2vh',alignItems: 'flex-end',justifyContent: 'space-between',borderBottom: '1px solid gray',paddingBottom: '7px'}}>
        <button className='btn col-2' style={{height: '42px',color: 'white',backgroundColor: 'rgba(2,18,43,255)',borderColor: 'rgba(2,18,43,255)'}} data-bs-toggle="modal" data-bs-target="#addBook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add new book
        </button>
        <div style={{width: '700px', height: '42px',padding: 0}}>
        <Select 
        onChange={setSelectedCategories}
        loseMenuOnSelect={false}
        isMulti
        options={categoriesList}
        placeholder='Select one or multiple book categories'
        />
        </div>
        <div style={{width: '100px', height: '42px'}}>
        <Select placeholder='Show'
        defaultValue={pageSizeList.find(x => x.value === selectedPageSize)}
        onChange={change => {setSelectedPageSize(change); dispatch(setPageSize(change.value));}}
        options={pageSizeList}
        />
        </div>
</div>
  )
}
