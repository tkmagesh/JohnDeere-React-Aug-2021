import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { bindActionCreators } from 'redux';
import store from './store';
import bugActionCreators from './bugs/actions';
import Bugs from './bugs';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
    const bugs = store.getState()
    ReactDOM.render(
        <Bugs bugs={bugs} {...bugActionDispatchers}/>
        , document.getElementById('root')
    )
}
renderApp();
store.subscribe(renderApp);

/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//ES6 Modules
/* 
import * as calc from './calculator';
console.log(calc);
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator'
//const add = calc.add
const { add } = calc;
console.log(add(100,200)) 
*/

/* 
import { add } from './calculator'
console.log(add(100,200))
*/

//import the default exported entitiy
/* 
import currentTime from './calculator'
console.log(currentTime()) 
*/

/* 
import * as calc from './calculator'
console.log(calc);
console.log(calc.default()) 
*/