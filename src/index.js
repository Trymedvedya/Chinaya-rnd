import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Catalog,Navigation,Logo} from "./App"
 function catalogChaiUrlGenerator() { return("http://95.31.254.175:83/v1/categories/tea"   )};
export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Catalog urlGenerator={catalogChaiUrlGenerator}/>
  
);

const navigation = ReactDOM.createRoot(document.getElementById('navigation'));
navigation.render(
    <Navigation/>
);
const logo = ReactDOM.createRoot(document.getElementById('logo'));
logo.render(
    <Logo/>
);

reportWebVitals();

