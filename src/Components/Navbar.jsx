import React, { useState } from 'react'
import logo from "../assets/Key.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram ,FaBars , FaTimes} from "react-icons/fa"
//import color from "relative h-64 w-64 flex items-center justify-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-full"


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return(
    <>
    <nav  className="fixed top-0 left-0 w-full shadow-md z-10 py-6 px-8">
    <div className="flex items-center justify-between ">
      <div className='flex items-center'>
      <img className='w-12 h-12 rounded-md'
       src={logo} alt="logo" />
       </div>
       <ul className="hidden md:flex space-x-6  text-gray-100 bg-transperent  px-4 py-2 rounded-md shadow-lg">
        <li>
          <a href="#home" className='hover:text-blue-500 transition-all duration-300 text-xl'>
            Home
          </a>
        </li>
        <li>
        <a href="#aboutme" className='hover:text-blue-500 transition-all duration-300 text-xl'>
            About Me
          </a>
        </li>
        <li>
        <a href="#Projects" className='hover:text-blue-500 transition-all duration-300 text-xl'>
            Projects
          </a>
        </li>
        <li>
        <a href="#Technologies" className='hover:text-blue-500 transition-all duration-300 text-xl'>
            Technologies
          </a>
        </li>
        <li>
        <a href="#CodingProfile" className='hover:text-blue-500 transition-all duration-300 text-xl'>
            CodingProfile
          </a>
        </li>
        <li>
        <a href="#Contactme" className='hover:text-blue-500 transition-all duration-300 text-xl'>
            Contact
          </a>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div className=''>
      <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-2xl text-gray-700" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className={`${
          isOpen ? "block" : "hidden"
        } absolute right-14 left-0 top-0 w-64 bg-transperent text-white mt-12 p-4 shadow-lg z-20`}>
          <li>
            <a href="#home" className="block py-1  hover:text-blue-500 transition-all duration-300" 
            onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" className="block py-1 hover:text-blue-500 transition-all duration-300" 
            onClick={() => setIsOpen(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#Projects" className="block py-1 hover:text-blue-500 transition-all duration-300" 
            onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Technologies" className="block py-1 hover:text-blue-500 transition-all duration-300" 
            onClick={() => setIsOpen(false)}>
              Technologies
            </a>
          </li>
          <li>
            <a href="#CodingProfile" className="block py-1 hover:text-blue-500 transition-all duration-300" 
            onClick={() => setIsOpen(false)}>
              Coding Profile
            </a>
          </li>
          <li>
            <a href="#Contactme" className="block py-1 hover:text-blue-500 transition-all duration-300" 
            onClick={() => setIsOpen(false)}>
              Contact Me
            </a>
          </li>
        </ul>
         )}
    </nav>
    </>
  )
}
