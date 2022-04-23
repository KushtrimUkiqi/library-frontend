import React from 'react';

//hooks
import { useState, useEffect } from 'react';

//services
import HttpClientService from '../services/HttpClient';

//components
import Pagination from '../components/shared/Pagination/Pagination';
import Author from '../components/Author';
import AuthorsTopBar from '../components/AuthorsTopBar';
import AddAuthor from '../components/AddAuthor';


export default function Authors() {
    const [authors,setAuthors] =  useState([]);

    async function fetchAuthors() {
        HttpClientService
          .fetchAuthors()
            .then((response) => {
              setAuthors([...response.data]);
            })
            .catch(error => {
              console.log('error')
            })
      }

      useEffect(()=> {
        fetchAuthors();
      },[]);

  return (
    <>
      <AuthorsTopBar></AuthorsTopBar>
      <div className="container col-10" style={{padding: '3vh 0',height: '600px'}}>
          {authors.map((author,index) => <Author key={index} author={author}></Author>
          )}
      </div>
      {authors.length === 0 && (
      <div className="card">
      <div className="card-header">
        Error
      </div>
      <div className="card-body">
        <p className="card-text">Currently the list of authors is empty, please add new authors.</p>
        <a className="btn btn-primary">Add author</a>
      </div>
      </div>)
      }
      <AddAuthor></AddAuthor>
      <Pagination></Pagination>
    </>
  )
}
