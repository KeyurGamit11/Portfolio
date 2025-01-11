import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import { SiCplusplus } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

export const Technologies = () => {
  return (
    <div id="Technologies"  className="border-b flex-center border-neutral-800 pb-24 px-8 py-12 mt-16">
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCplusplus className='text-7xl text-blue-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJavascript className='text-7xl text-yellow-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiNodedotjs className='text-7xl text-green-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-orange-300' />
            </div>
        </div>
    </div>
  )
}
