import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from 'react-icons/fc';

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between ">
      <div className="w-11/12 max-w-[450px] mx-0 text-gray-600">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-xl mt-4">
          <span className="text-richblack-700">{desc1}</span>
          <br />
          <span className="text-blue-500 italic">{desc2}</span>
        </p>

        {formType === 'signup' ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        {/* OR Section */}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium text-xl">OR</p>
          <div className="h-[1px] w-full bg-gray-700"></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-gray-600 border-richblack-700 border px-4 py-2 gap-x-2 mt-6 hover:bg-green-500 hover:text-white transition duration-300">
          <FcGoogle />
          <p>Sign In With Google</p>
        </button>
      </div>

      {/* Page image with overlapping effect */}
      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={image}
          alt="main image"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 
          shadow-lg"
        />
      </div>
    </div>
  );
};

export default Template;
