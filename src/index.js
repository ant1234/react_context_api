import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureProductStore from './hooks-store/products-store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

configureProductStore();

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  );
