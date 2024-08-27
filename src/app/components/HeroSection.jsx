"use client";
import React from 'react'
import Image from  "next/image"

import { TypeAnimation } from 'react-type-animation';




const HeroSection = () =>  {
  return (
    <section>

    <div className="grid grid-cols-1 sm:grid-cols-12">  
    <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">   Hello, I 'm {" "}
       </span>
       <br></br>
       <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Farzana',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Full-Stack Developer',
          1000,
          'Python Developer',
          1000
          // 'UI/UX Designer',
          // 1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />


        </h1> 
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> I specialize in creating captivating online experiences that not only engage users but also drive results</p> 
      <div>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
           
          <a href="#contact">
            Hire me  
          </a> 
        </button>

        <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            
            <a href="/Farzana Akter(cv).pdf" download="Farzana Akter.pdf" >
                 Download CV
            </a>
            
            </span>  
          
          </button>
      </div>
    </div>
    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
      <div className="rounded-full bg-[#6a4e4e] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative">
          <Image src="/images/projects/profile-pic1.png"
          alt="hero image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={300} height={300}
          />
      </div>
    </div>
    </div>
    </section>
  )
}

export default HeroSection; 









