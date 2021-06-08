import React, { useRef, useState } from 'react'
import Timer from './Timer';

export default function App() {
    let [timings, setTimings] = useState([]);
    let timeRef = useRef();
    return (
        <div className="container">
            <div className="subContainer">
                <div className="fields">
                    <input type="number" ref={timeRef} placeholder="Enter Boiling Timer" />
                    <button onClick={() => addNewTime()}>Start Boiling</button>
                </div>
                <Timer timings={timings} setTimings={setTimings} />
            </div>
        </div>
    )
    function addNewTime() {
        let timingsCpy = [...timings, timeRef.current.value];
        setTimings(timingsCpy);
        timeRef.current.value = "";
    }
}
