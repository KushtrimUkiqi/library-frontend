import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import categoriesReducer  from './state/Categories';
import bookPagesReducer from './state/BookPages';

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        bookPages: bookPagesReducer
    }   
});

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>    
);

