import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes/routes.js';



const App = ()=>{
  return (
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));