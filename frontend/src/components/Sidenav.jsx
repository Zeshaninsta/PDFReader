import React, { useState , useEffect} from 'react';
import About from './About';
import { Link, NavLink, useLocation } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    console.log('Toggling navbar');
    setIsOpen(!isOpen);
  };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (isOpen) {
//         const sidebar = document.getElementById('sidebar');
//         if (sidebar && !sidebar.contains(event.target)) {
//           setIsOpen(false);
//         }
//       }
//     };

//     window.addEventListener('click', handleOutsideClick);

//     return () => {
//       window.removeEventListener('click', handleOutsideClick);
//     };
//   }, [isOpen]);


  return (
    <div className='z-20 w-1/5'>
      <button
        onClick={toggleNavbar}
        className=" text-black text-2xl z-20 top-[20px] left-[25px] fixed focus:outline-none hover:text-[#285c4a] "
      >
        &#9776; {/* Burger menu icon */}
      </button>

      {/* Sidebar */}
      <nav
      id='sidebar'
        className={`w-full lg:w-1/5 lg:block z-20 bg-gray-900 h-screen fixed top-0 left-0 transition-all transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={toggleNavbar}
          className="text-white text-2xl px-5 rounded-lg border-2 hover:bg-[#4cab89]  border-gray-300 mt-4 ml-4 focus:outline-none"
        >
          &times;
        </button>

        {/* Sidebar content */}
        <div className="p-6">
          <div className="mb-10">
            <h2 className="text-white text-2xl font-bold">PDFReader</h2>
          </div>
          <ul className='flex justify-center items-center flex-col'>

          <NavLink
              to="/Home"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/Home"
                  ? "text-[#396E8D] border-b-2 border-[#396E8D] "
                  : "opacity-50"
              }`}
            >
              Home
            </NavLink>

            <NavLink
              to="/userProfile"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/userProfile"
                  ? "text-[#396E8D] border-b-2 border-[#396E8D] "
                  : "opacity-50"
              }`}
            >
              User Profile
            </NavLink>

            <NavLink
              to="/About"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/About"
                  ? "text-[#396E8D] border-b-2 border-[#396E8D] "
                  : "opacity-50"
              }`}
            >
              About
            </NavLink>

            <NavLink
              to="/setting"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit text-white block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/setting"
                  ? "text-[#396E8D] border-b-2 border-[#396E8D] "
                  : "opacity-50"
              }`}
            >
              Settings
            </NavLink>










{/* 
            <li className="mb-4">
              <a href="#" className="text-white hover:text-gray-400 block">
                User Profile
              </a>
            </li>
            <li className="mb-4">
              <a href={About} className="text-white hover:text-gray-400 block">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:text-gray-400 block">
                Settings
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
