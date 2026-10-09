import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const MainLayout = () => {
  const {setloggedInUser} = useContext(Auth)

  const logout=()=>{
    toast.success("User logout successfully")
    setloggedInUser()
    localStorage.removeItem("loggedInUser")
  }
  return (
    <div>
        <h1>This is main layout</h1>
        <button className='text-white bg-red-600 p-2 text-xl cursor-pointer' onClick={()=>{logout()}}>LOGOUT</button>
    </div>
  )
}

export default MainLayout