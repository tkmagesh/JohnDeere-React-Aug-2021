const StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined;

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
        const store = { getState, subscribe, dispatch }
        return store;
    }

    return { createStore }

})()