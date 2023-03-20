import React, { useState } from 'react'

function Counter3() {
    const [counter, setCounter] = useState(0)
    const anyStyle={backgroundColor:`rgb(${counter*20},${counter*10},${counter+100})`}
    return (
        <div>
            <button onClick={()=>setCounter((counter+1) %10)}>add1</button>
            {counter}
        </div>
    )
}
export default Counter3