import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUs from './components/AboutUs'

ReactDOM.render(<AboutUs collapse ={false} isWideEnough={false} />, document.getElementById('root'));
