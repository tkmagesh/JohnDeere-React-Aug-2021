export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

function getCurrentTime(){
    return new Date();
}

//There can be ONLY ONE default export in a file
export default getCurrentTime;

