import React from 'react'

const Comp2 = ({data}) => {
  console.log(data);

  return (
    <div>
      <h1>Comp2 inside Comp1</h1>
      <Comp3 data={data}/>
    </div>
  )
}

export default Comp2