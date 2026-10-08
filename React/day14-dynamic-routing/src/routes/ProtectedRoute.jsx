import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    let Admin = false;

    if(!Admin){
        console.log("hy i am running ");
        alert("you are not admin")
        return <Navigate to={"/"}/>
    }
  return children
}

export default ProtectedRoute