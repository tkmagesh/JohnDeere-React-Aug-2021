function removeClosed(bugs /* TO BE FIXED. Explore how to access the store state in the action creator */){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed)
    const action= { type : 'BUG_INIT', payload : bugsToRetain}
    return action;
}
export default removeClosed;