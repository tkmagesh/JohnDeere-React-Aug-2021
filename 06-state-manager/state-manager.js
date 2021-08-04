const StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION' };

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _subscribers.push(callback);
    }

    //private utility function
    function _notifySubscribers(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        _notifySubscribers();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function') 
            throw new Error('Reducer must be a function!')
        _reducer = reducer;
        //invoke the reducer to initialize the _currentState with a valid default state
        _currentState = _reducer(_currentState, _init_action);
        const store = { getState, subscribe, dispatch }
        return store;
    }

    function bindActionDispatchers(actionCreators, dispatch) {
        const actionDispatchers = {};
        for (let key in actionCreators){
            actionDispatchers[key] = function(...args){
                const action = actionCreators[key](...args)
                dispatch(action);
            };
        }
        return actionDispatchers;
    }

    return { createStore, bindActionDispatchers }

})()