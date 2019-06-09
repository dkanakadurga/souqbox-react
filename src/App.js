import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';


function App() {
  return (
    <div>
      <Route path = "/" exact component = {AboutUs}/>
      <Route path = "/AboutUs" component = {AboutUs} />
      <Route path = "/HowItWorks" component = {HowItWorks}/>
    </div>
  );
}

export default App;
