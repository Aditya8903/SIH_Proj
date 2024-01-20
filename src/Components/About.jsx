import React from 'react';
import aboutTeam from '../assets/about-our-team.webp';
import aboutCertifyIt from '../assets/about-certifyit.webp'
import aboutStory from '../assets/about-story.webp'
const About = () => {
  return (
    <div className='text-gray-600 text-xl h-full mx-4'>
      <div className='mb-8'>
      <h2 className='text-3xl text-center  font-bold text-green-500 mt-8'>
        About CertifyIt!
      </h2>
        <div className='flex mx-10'>
        <img src={aboutCertifyIt} alt="aboutCertifyIt" />
        <p className='my-auto ml-4'>
          CertifyIt provides an innovative way to secure, share, and verify documents using patented blockchain technology.
        </p>
        </div>
      </div>
      <div className='mb-8'>
      <h2 className='text-3xl text-center  font-bold text-green-500 mt-8'>
      Our Team
      </h2>
        <div className='flex mx-10'>
        <p className='my-auto ml-4'>
        CertifyIt is comprised of a team of experts from top firms globally. We have years of experience helping firms secure their highly confidential data and documents in the cloud. We have the expertise to adapt to market changes and the impact it has on businesses. We listen to customer needs and develop blockchain document management solutions that can be adapted to a multitude of business applications.
        </p>
        <img src={aboutTeam} alt="aboutTeam" />
        </div>
      </div>

      <div className='mb-8'>
      <h2 className='text-3xl text-center  font-bold text-green-500 mt-8'>
      CertifyIt Story
      </h2>
        <div className='flex mx-10'>
        <img src={aboutStory} alt="aboutStory" className='h-1/2 w-1/2'/>
        <p className='my-auto ml-4'>
        CertifyIt provides cutting edge document veriﬁcation platform that aims to eliminate document forgeries, frauds and counterfeits. With this platform, we change the way proof of authentication is validated. CertifyIt removes the bottleneck in fraud prevention by eliminating the need for third-party verification.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
