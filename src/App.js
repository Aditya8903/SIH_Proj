import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import PlansAndPricing from './Components/PlansAndPricing';
import HowItWorks from './Components/HowItWorks';
import NewCertificate from './Components/NewCertificate';
import ExsistingCertificate from './Components/ExsistingCertificate';
import Footer from './Components/footer';
import VerifyCertificate from './Components/VerifyCertificate';
import FreeTrial from './Components/FreeTrial';
import FreeTrialForm from './Components/FreeTrialForm';
import ContactUs from './Components/ContactUs';
import ComplaintForm from './Components/ComplaintForm';
import About from './Components/About';
import FeedbackForm from './Components/FeedbackForm';
import VerifyForm from './Components/VerifyForm';
const App = () => {

  const[isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen  flex flex-col '>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/PlansAndPricing" element={<PlansAndPricing />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/ExsistingCertificate" element={<ExsistingCertificate />} />
        <Route path="/NewCertificate" element={<NewCertificate />} />
        <Route path="/VerifyCertificate" element={<VerifyCertificate />} />
        <Route path="/FreeTrial" element={<FreeTrial />} />
        <Route path="/FreeTrialForm" element={<FreeTrialForm />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ComplaintForm" element={<ComplaintForm />} />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<VerifyForm />} />
      </Routes>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default App