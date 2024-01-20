import React from 'react'
import SubmitDocument from "../assets/Submit-Document.png"
import QrCode from "../assets/QR-Code-Placement-100x100.png"
import Download from "../assets/Dowload-Share--100x100.png"
import Encrypted from "../assets/Encrypted-Hashing-100x100.png"
import Inspect from "../assets/Inspect-Visually--100x100.png"
import Proofeasy from "../assets/Proofeasy-Validation-100x100.png"
import ScanQr from "../assets/Scan-QR-Code--100x100.png"
import Scanning from "../assets/Scanning-Apps-100x100.png"
import VeriDoc from "../assets/VeriDoc-Global-Security--100x100.png"
import VeriBlock from "../assets/Verify-on-Blockchain-100x100.png"
import FileShare from "../assets/filesharing-768x615.png"
import ScanApp from "../assets/scanApp.png"

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className='text-richblack-100 flex-1 text-center'>
        <h1 className='text-3xl text-green-500 mt-10 mb-8'>Seamless, Simple & Secure</h1>
        <p className='text-xl text-gray-500 mx-16 p-4'>We understand the importance of document security, this is why we offer an easy-to-use solution. Here is an overview of how document issuers can secure and share the documents with CertifyIt.</p>

        {/* steps to get started */}
        <div>
          <div>
            <h1 className="text-green-500">Submit Document</h1>
            <img src={SubmitDocument} alt="aa" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>Upload the document that needs to be secured. Users can even create a digital certificate with it. CertifyIt prepares the document for QR Code placement.</p>
          </div>
          <div>
            <h1 className="text-green-500">QR Code Placement</h1>
            <img src={QrCode} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>CertifyIt QR code is placed in the submitted document and securely saved in the CertifyIt server.</p>
          </div>
          <div>
            <h1 className="text-green-500">Encrypted Hashing</h1>
            <img src={Encrypted} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>A unique hash for the document is generated, and the hash is placed in the blockchain.</p>
          </div>
          <div>
            <h1 className="text-green-500">VeriDoc Global Security</h1>
            <img src={VeriDoc} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>The blockchain transaction ID along with the hash value, and the URL are stored in a secure database.</p>
          </div>
          <div>
            <h1 className="text-green-500 mx-16 p-4">Download & Share</h1>
            <img src={Download} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500'>The document is ready for sharing between all concerned parties in a secure environment. CertifyIt enables secure document transfer seamlessly.</p>
          </div>
          <div>
            <h1 className="text-green-500">Verify & Validate</h1>
            <img src={VeriDoc} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>Here is an overview of how CertifyIt protected documents can be verified and easily validated.</p>
          </div>
          <div>
            <h1 className="text-green-500">Scan QR Code</h1>
            <img src={ScanQr} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>Using any smartphone simply scan the QR code from the CertifyIt secured document.</p>
          </div>
          <div>
            <h1 className="text-green-500">Scanning Apps</h1>
            <img src={ScanApp} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>The camera app of iPhones, some of the android phones and any QR reader app can be used to scan the CertifyIt document.</p>
          </div>
          <div>
            <h1 className="text-green-500">CertifyIt Validation</h1>
            <img src={Proofeasy} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>The QR code contains a link to the VeriDoc Global verification engine for that specific document. The verification engine authenticates the hash on the blockchain and displays the original document that was secured using the CertifyIt platform.</p>
          </div>
          <div>
            <h1 className="text-green-500">Inspect Visually</h1>
            <img src={Inspect} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>The user can verify their copy of the CertifyIt document against the document displayed in the results page.</p>
          </div>
          <div>
            <h1 className="text-green-500">Verify on Blockchain</h1>
            <img src={VeriBlock} alt="" className='mx-auto mb-8'/>
            <p className='text-xl text-gray-500 mx-16 p-4'>The display page shows the hash value and the blockchain transaction ID. Click on the “Verify on Blockchain” button to double-check that these documents are indeed verified on the blockchain. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
