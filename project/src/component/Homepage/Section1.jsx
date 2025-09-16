import React from 'react'
import { Play, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function Section1() {
   const navigate =useNavigate();
   const handleClick =() =>{navigate('/Apply');};
   
  return (
    <div>
        
      <section className="relative py-12 md:py-20  ">
      {/* Background blur Circles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-5 md:top-10 left-5 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-green-500 rounded-full blur-xl"></div>
        <div className="absolute top-16 md:top-32 right-10 md:right-20 w-12 md:w-24 h-12 md:h-24 bg-emerald-400 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 md:bottom-20 left-1/4 w-20 md:w-40 h-20 md:h-40 bg-teal-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 md:bottom-32 right-1/3 w-14 md:w-28 h-14 md:h-28 bg-green-600 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Level Up Your Future With A Virtual Internship Experience
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Access thousands of talent-seeking companies worldwide for an
          internship placement that suits you
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <button
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=BFIuv0J23_U&t=48s", "_blank")
            }
            className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Watch Demo
          </button>
          <button 
            onClick={handleClick}
         className="text-green-600 hover:bg-gray-600 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Start Your Journey
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Section1
