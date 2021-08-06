const initialState = [
    { id : 'P101', name : 'Payroll Master' },
    { id : 'P102', name : 'Bug Tracker' } 
];
function projectsReducer(currentState = initialState, action){
    if (action.type === 'PROJECT_ADD') return [...currentState, action.payload];
    return currentState;
}

export default projectsReducer;