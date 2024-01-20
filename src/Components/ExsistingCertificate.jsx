import React, { useState } from 'react';
import ExsitFormpage from './ExsitFormpage';

const ExistingCertificate = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles(files);
    setIsDragOver(false);
  };

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  return (
    <div className='h-screen flex p-4 mx-auto'>
      <div className="w-1/2 h-1/2 mx-4  p-6 border rounded-lg shadow-lg my-auto bg-white flex flex-col items-center justify-center border-gray-600 ">
      <h1 className="text-2xl font-bold mb-4">Upload File</h1>
      <div
        className={`border-dashed border-2  border-gray-300 rounded-lg p-4 ${
          isDragOver ? 'border-blue-500' : ''
        }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={() => setIsDragOver(false)}
      >
        {selectedFiles.length === 0 ? (
          <div>
            <p className="text-gray-500">
              Drag and drop files here, or click to select files.
            </p>
            {/* Styled file input */}
            <label
              htmlFor="file-input"
              className="cursor-pointer text-blue-500 hover:underline mt-4"
            >
              Click to select files
            </label>
            <input
              type="file"
              id="file-input"
              multiple
              onChange={handleFileInputChange}
              className="hidden"
            />
          </div>
        ) : (
          <div>
            <p className="text-blue-500 font-semibold">Files selected:</p>
            <ul className="list-disc pl-4 mt-2">
              {selectedFiles.map((file, index) => (
                <li key={index} className="text-gray-600">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            You can now proceed to upload these files.
          </p>
        </div>
      )}
    </div>
    <ExsitFormpage/>
    </div>
  );
};

export default ExistingCertificate;
