import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer'

/* function loggerMiddleware(store){
    console.log('[@loggerMiddleware] triggered')
    return function(next){
        console.log('[@loggerMiddleware] next middleware configured with next -> ', next.name)
        return function(action){
            console.log('[@loggerMiddleware] action dispatched -> ', action);
            console.group(action.type);
            console.log('Before ', store.getState())
            console.log(action)
            next(action)
            console.log('After ', store.getState())
            console.groupEnd();
        }
    }
}

function dummyMiddleware(store){
    console.log('[@dummyMiddleware] triggered')
    return function dummyNext(next){
        console.log('[@dummyMiddleware] next middleware configured with next -> ', next.name)
        return function dummyNext(action){
            console.log('[@dummyMiddleware] action dispatched -> ', action);
            next(action)
        }
    }
} */

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('Before ', store.getState())
    console.log('Action ', action)
    next(action)
    console.log('After ', store.getState())
    console.groupEnd();
};

/* const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch, store.getState)
    }
    return next(action)
} */

const asyncMiddleware = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function'){
        return action(dispatch, getState)
    }
    return next(action)
}

const promiseMiddleware = store => next => async action => {
    if (action instanceof Promise){
        const actionObj = await action;
        return next(actionObj)
    } else {
        return next(action);
    } 
}

const rootReducer = combineReducers({
    bugState :  bugsReducer,
    projectState : projectsReducer
});

/* const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware)); */
const store = createStore(rootReducer, applyMiddleware(thunk, promiseMiddleware)); 

export default store;