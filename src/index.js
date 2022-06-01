import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Navigation,Logo} from "./App"
import {renderCatalogChai} from "./catalog"


export const root = ReactDOM.createRoot(document.getElementById('root'));
renderCatalogChai()

const navigation = ReactDOM.createRoot(document.getElementById('navigation'));
navigation.render(
    <Navigation/>
);
const logo = ReactDOM.createRoot(document.getElementById('logo'));
logo.render(
    <Logo/>
);

reportWebVitals();

