import React from 'react';
import Login from './Login';
import toast from 'react-hot-toast';
import FreeTrialForm from './FreeTrialForm';

const FreeTrial = ({isLoggedIn}) => {
  return (
    <div className='text-white'>
      {!isLoggedIn ? (
        <>
          {toast.error('You are not logged in')}
          <Login />
        </>
      ) : (
        <FreeTrialForm />
      )}
    </div>
  );
};

export default FreeTrial;
