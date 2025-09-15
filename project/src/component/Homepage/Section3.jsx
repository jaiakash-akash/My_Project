import React from 'react'
import { Users, Target, Award } from "lucide-react"; 

function Section3() {
  return (
    <div>
        
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-200 via-green-400 to-green-600 ">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className=" text-3xl md:text-4xl lg:text-4xl font-bold text-white  [word-spacing:0.50rem] mb-7 md:mb-4">
              Find Your Work Experience
              <br/>
             <span className="text-[#00b1aa]">In Three Steps</span>
            </h2>
            <p className="text-base md:text-lg text-gray-900 max-w-4xl mx-auto px-4">
              It’s never been easier to gain global work experience that will give you an unbeatable advantage for your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  {/* Step 1 */}
                <div className="relative bg-gradient-to-br from-white to-green-50 
                                p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl 
                                transform hover:scale-105 transition-all duration-300 
                                border border-green-100 group">
                  <div className="absolute -top-3 md:-top-4 left-6 md:left-8">
                    <div className="bg-green-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full 
                                    flex items-center justify-center font-bold text-xs md:text-sm shadow-md">
                      1
                    </div>
                  </div>
                  <div className="mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-xl 
                                    flex items-center justify-center mb-3 md:mb-4 
                                    group-hover:bg-green-200 transform group-hover:scale-110 
                                    transition-transform duration-300">
                      <Users className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-2 md:mb-3">
                      Enroll & Complete
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Enroll now and complete the online application
                    </p>
                  </div>
                </div>

   {/* Step 2 */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 
                                p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl 
                                transform hover:scale-105 transition-all duration-300 
                                border border-green-100 group">
                  <div className="absolute -top-3 md:-top-4 left-6 md:left-8">
                    <div className="bg-green-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full 
                                    flex items-center justify-center font-bold text-xs md:text-sm shadow-md">
                      2
                    </div>
                  </div>
                  <div className="mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-xl 
                                    flex items-center justify-center mb-3 md:mb-4 
                                    group-hover:bg-green-200 transform group-hover:scale-110 
                                    transition-transform duration-300">
                      <Target className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-2 md:mb-3">
                      Impact Projects
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Tell us what you're looking for so we can find the perfect match
                    </p>
                  </div>
                </div>

  {/* Step -3 */}
                <div className="relative bg-gradient-to-br from-white to-green-50 
                                p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl 
                                transform hover:scale-105 transition-all duration-300 
                                border border-green-100 group">
                  <div className="absolute -top-3 md:-top-4 left-6 md:left-8">
                    <div className="bg-green-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full 
                                    flex items-center justify-center font-bold text-xs md:text-sm shadow-md">
                      3
                    </div>
                  </div>
                  <div className="mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-xl 
                                    flex items-center justify-center mb-3 md:mb-4 
                                    group-hover:bg-green-200 transform group-hover:scale-110 
                                    transition-transform duration-300">
                      <Award className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-yellow-500 mb-2 md:mb-3">
                      Grow & Impact
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Start your Virtual internship and gain a career advantage
                    </p>
                  </div>
               </div >
             </div>
              <div className="flex justify-center  px-3 py-10  ">
                <button className="bg-white hover:bg-gray-400 text-lg text-green  px-11 py-4 rounded-2xl  font-medium transition-colors shadow-gray ">
                      Enroll NoW
                    </button>
                    </div>

       </div>
      </section>
    </div>
  )
}

export default Section3
