import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './component/app/App';
import {SquareParent} from './component/app/App';
import reportWebVitals from './reportWebVitals';
import { Camera } from './component/app/App';
import { Invoi } from './component/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Invoi></Invoi>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
