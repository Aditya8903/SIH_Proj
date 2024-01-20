import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen justify-center items-center text-gray-700  ">
      {/* Generation */}
      <div className="flex-1 border bg-white shadow-lg border-gray-300 p-8 m-12 w-1/2 h-[300px]">
        <h1 className="text-center text-2xl font-semibold mb-4">Generate Certificate</h1>
        <p className="text-gray-600 mb-4">
        Transform the complex into the effortless. Generate certificates with ease, empowering your organization to recognize achievements seamlessly.
        </p>
        <Link to="/NewCertificate" className="bg-blue-500 w-1/2 mx-auto hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded block text-center">
          New Certificate
        </Link>
        <Link to="/ExsistingCertificate" className="mt-4 bg-blue-500 w-1/2 mx-auto hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded block text-center">
          Existing Certificate
        </Link>
      </div>

      {/* Verification */}
      <div className="flex-1 border bg-white shadow-lg border-gray-300 p-8 m-12 w-1/2 h-[300px]">
        <h1 className="text-center text-2xl font-semibold mb-4">Verify Certificate</h1>
        <p className="text-gray-600 mb-10">
        Unlock the power of hassle-free certificate validation with our streamlined process, ensuring your organization's trust is never compromised.
        <br />
        Experience the simplicity of verifying certificates with just a few clicks,
        </p>
        <Link to="/verify" className="bg-blue-500 w-1/2 mx-auto hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded block text-center">
          Verify
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
