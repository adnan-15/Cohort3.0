import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {

  console.log("Public Route Rendering");

  const {loginUser} = useContext(Auth)

  if(loginUser?.role==="listener") return <Navigate to={"/main"} replace/>
  if(loginUser?.role==="artist") return <Navigate to={"/artist"} replace/>
  
  return (
    <Outlet/>
  )
}

export default PublicRoute