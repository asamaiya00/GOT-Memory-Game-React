import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Axios from 'axios';

require('dotenv').config();
Axios.defaults.baseURL = process.env.REACT_APP_API;

ReactDOM.render(<App />, document.getElementById('root'));
