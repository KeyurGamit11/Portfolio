import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { Technologies } from './Components/Technologies'
import { Contact } from './Components/Contact'
import { CodingProfile } from './Components/CodingProfile'
import Projects from './Components/Projects'
import { Header } from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    
     <div className="overflow-x-hidden text-neutral-300 antialiased 
     selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 >
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
          rgba(255,255,255,0))]"></div>
      </div>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Technologies/>
        <CodingProfile/>
        <Contact/>
     </div>
    </>
    
  )
}

export default App
