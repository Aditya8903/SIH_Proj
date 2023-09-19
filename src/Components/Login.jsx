import React from 'react'
import loginImg from "../assets/login.png";
import Template from './Template';

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Template
         title="Welcome Back"
         desc1={"Generate and verify certificates"}
         desc2={"With Custom Templates."}
         image={loginImg}
         formmtype={"login"}
         setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}


export default Login