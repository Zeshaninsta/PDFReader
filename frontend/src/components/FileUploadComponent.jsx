import React, { useState } from 'react';
import axios from 'axios';
import PdfViewer from './PdfViewer';

const FileUploadComponent = () => {
  const [extractedPdfUrl, setExtractedPdfUrl] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileChange = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      console.error('No file selected.');
      return;
    }

    const file = event.target.files[0];

    if (file) {
      const pdfUrl = URL.createObjectURL(file);
      setPdfUrl(pdfUrl);
    }

    const selectedFile = event.target.files[0];

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://localhost:5000/api/upload-pdf', formData, {
        responseType: 'blob'
      });

      console.log('File uploaded successfully.');

      setExtractedPdfUrl(URL.createObjectURL(response.data));
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container w-full h-screen m-auto">
      <div className="cont bg-[#ffffff] h-3/6 w-11/12 lg:w-3/4 m-auto flex-col relative lg:h-3/4 flex items-center justify-center p-14 border-4 border-[#4cab89] rounded-lg">
        <div className="relative bg-[#1E1E1E] mb-[20px] py-10 w-[150px] lg:w-[200px] lg:rounded-md overflow-hidden">
          <input type="file" onChange={handleFileChange} id="file" accept=".pdf" className="absolute inset-0 w-full h-full opacity-0" />
          <label htmlFor="file" className="absolute inset-0 flex items-center justify-center text-white cursor-pointer">
            Choose File
          </label>
        </div>
        <button className="bg-[#4cab89] px-10 lg:w-[200px] py-5 font-bold cursor-pointer z-10 text-white">
          Upload PDF
        </button>
      </div>
      {extractedPdfUrl && <PdfViewer pdfUrl={pdfUrl} />}
    </div>
  );
};

export default FileUploadComponent;
