import React from 'react'
import { PROJECTS } from "../constants";
export const Projects = () => {
  return (
    <div id="Projects"  className="border-b border-neutral-900 pb-4 px-8 py-12 mt-16">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>{PROJECTS.map((Project,index) =>(
         <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <img 
            src={Project.image} 
            width={200}
            height={200}
            alt={Project.title}
            className="mb-6 rounded "
            />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{Project.title}</h6>
            <p className="mb-2 text-neutral-400">{Project.description}</p>
            {Project.techStack.map((tech,index) =>(
                <span key={index} 
                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-900">
                  {tech}
                </span>
            ))}
            </div>
         </div>
      ))}
      </div>
    </div>
  )
}
export default Projects;