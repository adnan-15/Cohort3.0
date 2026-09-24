import React, { use, useState } from 'react'

const other = () => {
  const [formData,setFormData] = useState({})

  const handleChange = (e)=>{
    let {name,value} = e.target
    console.log(name,value);
    setFormData({...formData,[name]:value})
  }
  return (
    <div className='flex flex-col gap-5 w-60'>
        <input type="text" name='name' className='border-2' onChange={handleChange} />
        <input type="text" name='password' className='border-2' onChange={handleChange} />
        <input type="text" name='email' className='border-2' onChange={handleChange} />

        <h1>This is name - {formData.name}</h1>
        <h1>This is password - {formData.password}</h1>
        <h1>This is email - {formData.email}</h1>

    </div>
  )
}

export default other