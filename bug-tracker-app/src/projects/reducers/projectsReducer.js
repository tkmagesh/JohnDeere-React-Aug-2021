const initialState = [
    { id : 10, name : 'Payroll Master' },
    { id : 12, name : 'Bug Tracker' } 
];
function projectsReducer(currentState = initialState, action){
    if (action.type === 'PROJECT_ADD') return [...currentState, action.payload];
    return currentState;
}

export default projectsReducer;