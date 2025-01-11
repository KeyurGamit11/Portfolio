import React from 'react'
import { Link } from 'react-router'
import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/KeyurGamitProfile.png"


export const Header = () => {
  return (
    <nav className="fixed justify-between bg-transparent w-full text-white py-4 px-8 flex gap-4">
  
        <h1 className="text-blue-500 text-3xl font-bold">Keyur</h1> 
        {/* think about to put logo */}
    
        <div className=" flex gap-4">
        <Link to='/Hero' className="hover:text-cyan-500 transition duration-300  ">Home</Link>
        <Link  to='/About' className="hover:text-cyan-500 transition duration-300" >About</Link>
        <Link to ='/Technologies' className="hover:text-cyan-500 transition duration-300">Technologies</Link>
        <Link to ='/CodingProfile' className="hover:text-cyan-500 transition duration-300">CodingProfile</Link>
        <Link to ='/Projects' className="hover:text-cyan-500 transition duration-300 ">Projects</Link>
        <Link to ='/Contact' className="hover:text-cyan-500 transition duration-300">Contact</Link>
        </div>
    </nav>
  )
}
