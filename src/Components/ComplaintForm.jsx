import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    complaint: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    toast.success("Complaint Submitted Successfully");
    navigate("/contact");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg w-1/2">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-2xl font-semibold text-center text-blue-500">
            Complaint Form
          </legend>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="complaint" className="block text-gray-700">
              Complaint:
            </label>
            <textarea
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ComplaintForm;
