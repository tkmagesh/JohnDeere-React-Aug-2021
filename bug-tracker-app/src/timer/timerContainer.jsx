import Timer from './timer'
import { useState } from 'react';

const TimerContainer = () => {
    const [showTimer, setShowTimer] = useState(true)
    return (
        <div>
            <label>Show Timer :</label>
            <input type="checkbox" checked={showTimer} onChange={ evt => setShowTimer(evt.target.checked)} />
            {showTimer && <Timer/>}
        </div>
    )
}

export default TimerContainer