import axios from 'axios'

function getInMemoryBugs(){
    return [
        {id : 100, name : 'InMemory Bug - 1', isClosed: false, createdAt : new Date()},
        {id : 101, name : 'InMemory Bug - 2', isClosed: false, createdAt : new Date()}
    ];
}

function getServerBugs(){
    var p = axios.get('http://localhost:3030/bugs');
    var p2 = p.then(function(response){
        return response.data;
    })
    p2.then(function(bugs){
        console.table(bugs);
    })
    return p2;
}


//using the asyncMiddleware
/* 
function load(){
    return function(dispatch){
        const p = getServerBugs();
        p.then(function(bugs){
            const action = { type : 'BUG_INIT', payload : bugs }
            dispatch(action);
        })
    }
} 
*/

//using the asyncMiddleware
/* function load(){
    return async function(dispatch){
        const bugs = await getServerBugs();
        const action = { type : 'BUG_INIT', payload : bugs }
        dispatch(action);
    }
}
 */


//using the promiseMiddleware
async function load(){
    const bugs = await getServerBugs();
    const action = { type : 'BUG_INIT', payload : bugs }
    return action;
} // returns a promise when resolved will give the action

export default load;