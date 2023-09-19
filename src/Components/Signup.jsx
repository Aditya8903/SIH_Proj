import React from 'react'
import signupImg from "../assets/signup.png"
import Template from './Template'
const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
         title="Join the millions learning to code with Study Notion for free"
         desc1={"Generate and verify certificates"}
         desc2={"With Custom Templates."}
         image={signupImg}
         formmtype={"signup"}
         setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup