import React, { useState } from 'react';
import logo from "../assets/Certifyit_logo.png";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  // State to manage the active link
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Function to clear the active link (remove underline)
  const clearActiveLink = () => {
    setActiveLink('');
  };

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img src={logo} alt="logo" width={200} height={40} loading='lazy' className='' />
      </Link>

      <nav className='flex justify-evenly mx-2'>
        <ul className='flex gap-x-6 text-gray-600 font-bold text-lg'>
          {/* Apply conditional border based on activeLink */}
          <li className={`hover:text-richblack-800 ${activeLink === 'home' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/" onClick={() => handleLinkClick('home')}>Home</Link>
          </li>
          <li className={`hover:text-richblack-800 ${activeLink === 'about' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/about" onClick={() => handleLinkClick('about')}>About</Link>
          </li>
          <li className={`hover:text-richblack-800 ${activeLink === 'contact' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/contact" onClick={() => handleLinkClick('contact')}>Contact</Link>
          </li>
          <li className={`hover:text-richblack-800 ${activeLink === 'plans' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/PlansAndPricing" onClick={() => handleLinkClick('plans')}>Our Plans & Pricing</Link>
          </li>
          <li className={`hover:text-richblack-800 ${activeLink === 'how' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/HowItWorks" onClick={() => handleLinkClick('how')}>How It Works</Link>
          </li>
        </ul>
      </nav>

      {/* buttons */}
      <div className='flex items-center gap-x-4 text-richblack-100'>
        {!isLoggedIn && (
          <>
            <Link to="/login" onClick={clearActiveLink}>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-bold'>Login</button>
            </Link>
            <Link to="/signup" onClick={clearActiveLink}>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-bold'>Sign Up</button>
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to="/" onClick={clearActiveLink}>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-bold' onClick={() => {
                navigate("/")
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}>Log out</button>
            </Link>
            <Link to="/dashboard" onClick={clearActiveLink}>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-bold'>Dashboard</button>
            </Link>
          </>
        )}
        <Link to="/FreeTrialForm" onClick={clearActiveLink}>
          <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-bold'>Free Trial</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
