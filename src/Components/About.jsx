import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'

export const About = () => {
  return (
    <div id="aboutme" className="border-b border-neutral-900 px-8 py-12 mt-16">
        <h2 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex item-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                    <div className="mx-2 my-2 flex justify-center lg:justify-start">
                            <p className='mg-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </div>
        </div>
    </div>
  )
}
