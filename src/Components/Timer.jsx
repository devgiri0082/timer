import React from 'react'
import EachTime from './EachTime'

export default function Timer({ timings, setTimings }) {
    return (
        <div className="times">
            {timings.map((elem, index) => {
                return <EachTime index={index} timings={timings} setTimings={setTimings} />
            })}
        </div>
    )
}
