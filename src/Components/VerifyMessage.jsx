import React from 'react';

const VerifyMessage = ({ name, email, organizationName, certificationTopic, certificateType, validTill }) => {
  return (
    <div className='w-1/2 mx-auto h-1/2 bg-white flex flex-col p-4  justify-center align-center shadow-lg border border-lg text-xl'>
      <div className="flex gap-x-4 mb-4">
        <label className="w-full">
          <p className="text-[1rem] text-gray-600 mb-1 leading-[1.375rem]">
            Name:
          </p>
          <div className="bg-gray-200 border border-gray-400 rounded-[0.75rem] w-full p-[12px] text-gray-600">
            {name}
          </div>
        </label>
      </div>

      <div className="flex gap-x-4 mb-4">
        <label className="w-full">
          <p className="text-[1rem] text-gray-600 mb-1 leading-[1.375rem]">
            Email:
          </p>
          <div className="bg-gray-200 border border-gray-400 rounded-[0.75rem] w-full p-[12px] text-gray-600">
            {email}
          </div>
        </label>
      </div>

      <div className="flex gap-x-4 mb-4">
        <label className="w-full">
          <p className="text-[1rem] text-gray-600 mb-1 leading-[1.375rem]">
            Organization Name:
          </p>
          <div className="bg-gray-200 border border-gray-400 rounded-[0.75rem] w-full p-[12px] text-gray-600">
            {organizationName}
          </div>
        </label>
      </div>

      <div className="flex gap-x-4 mb-4">
        <label className="w-full">
          <p className="text-[1rem] text-gray-600 mb-1 leading-[1.375rem]">
            Certification Topic:
          </p>
          <div className="bg-gray-200 border border-gray-400 rounded-[0.75rem] w-full p-[12px] text-gray-600">
            {certificationTopic}
          </div>
        </label>
      </div>

      <div className="flex gap-x-4 mb-4">
        <label className="w-full">
          <p className="text-[1rem] text-gray-600 mb-1 leading-[1.375rem]">
            Certificate Type:
          </p>
          <div className="bg-gray-200 border border-gray-400 rounded-[0.75rem] w-full p-[12px] text-gray-600">
            {certificateType}
          </div>
        </label>
      </div>

      <div className="flex gap-x-4 mb-4">
        <label className="w-full">
          <p className="text-[1rem] text-gray-600 mb-1 leading-[1.375rem]">
            Valid Till:
          </p>
          <div className="bg-gray-200 border border-gray-400 rounded-[0.75rem] w-full p-[12px] text-gray-600">
            {validTill}
          </div>
        </label>
      </div>
    </div>
  );
};

export default VerifyMessage;
