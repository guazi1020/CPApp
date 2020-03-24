import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './Equation/showData';
import * as serviceWorker from './serviceWorker';

let app=<App/>
let root=document.getElementById('root')


ReactDOM.render
    (app, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
