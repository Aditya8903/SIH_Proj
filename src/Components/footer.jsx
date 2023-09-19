import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className="p-16 px-[7.5rem] pb-2 mb-0 align-bottom">
      <div className="grid grid-cols-[500px_repeat(3,1fr)] gap-6 font-medium text-sm text-gray-700">
        <div className="flex flex-col gap-4">
          <h1>LOGO</h1>
          <p className=" leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis labore voluptatum dignissimos debitis odio vel
            perspiciatis voluptatem alias earum harum perspiciatis voluptatem
            alias earum harum.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-950 font-extrabold border-l-4 border-solid border-[#0071f2] px-2 mb-2 py-0">
            Links
          </p>

          {/* Updated links with correct 'to' attributes */}
          <Link to="/" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="/HowItWorks" smooth={true} duration={500}>
            Get started
          </Link>
          <Link to="/PlansAndPricing" smooth={true} duration={500}>
            Services
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-blue-950 font-extrabold border-l-4 border-solid border-[#0071f2] px-2 mb-2">
            Others
          </h3>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <Link to="/ContactUs" smooth={true} duration={500}>
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-blue-950 font-extrabold border-l-4 border-solid border-[#0071f2] px-2 mb-2">
            Social Handles
          </h3>
          <h3 className=" text-gray-900">Follow us on Social Media</h3>
          <div className=" flex items-center gap-2 text-2xl">
            <div className=" text-[#4267B2]">
            <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className=" text-pink-700">
            <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className=" text-[#00acee]">
            <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className=" text-[#0072b1]">
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center mt-10 text-sm font-medium text-gray-700">
        <p>Copyright © {new Date().getFullYear()} CertifyIt Pvt Ltd</p>
      </div>
    </div>
  );
}

export default Footer;
