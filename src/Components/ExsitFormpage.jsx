import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const ExsitFormpage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organizationName: '',
    certifiedFor: '',
    assignedDate: '',
    duration: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    toast.success("Your certificate detials is registered")
    navigate("/dashboard")
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* <div className=" w-full p-6 bg-white rounded shadow-md"> */}
    <div className="max-w-lg w-full p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Certificate Form</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="border p-4 rounded mb-4">
            <legend className="text-lg font-semibold text-blue-500">Personal Information</legend>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4">
                <label htmlFor="firstName" className="block text-gray-600">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4">
                <label htmlFor="lastName" className="block text-gray-600">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="border p-4 rounded mb-4">
          <legend className="text-lg font-semibold">Certificate Details</legend>
          <div className="mb-4">
            <label htmlFor="organizationName" className="block text-gray-600">Organization Name:</label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="certifiedFor" className="block text-gray-600">Certified For:</label>
            <input
              type="text"
              id="certifiedFor"
              name="certifiedFor"
              value={formData.certifiedFor}
              onChange={handleChange}
              placeholder='Area of Excellence(Skills)'
              className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </fieldset>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExsitFormpage;
