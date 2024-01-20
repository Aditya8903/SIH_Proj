import React from 'react';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return (
    <div className='flex h-screen'>
      {/* Left Div */}
      <div className='flex flex-col w-1/2 h-1/2 bg-blue-500 p-8 text-white rounded-lg m-4 transition-transform transform hover:shadow-lg hover:-translate-y-1 hover:scale-105 my-auto ml-60 mr-5'>
        <h1 className='text-4xl mb-4'>Submit Your Feedback</h1>
        <p className='text-lg mb-4'>
          Customer feedback is invaluable to us. It helps us understand your
          needs and make improvements to serve you better.
        </p>
        <Link to="/FeedbackForm" className='bg-white text-blue-500 hover:bg-blue-400 mt-20 hover:text-white py-2 px-4 rounded-md text-lg text-center '>
        <button>
          Submit Feedback
        </button>
        </Link>
      </div>

      {/* Right Div */}
      <div className='flex flex-col w-1/2 h-1/2 bg-gray-200 p-8 rounded-lg m-4 transition-transform transform hover:shadow-lg hover:-translate-y-1 hover:scale-105 my-auto mr-60 ml-5'>
        <h1 className='text-4xl mb-4'>Technical Support/Complaint</h1>
        <p className='text-lg mb-4'>
          We take pride in our responsive support team. We are dedicated to
          addressing your technical issues and complaints promptly.
        </p>
        <Link to="/ComplaintForm" className='bg-blue-500 text-white hover:bg-blue-400 mt-20 py-2 px-4 rounded-md text-lg text-center'>
        <button>
          Click For Support
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
