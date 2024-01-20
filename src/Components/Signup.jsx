import React from 'react';
import signupImg from '../assets/sign-up.avif';
import Template from './Template';

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Join the millions on CertifyIt for free"
        desc1={"Generate and verify certificates"}
        desc2={"With Custom Templates."}
        image={signupImg}
        formType='signup'
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Signup;
