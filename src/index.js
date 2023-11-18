import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/styles.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history";



const history = createBrowserHistory({basename:"/2022-2023"});
// const router = () => {<Router/>};

ReactDOM.render(
  <Router basename="/2022-2023" history={history} >
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
