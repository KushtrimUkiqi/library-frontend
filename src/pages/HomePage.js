import React from 'react'

//state
import { useSelector} from 'react-redux';

//hooks
import {useEffect,useState} from 'react';

//services
import HttpClientService from '../services/HttpClient';

//components
import BooksList from '../components/BooksList';
import AddBook from '../components/AddBook';
import BooksTopBar from '../components/BooksTopBar'
import Pagination from '../components/shared/Pagination/Pagination';

export default function HomePage() {


    const [loading,setLoading] = useState(false);
    const [books,setBooks] = useState([]);
    const [error,setError] = useState({error: false, errorMsg: ''});
    const page = useSelector(state => state.bookPages.currentPage);
    const size = useSelector(state => state.bookPages.pageSize);
    
    async function fetchBooks() {
      setLoading(true);
      HttpClientService
        .fetchBooksWithPagination(page,size)
          .then((response) => {
            setBooks([...response.data.content]);
          })
          .catch(error => {
            let errorState = {
                error: true,
                errorMsg: ''
              }

            if(error.response){
                errorState.errorMsg = errorState.response.data;
            }

            setError(errorState);
          });
      setLoading(false);
    }

    useEffect(() => {
      fetchBooks();
    },[]);

  return (
    <>
    <BooksTopBar></BooksTopBar>
    <AddBook></AddBook>
    <BooksList books={books} error={error} loading={loading}></BooksList>
    <Pagination></Pagination>
    </>
)
}
