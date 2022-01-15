import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './default.css';

const app = (
  <BrowserRouter basename="/Exams">
    <App />
  </BrowserRouter>
);

ReactDOM.render( app, document.getElementById('root')
);

