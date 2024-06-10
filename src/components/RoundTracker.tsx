import { useState } from 'react'

function RoundTracker() {
    const [roundNum, setRoundNum] = useState(1)

    return (
        <div className="card">
            <label>Round : {roundNum}</label>
            <button className="btn btn-primary" onClick={() => setRoundNum((roundNum) => roundNum + 1)}>
            ⌛
            </button>
      </div>
    )
}

export default RoundTracker