import React from 'react'
import { ArrowRight } from "lucide-react";

function Section5() {
  return (
    <div>
        
       <section className="relative py-12 md:py-20 bg-[url('/image2.jpg')] bg-cover bg-center bg-no-repeat ">
      
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-white rounded-full blur-3xl -translate-x-16 md:-translate-x-32 -translate-y-16 md:-translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-white rounded-full blur-3xl translate-x-24 md:translate-x-48 translate-y-24 md:translate-y-48"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 [word-spacing:0.70rem] text-right">
            Start Your Career Journey
            
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 text-right">
           
            With Virtual Internships !
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray mb-6 md:mb-8  mx-auto text-right">
            Join a community of ambitious students gaining real-world experience and building careers that make a difference.
          </p>
          <div>
           <div className="w-full flex justify-end pr-10">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore  Opportunities
              </button>
            </div>
            </div>
          
        </div>
      </section>
    </div>
  )
}

export default Section5
