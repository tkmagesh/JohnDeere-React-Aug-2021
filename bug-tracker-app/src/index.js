import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { bindActionCreators } from 'redux';
import store from './store';
 
import bugActionCreators from './bugs/actions';
import Bugs from './bugs'; 


import projectActionCreators from './projects/actions'
import Projects from './projects';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);

function renderApp(){
    
    const storeState = store.getState()
    const bugs = storeState.bugState;
    const projects = storeState.projectState

    ReactDOM.render(
      <div>
        <Projects projects={projects} {...projectActionDispatchers}/>
        <Bugs bugs={bugs} {...bugActionDispatchers}/>
      </div>
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