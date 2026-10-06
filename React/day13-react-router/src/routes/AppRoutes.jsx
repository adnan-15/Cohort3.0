import React from 'react'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import About from '../pages/About'
import { Route, Routes } from 'react-router'
import Detail from '../pages/Detail'
import NestedAbout from '../pages/NestedAbout'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="detail" element={<Detail/>}/>
            </Route>
            <Route path="/about" element={<About/>}>
                <Route path="nested" element={<NestedAbout />}/>
            </Route>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes