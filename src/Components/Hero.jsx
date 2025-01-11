import React, { useState } from 'react'
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KeyurGamitProfile.png"
import Resume from "../assets/Keyur_Gamit_Resume_SDE.pdf"
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';



export const Hero = () => {

    const [isopen, setisopen] = useState(false);
    const togglepopup = () => {
        setisopen(!isopen);
    };
    return (

        <div id="home" className="pt-20 border-b border-neutral-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">

                    <div className="flex flex-col text-center  m-0 p-0">
                        <div className='m-0 p-0 flex items-center justify-center gap-3'>
                            <h1 className="text-2xl m-0 p-0">Hello,</h1>
                            <h4 className='text-2xl'>I'm</h4>
                        </div>
                        <h1 className=" text-6xl font-bold  m-2 p-2
                        lg:text-6xl">
                            Keyur Gamit
                        </h1>

                        <div className='flex flex-col items-center justify-center gap-1'>
                            <span className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                                Full Stack Developer & Competitive Programmer
                            </span>
                            <p className='text-xl my-2 max-w-xl py-2 font-light' >
                                {HERO_CONTENT}
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-2xl gap-4 p-4 '>
                            <a href={Resume} target="_blank" rel="noopener noreferrer"
                                className=" bg-blue-500 border-gray-300  text-white-500 hover:text-blue-700 
                     font-semibold text-sm px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                                View Resume
                            </a>

                            <a
                                href={Resume}
                                download={Resume}
                                className="flex items-center bg-green-400 px-3 py-2 text-white rounded-lg hover:bg-green-600 transition-all duration-300
                    text-center w-auto max-w-[200px] text-sm" >
                                <FaDownload className="mr-2 text-xs" /> Download Resume
                            </a>
                        </div>
                    </div>

                </div>

                <div className='w-full lg:w-1/2 lg:p-20'>
                    <div className="flex justify-center">
                        <img
                            src={profilePic}
                            alt="Keyur Gamit "
                            className="rounded-full w-85 h-80 object-cover border-4 border-cyan-500 shadow-lg   "
                        />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <div className='relative'>
                    <button
                        onClick={togglepopup}
                        className='justify-center flex items-center  bg-blue-500 rounded-full px-6 py-2 shadow-lg hover:bg-blue-600 transation-all duration-300'>
                        Connect Me
                    </button>
                    {isopen && (
                        <div className='flex items-center justify-center  absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-transperent rounded-xl shadow-lg p-0 z-10 gap-3'>

                            <a href="https://www.linkedin.com/in/keyur-gamit-6ab3742ba/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center justify-center w-12 h-12 bg-transepernt rounded-full hover:bg-blue-600 transation-all'
                            >
                                <FaLinkedin className='text-blue-400 text-3xl' />
                            </a>
                            <a href="https://Instagram.com/_keyur_1112"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center justify-center w-12 h-12 bg-transparent rounded-full hover:bg-pink-50 transation-all'
                            >
                                <FaInstagram className='text-3xl text-pink-600' />
                            </a>

                            <a href="https://github.com/KeyurGamit11"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center justify-center w-12 h-12 bg-transparent rounded-full hover:bg-gray-600 transation-all'  
                            >
                                <FaGithub className='text-3xl text-gray-300' />
                            </a>

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
