import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='p-2 '>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App