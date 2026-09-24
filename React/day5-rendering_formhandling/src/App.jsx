import React from 'react'
import { useState } from 'react';
const App = () => {
  console.log("App resdering");
  
  const [count , setCount ] = useState(0)
  const [user,setUser] = useState({
    name:"Adnan"
  })
  return (
    <div>
      <h1>count is - {count}</h1>
      <h1>name is - {user.name}</h1>
      <button onClick={()=>{setCount(count+1)}}>count</button>
      <button onClick={()=>{user.name="usman khan"}}>name change</button>
    </div>
  )
}

export default App