import React, { useEffect } from 'react'

export default function EachTime({ index, timings, setTimings }) {
    useEffect(() => {
        let timer = setInterval(() => {
            if (timings[index] === 0) return;
            let timingCpy = [...timings];
            timingCpy[index]--;
            setTimings(timingCpy);
        }, 1000)
        return (() => {
            clearInterval(timer);
        })
         // eslint-disable-next-line 
    }, [timings])
    return (
        <div className="eachTime">
            {timings[index]}
        </div>
    )
}
