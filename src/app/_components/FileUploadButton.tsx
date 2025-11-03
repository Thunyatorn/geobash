'use client';
import React, { useRef, useState } from 'react';

const FileUploadButton = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger the hidden input click
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', { 
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
        setSelectedFile(null);
      } else {
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred during upload.');
    }
  };

  return (
    <div className="flex flex-row w-screen justify-center m-5 gap-x-4">
      <div className="flex justify-center w-1/12 border-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the default input
        />
        <button onClick={handleUploadClick}>
          Select File
        </button>
      </div>
      <div className="flex w-1/12">
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
      <div className="flex justify-center w-1/12 border-2">
        <button onClick={handleSubmit} disabled={!selectedFile}>Upload</button>
      </div>
    </div>
  );
};

export default FileUploadButton;