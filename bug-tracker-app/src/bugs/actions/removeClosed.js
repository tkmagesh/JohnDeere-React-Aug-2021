function removeClosed(){
    return function(dispatch, getState){
        const bugs = getState().bugState;
        const bugsToRetain = bugs.filter(bug => !bug.isClosed)
        const action= { type : 'BUG_INIT', payload : bugsToRetain}
        dispatch(action);
    }
}
export default removeClosed;