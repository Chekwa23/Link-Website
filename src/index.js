import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import PrivacyPolicyPage from './PrivacyPolicyPage.js';
import TermsOfServicePage from './TermsOfServicePage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path ='/' element={<LandingPage/>} />
        <Route path ='/privacy-policy' element={<PrivacyPolicyPage/>} />
        <Route path ='/terms-of-service' element={<TermsOfServicePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
