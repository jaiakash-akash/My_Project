import React from 'react'
import { Play, ArrowRight } from "lucide-react";
import Navbar from './Navbar';
import { Users, Target, Award } from "lucide-react";
import Footer from './Footer';


function Applypage() {
  const logos = [
  "/logos/oxford.png",
  "/logos/aspire.png",
  "/logos/newmexico.png",
  "/logos/deel.png",
  "/logos/aut.png",
  "/logos/dentons.png",
  "/logos/depaul.png",
];
  return (
     <div>
      <Navbar/>
      {/* 1st section */}
     <section className="relative py-20 md:py-28 bg-[url('/image3.jpeg')] bg-cover bg-center bg-no-repeat ">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight text-left ">
                The only platform that <span>guarantees </span> real-world work experience across the globe
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl leading-relaxed text-left">
              Shaping tomorrow's workforce: one Internship at a time 
              </p>

        {/* Buttons */}
        <div className="flex flex-wrap iteam-center gap-4 mt-4">
        <button className=" font-bold flex items-center gap-2 bg-orange-500 text white  px-6 md:px-8 py-3 md:py-4  rounded-lg hover:bg-orange-600 transition"
          >
           Companies:Hire
          </button>
          <button className= " border bg-white hover:bg-green-700 text-black px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
            
           Educators:Partner
          </button><button className="bg-yellow-500 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
           
            Interns:Apply
          </button>
        </div>
      </div>
    </section>
{/* 2nd  section */}
    <section className="bg-[#007b8b] pt-12 pb-32 px-4 md:py-28 md:px-16 mb-20 bg-gradient-to-tr from-yellow-400/30 via-[#022024] to-white/20">
    <div>
      <h1 className=" not-italic tracking-tight text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-relaxed ">
          The Future of Work is Changing .<br/>
          Are You Ready ?
        </h1>
        <br/>
        <p className=" italic text-3xl text-center md:text-lg lg:text-xl text-gray-100 mb-6 md:mb-8  mx-auto leading-relaxed px-4">
          As AI technology reshapes industries ,work-based learning is more essential than ever. Real-world experience not only empowers learners but also equips employer with fresh talent ready ti
        </p>
    </div>
    </section>
 {/* 3 section */}
      <section className="py-12 md:py-13 pb-0 mb-0 bg-[#fcfcfc] text-[#dbfffd]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-0 pt-0 mb-8 md:mb-16">
            <h2 className=" text-9xl md:text-4xl lg:text-5xl font-bold text-black  mb-7 md:mb-4">
              The Solution:
              <span className="text-[#00b1aa]">Virtual Internships</span>
            </h2>
            <p className="text-base md:text-lg text-gray-900 max-w-4xl mx-auto px-4">
             Connecting educators,companies,and Interns to create lasting,meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  {/* Step 1 */}
                <div className="relative  bg-white 
                                p-6 md:p-8 rounded-3xl shadow-gray-900 hover:shadow-xl 
                                transform hover:scale-105 transition-all duration-300 
                                border border-green-100 group">
                  <div className="absolute -top-3 md:-top-4 left-6 md:left-8">
                   </div>
                  <div className="mb-2 md:mb-6 bg-white">
                    <br/>
                    <h3 className="text-xl md:text-2xl font-bold text-[#00b982] text-center mb-2 md:mb-3">
                      Companies
                    </h3>
                    <br/>
                    <p className=" text-center text-sm md:text-base text-gray-600 leading-relaxed">
                      Access remote, pre-vetted interns to drive growth and strengthen your future talent pipeline.
                    </p>
                  </div>
                </div>

   {/* Step 2 */}
               <div className="relative  bg-white
                                p-6 md:p-8 rounded-3xl shadow-gray-900 hover:shadow-xl 
                                transform hover:scale-105 transition-all duration-300 
                                border border-green-100 group">
                  <div className="absolute -top-3 md:-top-4 left-6 md:left-8">
                   </div>
                  <div className="mb-2 md:mb-6 bg-white">
                    <br/>
                    <h3 className="text-xl md:text-2xl font-bold text-[#00b982] text-center mb-2 md:mb-3">
                      Educators
                    </h3>
                    <br/>
                    <p className=" text-center text-sm md:text-base text-gray-600 leading-relaxed">
                      Seamlessly embed internships into your curriculum, enhancing student employability and practical skills.
                    </p>
                  </div>
                </div>

  {/* Step -3 */}
                <div className="relative  bg-white  p-6 md:p-8 rounded-3xl shadow-gray-900 hover:shadow-xl 
                                transform hover:scale-105 transition-all duration-300  border border-green-100 group">
                  <div className="absolute -top-3 md:-top-4 left-6 md:left-8 ">
                   </div>
                  <div className="mb-2 md:mb-6">
                    <br/>
                    <h3 className="text-xl md:text-2xl font-bold text-[#00b982] text-center mb-2 md:mb-3">
                      Interns
                    </h3>
                    <br/>
                    <p className=" text-center text-sm md:text-base text-gray-600 leading-relaxed">
                     Launch your career with global experience, valuable skills, and professional connections.
                    </p>
                  </div>
                  <div/>
                </div>

       </div>
       </div>
    </section>
{/* 4th section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="not-italic tracking-tight text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-0 mb-4 md:mb-6 leading-relaxed">
             Proven Results:<span className="text- text-[#01d886]"> Global impact</span>
            </h2>
            <br/>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="not-italic tracking-tight text-center text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6 leading-relaxed">250K+</div>
              <div className="font-bold text-2xl">Global internships </div>
              <br/>
              <p className="text-base md:text-lg text-gray-600 px-4">
              Available now and growing
            </p>
            </div>
            <div className="text-center">
              <div className="not-italic tracking-tight text-center text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6 leading-relaxed">300+</div>
              <div className="font-bold text-2xl">Countries</div>
              <br/>
               <p className="text-base md:text-lg text-gray-600 px-4">
             Offering real world experience
            </p>
            </div>
            <div className="text-center">
              <div className="not-italic tracking-tight text-center text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6 leading-relaxed">98%</div>
              <div className="font-bold text-2xl">intern Satisfaction</div>
              <br/>
              <p className="text-base md:text-lg text-gray-600 px-4">
             Developing essential career skills
            </p>
            </div>
            <div className="text-center">
              <div className="not-italic tracking-tight text-center text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6 leading-relaxed">1 in 3</div>
              <div className="font-bold text-2xl ">Interns Hired</div>
              <br/>
              <p className="text-base md:text-lg text-gray-600 px-4">
            Post-program completion
            </p>
            </div>
          </div>
        </div>
      </section>
      {/* 5 th section */}
      <section className="bg-gray-800 py-12 overflow-hidden min-h-40 flex flex-col items-center justify-center">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-yellow-300 mb-4">
            Trusted by Educators and Employers Worldwide
          </h2>
          <p className="text-center font-semibold text-white max-w-5xl mx-auto mb-8">
            We connect educators and employers worldwide to provide ambitious interns
            with access to guaranteed remote internships. Our educational partners
            enable their students to boost their employability, whilst employers gain
            access to top-tier talent eager to contribute to their business to gain
            experience.
          </p>

      {/* Logo Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-12">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-28 bg-white rounded-xl shadow-md flex items-center justify-center"
            >
              <img src={logo} alt="partner logo" className="max-h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* 6th section */}
      <section className="relative py-20 md:py-28 bg-[url('/image4.jpeg')] bg-cover bg-center bg-no-repeat ">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="  text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight text-left ">
                
               <span>Get Started Today</span> <br/>
                <span className="text-[#01d886]" >with Virtual Internships! </span>  </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl leading-relaxed text-left">
             Whether you’re looking to hire interns, become an intern, or help your students get access to internships, click below to find out more and get started.

 
              </p>

        {/* Buttons */}
        <div className="flex flex-wrap iteam-center gap-4 mt-4">
        <button className=" font-bold flex items-center gap-2 bg-orange-500 text white  px-6 md:px-8 py-3 md:py-4  rounded-lg hover:bg-orange-600 transition"
          >
           Companies:Hire
          </button>
          <button className= " border bg-white hover:bg-green-700 text-black px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
            
           Educators:Partner
          </button><button className="bg-yellow-500 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
           
            Interns:Apply
          </button>
        </div>
      </div>
    </section>
   
     <Footer />
    </div>
   
  )
}

export default Applypage
