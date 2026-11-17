import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const ProtectedRoute = () => {

  const {loginUser} = useContext(Auth)

  if(!loginUser) return  <Navigate to={"/"} replace/>
  if(loginUser?.role==="artist") return <Navigate to={"/main/artist"} replace/>

  return (
    <Outlet/>
  )
}

export default ProtectedRoute