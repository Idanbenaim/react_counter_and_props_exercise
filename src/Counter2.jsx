import React from 'react'

function Counter() {
    let cntr = 0
    const addOne = () => {
        cntr++
        console.log(cntr)
    }
    return (
        <div>
            <button onClick={()=>addOne()}>add</button>
            {cntr}
        </div>
    )
}

export default Counter