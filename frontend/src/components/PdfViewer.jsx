import React from 'react'

function PdfViewer({ pdfUrl }) {
  return (
    <div className="container">
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          className='w-full h-screen'
        />
      )}
    </div>
  )
}

export default PdfViewer

