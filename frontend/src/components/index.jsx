import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidenav';
import FileUploadComponent from './FileUploadComponent';
import Home from './Home';
import About from './About'
import UserProfile from './userProfile'
import Setting from './setting'
import PdfViewer from './PdfViewer';

const Index = () => {
  return (
    <Router>
      <>
      <Nav />
      <Sidebar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/userProfile" element={<UserProfile />} />
          {/* Add more routes if needed */}
        </Routes>
      </>
    </Router>
  );
}

export default Index;
