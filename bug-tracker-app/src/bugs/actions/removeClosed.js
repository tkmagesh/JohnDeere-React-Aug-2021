//import bugApi from '../services/bugApi'
import remove from './remove';

function removeClosed(){
    return function(dispatch, getState){
        const bugs = getState().bugState;
        const bugsToRemove = bugs.filter(bug => bug.isClosed)
        bugsToRemove.forEach(function(closedBug){
            remove(closedBug)(dispatch)
        });
    }
}
export default removeClosed;