import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';

//hooks
import { useEffect } from 'react';

//api
import  HttpClientService  from './services/HttpClient';

//components
import Nav from './components/shared/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Authors from './pages/Authors';

//stateActions
import {addAllCategories} from './state/Categories';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  async function fetchBooksCategories() {
    HttpClientService
      .fetchCategories()
        .then((response) => {
          dispatch(addAllCategories([...response.data]));
        })
        .catch(error => {
          console.log('error')
        })
  }

  useEffect(() => {
    fetchBooksCategories();
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
            <Route key="books" path="*" element={<HomePage/>}/>
            <Route key="authors" path="authors" element={<Authors/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
