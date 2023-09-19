import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import PlansAndPricing from './Components/PlansAndPricing';
const App = () => {

  const[isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col '>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plansAndpricing" element={<PlansAndPricing />} />
      </Routes>
    </div>
  )
}

export default App