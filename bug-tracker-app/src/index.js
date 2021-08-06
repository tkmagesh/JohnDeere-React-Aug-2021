import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import store from './store';
import Bugs from './bugs'; 
import Projects from './projects';
import App from './App';
import TimerContainer from './timer/timerContainer'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Bug Tracker</h1>
      <TimerContainer/>
      <Router>
        <hr/>
        <div>
          <span> [ <Link to="/">Home</Link> ] </span>
          <span> [ <Link to="/projects">Projects</Link> ] </span>
          <span> [ <Link to="/bugs">Bugs</Link> ] </span>
        </div>
        <hr/>
        <Switch>
          <Route path="/bugs" component={Bugs}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/" component={App}/>
        </Switch>
      </Router>  
    </div>
  </Provider>
    , document.getElementById('root')
);

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