import { useState, useEffect } from 'react';

const Timer = () => {
    const [ currentTime, setCurrentTime ] = useState((new Date()).toString())
    useEffect(() => {
        //this function is invoked whenever the component is initialize / updated
        console.log('component intialized/updated')
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toString())
        }, 1000)
        return () => {
            //this function is invoked whenever the component is unmount
            console.log('Timer unmounted');
            clearInterval(timerId)
        };
    }, [/* list the variables which when changed we want the function to executed */])
    return (
        <>
        <div>Time : </div>
        <div>{currentTime}</div>
        </>
    )
}

export default Timer;