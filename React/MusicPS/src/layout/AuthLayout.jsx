import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const AuthLayout = () => {

  const {currentUser} = useContext(Auth)
  
  if(currentUser) return <Navigate to={`${currentUser.role==="listener"?"/main":"/main/artist"}`} replace/>
  return (
    <Outlet/>
  )
}

export default AuthLayout