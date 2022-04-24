import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import './index.css';
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path ='/' element={<LandingPage/>} />
        {/* <Route exact path ='/AboutUs' component={aboutTeamPage} />
        <Route exact path ='/signInPage' component={signInPage} />
        <Route exact path ='/signUpPage' component={signUpPage} /> */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
