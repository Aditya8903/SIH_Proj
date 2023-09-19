import React from 'react'
import banner from '../assets/banner.jpg'
const Home = () => {
  return (
    <div className='text-richblack-100 text-3xl h-full'>
      <h1 className='text-4xl text-center mb-8'>Certify It!</h1>
      <div className='w-full flex justify-center align-center'>
        <img src={banner} alt="banner" />
      </div>
    </div>
  )
}

export default Home