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
}

function load(){
    const bugs = getInMemoryBugs();
    const action = { type : 'BUG_INIT', payload : bugs }
    return action;
}

export default load;