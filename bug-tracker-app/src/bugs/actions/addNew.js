import bugApi from '../services/bugApi'

async function addNew(bugName, projectId){
    const newBugData = {
        id : 0,
        name : bugName,
        isClosed : false,
        createdAt : new Date(),
        projectId : projectId
    };
    const newBug = await bugApi.save(newBugData);
    const action = { type : 'BUG_ADD', payload : newBug };
    return action; //to be processed by the promiseMiddleware
}

export default addNew;