import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const About = () => {

  let navigate = useNavigate()

  return (
    <div>About
      <button onClick={()=>{navigate("/about/nested")}}>Nested to dikhao</button>
      <Outlet/>
    </div>
  )
}

export default About