import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "react-toastify/dist/ReactToastify.min.css"

const root =createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
     <App />
   </React.StrictMode>
  </Router>



// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
);
