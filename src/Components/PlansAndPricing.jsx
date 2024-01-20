import React from 'react';
import Pricetemplate from './Pricetemplate';

const PlansAndPricing = () => {
  return (
    <div className='text-gray-600 h-full py-8 text-center'>
      {/* heading */}
      <div className="text-paragraph py-8">
        <h1 className="text-4xl font-bold mb-4">Choose your Plan</h1>
        <p className='mx-12 p-4 px-8 my-4 text-2xl'>
          Get ahead of physical document security and choose our advanced patented blockchain-backed document security solutions. Whether you are searching for a customized batch QR code generator or bulk QR code generator, we have flexible plans to meet your needs.
          The scope of growing business with blockchain verification and more other features is immense.
        </p>
        <span className="text-green-500 font-bold block mt-4 text-4xl">Start your free trial today!</span>
      </div>

      {/* plans card */}
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='text-3xl font-extrabold mb-8'>Our Plans</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {/* plan 1 */}
            <Pricetemplate
              packages="Free"
              desc="Getting started"
              rate="₹0"
              features={[
                'Up to 5 documents/certificates a month',
                'Blockchain security-',
                'File sharing option',
                'Email support',
              ]}
            />
          
          {/* plan 2*/}
            <Pricetemplate
              packages="Starter"
              desc="Perfect for newbies"
              rate="299"
              features={[
                'Everything in Free',
                'Up to 10 documents/certificates',
                'Basic Organization branding',
                'Email & Chat support',
              ]}
            />
         
          {/* plan 3*/}
          
            <Pricetemplate
              packages="Basic"
              desc="The best solution for pros"
              rate="₹249"
              features={[
                'Everything in Starter',
                'Up to 20 documents/certificates',
                'Unlimited storage',
                'Up to 3 team members',
              ]}
            />
          
          {/* plan 4 */}
          
            <Pricetemplate
              packages="Premium"
              desc="For experts"
              rate="₹399"
              features={[
                'Everything in Basic',
                'Up to 99 documents/certificates',
                'Customized Template',
                'Up to 10 team members',
                'Advanced organization branding',
              ]}
            />
          
        </div>
      </div>
    </div>
  );
}

export default PlansAndPricing;
