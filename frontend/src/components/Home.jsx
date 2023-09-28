import React from 'react'
import pic from '../Asset/pic.png'
import Nav from './Nav'
import Sidebar from './Sidenav'
import FileUploadComponent from './FileUploadComponent'

function Home() {
  return (
    <div>
<div className='bg-white min-h-screen flex flex-col gap-y-20 mt-[50px] items-center lg:flex-row lg:gap-x-4 lg:items-center lg:justify-between lg:mt-0 p-4 md:p-8 lg:p-14 m-auto'>
        <div className="lg:w-[50%] relative">
            <h1 className='mb-[20px] font-bold text-4xl'>PDFReader</h1>
            <p className='max-w-xs m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ullam quam distinctio labore fuga ipsam porro sapiente adipisci, error odit.</p>
            <img src={pic} alt="pic" className='absolute lg:w-[50%] inset-0 opacity-5 m-auto'  />
        </div>
      <div className="pic lg:w-[50%]">
        <img src={pic} alt="pic" />
      </div>
    </div>
    <FileUploadComponent />
    </div>
  )
}

export default Home
