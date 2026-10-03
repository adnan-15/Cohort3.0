import React from 'react'
const Comp3 = ({data}) => {
  console.log(data);

  return (
    <div>
      <h1>COmp3</h1>
      <Comp4 data={data}/>
      
    </div>
  )
}

export default Comp3