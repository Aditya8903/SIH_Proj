import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Corrected import
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPass, setShowPass] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate("/dashboard")
  }

  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
        <input
          type="email"
          required
          value={formData.email}
          placeholder='Enter your email address'
          onChange={changeHandler}
          name='email'
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>
        <input
          type={showPass ? "text" : "password"}
          required
          value={formData.password}
          placeholder='Enter your password'
          name='password'
          onChange={changeHandler}
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />

        <span onClick={() => setShowPass((prev) => !prev)}
        className="absolute right-3 top-[38px] cursor-pointer ">
          {showPass ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)} {/* Corrected component names */}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
        </Link>
      </label>

      <button
      className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
