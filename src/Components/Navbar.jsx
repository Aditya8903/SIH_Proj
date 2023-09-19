import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/"><img src={logo} alt="logo" width={160} height={32} loading='lazy'/></Link>

      <nav className='flex justify-evenly'>
        <ul className='flex gap-x-6 text-richblack-100'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/plansAndpricing">Our Plans</Link>
          </li>
        </ul>
      </nav>

      {/* buttons */}
      <div className='flex items-center gap-x-4 text-richblack-100'>
        <Link to="/login">
          <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
        </Link>
        <Link to="/signup">
          <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button>
        </Link>
        <Link to="/logout">
          <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Log out</button>
        </Link>
        <Link to="/dashboard">
          <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
