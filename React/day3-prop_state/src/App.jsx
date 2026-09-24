import React, { useState } from 'react'

const App = () => {
  let [count , setCount ] = useState(0);
  let [flag,setFlag] = useState(true);
  console.log(flag);
  console.log(count);
  
  
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setFlag(false)}}>chagne boolean</button>
    </div>
  )
}

export default App