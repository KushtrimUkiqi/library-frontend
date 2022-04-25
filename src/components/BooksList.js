import React from 'react';

//hooks
import {useState} from 'react';

//components
import NotFound from './shared/NotFound';
import Loading from './shared/Loading/Loading';
import Book from './Book';
import LoanBook from './LoanBook';
import ReturnBook from './ReturnBook';
import EditBook from './EditBook';

export default function BooksList({books,error,loading}) {

  const [book,setBook] = useState({});
  const [bookState,setBookState] = useState({id: 0,bookName: '',author: ''});
  const [displayLoanBookModal,setDisplayLoanBookModal] = useState(false);
  const [displayReturnBookModal,setDisplayReturnBookModal] = useState(false);


  function loanBook(id,name,author)
  {
    setDisplayLoanBookModal(true);
    setBookState({id: id,bookName: name,author: author})
    console.log(id,name,author)
  }

  function returnBook(id,name,author)
  {
    setDisplayReturnBookModal(true);
    setBookState({id: id,bookName: name,author: author})
    console.log(id,name,author)
  }

  function editBook(bookToEdit)
  {
    setBook(bookToEdit);
  }

  return (
    <>
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',minHeight: '75vh'}}>
    {books.length > 0 && (
    <div className="container col-10" style={{padding: '3vh 0'}}>

        <div  style={{display: 'grid',gridTemplateColumns: 'auto auto auto auto',alignItems: 'center',justifyContent: 'space-evenly',rowGap: '15px'}}>
          {books.map((book,index) => <Book key={index} book={book} loanBook={loanBook} returnBook={returnBook} editBook={editBook}></Book>
          )}
        </div>
    </div>)}

        {loading && <Loading></Loading>}

        {books.length === 0 && error && loading === false &&
          <NotFound title={'No books are found!'} message={'Please add new books'}>
          </NotFound>
        }
    </div>

    <EditBook book={book}></EditBook>

    <LoanBook book={bookState}></LoanBook>

    <ReturnBook book={bookState}></ReturnBook>
    </>
  )
}
