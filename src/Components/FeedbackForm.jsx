import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
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
    toast.success("Thank You! Your feedback is important to us.");
    navigate("/contact");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg w-1/2">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-2xl font-semibold text-center text-green-500">
            Feedback Form
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700">
              Feedback:
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FeedbackForm;
