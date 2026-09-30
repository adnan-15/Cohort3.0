import React from 'react'
import Form from "./components/Form";
import RHF from "./components/RHF";

const App = () => {
  console.log("app rendering....");

  // let inputRef = useRef();
  
  return (
    <>
    <div className='h-screen p-5 bg-gray-300 w-full'>
      <h1 className='mb-8'>
        Hey this is App
      </h1>
      {/* <Form/> */}
      <RHF/>
    </div>
    </>
  )
}

export default App