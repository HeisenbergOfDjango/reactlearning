import React, { useState } from 'react'

const Counter = () => {

    const [initialValue, setValue] = useState(0)

    const increment = () =>{
        setValue(initialValue + 1)
    }
  return (
    <div>
      <h5>Count : {initialValue}</h5>
      <button onClick={increment}>add 1</button>
    </div>
  )
}

export default Counter
