import React from 'react'
import { SiLeetcode, SiCodeforces, SiGithub } from "react-icons/si";
import CodeforcesLogo from "../assets/CF_logo.png"
import Codechef from "../assets/CC_logo.png"

export const CodingProfile = () => {
  return (
    <div id="CodingProfile"  className=" border-b flex-center border-neutral-800  px-8 py-12 mt-16 ">
        <h2 className="my-20 text-center text-4xl">Coding Profile</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 , justify-center'>
                <a href="https://leetcode.com/u/keyur11/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode className="text-7xl p-0 hover:b text-orange-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-shadow duration-300" />
                </a>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://codeforces.com/profile/keyur11" target="_blank" rel="noopener noreferrer">
                <img className="mx-2 w-20 hover:brightness-150 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" 
                src={CodeforcesLogo} alt="Codeforces Logo" />
                </a>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://www.codechef.com/users/keyurgamit45" target="_blank" rel="noopener noreferrer">
                <img className="mx-2 w-20 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-shadow duration-300" 
                src={Codechef} alt="Codechef logo" />
                </a>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <a  href="https://github.com/KeyurGamit11" target="_blank" rel="noopener noreferrer">
                        <SiGithub className='text-7xl text-blue-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-shadow duration-300' />
                </a>
                </div>
        </div>
    </div>
  )
}
