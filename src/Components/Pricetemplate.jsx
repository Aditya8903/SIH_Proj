import React from 'react';

const Pricetemplate = ({ packages, desc, rate, features }) => {
  return (
    <div className="border border-solid border-secondary rounded p-4 shadow-lg flex flex-col items-center">
      {/* Package */}
      <h1 className="text-3xl font-bold text-headline mb-2">{packages}</h1>
<p className="text-paragraph mb-4">{desc}</p>
      <div className="mb-4">
        <span className="text-2xl font-semibold text-green-600">{rate}</span>
        <span className="text-gray-600 text-sm ml-1">/month</span>
      </div>
      <ul className="list-disc pl-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-button hover:bg-tertiary text-white font-semibold py-2 px-4 rounded">
  Details
</button>
    </div>
  );
};

export default Pricetemplate;
