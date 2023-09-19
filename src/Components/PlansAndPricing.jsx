import React from 'react';
import Pricetemplate from './Pricetemplate';

const PlansAndPricing = () => {
  return (
    <div className='text-richblack-100  h-full py-8'>
      {/* heading */}

      <div className="text-paragraph py-8">
        <h1>Choose your Plan</h1>
        <p>Get ahead of physical document security and choose our advanced patented blockchain backed document security solutions. Whether you are searching for a customized batch QR code generator or bulk QR code generator, we have flexible plans to meet your needs.
        The scope of growing business with blockchain verification and more other features is immense.</p>
<span>Start your free trial today!</span>
      </div>
      {/* plans card */}
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='text-4xl text-center font-extrabold mb-8'>Our Plans</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {/* plan 1 */}
          <Pricetemplate
            packages="Free"
            desc="Getting started"
            rate="0Rs"
            features={[
              'Up to 5 documents',
              'Blockchain security',
              'File sharing option',
              'Email support',
            ]}
          />
          {/* plan 2*/}
          <Pricetemplate
            packages="Starter"
            desc="Perfect for newbies"
            rate="19Rs"
            features={[
              'Everything in Free',
              'Up to 10 documents',
              'Basic Organization branding',
              'Email & Chat support',
            ]}
          />
          {/* plan 3*/}
          <Pricetemplate
            packages="Basic"
            desc="The best solution for pros"
            rate="49Rs"
            features={[
              'Everything in Starter',
              'Up to 20 documents',
              'Unlimited storage',
              'Up to 3 team members',
            ]}
          />
          {/* plan 4 */}
          <Pricetemplate
            packages="Premium"
            desc="For experts"
            rate="99Rs"
            features={[
              'Everything in Basic',
              'Up to 99 documents',
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
