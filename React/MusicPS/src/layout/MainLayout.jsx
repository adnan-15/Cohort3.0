import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import { Auth } from '../context/AuthContext'

const MainLayout = () => {
  const {currentUser} = useContext(Auth)
  return (
    <div className="w-full h-screen">
      {currentUser.role==="artist" && <NavBar/>}    
      <Outlet/></div>
  )
}

export default MainLayout