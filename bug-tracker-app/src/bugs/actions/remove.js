import bugApi from '../services/bugApi'

/* async function remove(bugToRemove){
    await bugApi.remove(bugToRemove)
    const action = { type : 'BUG_REMOVE', payload : bugToRemove}
    return action;
} */

function remove(bugToRemove) {
    return async function(dispatch){
        await bugApi.remove(bugToRemove)
        const action = { type : 'BUG_REMOVE', payload : bugToRemove}
        dispatch(action);
    }
}
export default remove;