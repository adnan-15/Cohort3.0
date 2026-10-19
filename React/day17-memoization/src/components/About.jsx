import React from 'react'

const About = ({users}) => {
    console.log("About rendering");
    
  return (
    <div>About</div>
  )
}

export default React.memo(About,(prevValue,nextValue)=>{
    return prevValue.users.id === nextValue.users.id;
})