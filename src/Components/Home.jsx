import React from 'react';
import banner from '../assets/banner.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate('/FreeTrialForm');
  }

  const features = [
    {
      title: 'Immutable & Verifiable',
      description: [
        'Keep your original intact',
        'Share unalterable proof of existence',
        'Trusted reference point for verification',
      ],
    },
    {
      title: 'Easy Adoption',
      description: [
        'No learning curve. Start generation',
        'Simple, transparent drag & drop process',
        'Facilitate submission, approvals',
      ],
    },
    {
      title: 'Blockchain Security',
      description: [
        'Out of the box solution to maintain data integrity',
        'Prevent data frauds and increase trust with blockchain',
        'Increase trust with decentralization',
      ],
    },
    {
      title: 'Visual Inspection',
      description: [
        'Enable instant verification on any smart device',
        'Verify data authenticity with a unique QR code',
        'Works for scanned and digital documents',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Inspect Visually',
      description:
        'Use CertifyIt and stop document fraud. Real-time QR code scanning leads to a highly trusted reference point for verification.',
    },
    {
      title: 'Change the way proofs are validated',
      description:
        'In today’s digital economy, traditional protection and verification systems are often compromised. CertifyIt offers a simple, reliable method for protecting and verifying the source of truth.',
    },
    {
      title: 'Create an easily verifiable proof',
      description:
        'CertifyIt provides a safe and secure interface to send and receive documents in a secure manner without requiring enterprise-level software.',
    },
  ];

  return (
    <div className='text-richblack-100 text-xl h-full flex flex-col items-center justify-center'>
      {/* Banner */}
      <div
        className='w-full flex justify-center align-center my-6'
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px', 
        }}
      >
        {/* Content on top of the banner */}
        <div className="text-white text-center">
          <h2 className="text-4xl font-semibold">Welcome to Certify It!</h2>
          <p className="text-xl mt-2">Secure, share, and verify your documents with ease.</p>
        </div>
      </div>
      {/* Free trial */}
      <div
        onClick={clickHandler}
        className='cursor-pointer hover:scale-105 transform transition-transform duration-300 bg-blue-500 hover:bg-blue-700 text-white text-2xl font-semibold my-8 p-4 rounded-lg'
      >
        Register now for a free trial
      </div>
      {/* Key Features */}
      <div className='mb-8 mt-6 w-[100rem]'>
        <h1 className='text-3xl mb-4 font-semibold text-green-500 text-center '>
          Our Key Features
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {features.map((feature, index) => (
            <div
            key={index}
            className='p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center mx-4 border border-gray-300'
          >
              <h2 className='text-xl font-semibold text-blue-500'>
                {feature.title}
              </h2>
              <ul className='list-disc list-inside ml-4 text-center text-gray-500 text-md'>
                {feature.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Benefits */}
      <div className='mb-8 w-[100rem]'>
        <h1 className='text-3xl mb-4 font-semibold text-green-500 text-center'>Benefits</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow mx-4 border border-gray-300'
            >
              <h2 className='text-xl font-semibold text-blue-500'>
                {benefit.title}
              </h2>
              <p className='text-gray-500'>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Demo Button */}
      <div className='text-center'>
        <h2 className='text-2xl mb-4 font-semibold text-green-500'>
          Want To Know How This Works?
        </h2>
        <button className='bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:shadow-lg transition duration-300'>
          Click For Demo
        </button>
      </div>
    </div>
  );
};

export default Home;