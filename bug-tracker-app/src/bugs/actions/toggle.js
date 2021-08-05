function toggle(bugToToggle){
    const toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed}
    const action = { type : 'BUG_UPDATE', payload : toggledBug}
    return action;
}

export default toggle;