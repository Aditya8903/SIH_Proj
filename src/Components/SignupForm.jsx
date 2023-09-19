import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPass, setShowPass] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      setIsLoggedIn(true);
      toast.success('Account Created Successfully');
      const accData = {
        ...formData,
      };
      console.log('printing form data');
      console.log(accData);
      navigate('/dashboard');
    }
  }

  return (
    <div>
      

      <form action="" onSubmit={submitHandler}>
        {/* fname and lname div */}
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter your first name"
              value={formData.firstname}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter your last name"
              value={formData.lastname}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>
        {/* email */}
        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup>*</sup>
          </p>
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            placeholder="Enter your email"
            value={formData.email}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />
        </label>
        {/* password */}
        <div className="flex gap-x-4">
          <label htmlFor="w-full relative" className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPass ? 'text' : 'password'}
              name="password"
              onChange={changeHandler}
              placeholder="Enter your Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.75rem] p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute right-3 top-[70%] transform -translate-y-1/2 cursor-pointer z-10"
            >
              {showPass ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPass ? 'text' : 'password'}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute right-3 top-[70%] transform -translate-y-1/2 cursor-pointer z-10"
            >
              {showPass ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* button */}
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
