import React from 'react'

function Section4() {
  return (
      <div>
          <section className="bg-white pt-12 pb-32 px-4 md:px-16 mb-24 ">
              <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                      Learn More About How Virtual Internship Work
                    </h1>
      </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid md:grid-cols-2 gap-y-12 gap-x-24">
      
{/* Left Top Video in 1st */}
       <div className="flex justify-start">
       <div className="w-[90%] aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/D8Z2na5LFmw"
                  title="Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
        <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#00b1aa]">
                What is a Virtual Internship ?
            </h3> <br/>
    
          <p className="text-base md:text-lg lg:text-xl text-gray mb-6 md:mb-8  mx-auto ">Find out everything you need to know about how Virtual internship Work .</p>
          </div>
          </div>
        
      </div>

      {/* Right Top Video  2nd */}
      <div className="flex justify-end">
        <div className="w-[90%] aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/01r-_IondVY"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#00b1aa]">
            What's included in a Virtual Internship ?
         </h3> <br/>
    
          <p className="text-base md:text-lg lg:text-xl text-gray mb-6 md:mb-8  mx-auto ">Discover what you can expect to be includes in a Virtual internship program.</p>
          </div>
           </div>
          
      </div>

      {/* Left Bottom Video */}
      <div className="flex justify-start">
        <div className="w-[90%] aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/D8Z2na5LFmw"
            title="Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#00b1aa]">
            Why you should do a Virtual internship ?
         </h3> <br/>
    
          <p className="text-base md:text-lg lg:text-xl text-gray mb-6 md:mb-8  mx-auto ">Alumni from the virtual internships program share their experiences and what it was like to do an internship remotely .</p>
          </div>
        </div>
      </div>

      {/* Right Bottom Video */}
      <div className="flex justify-end">
        <div className="w-[90%] aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/01r-_IondVY"
            title="Video 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#00b1aa]">
           How to apply for a virtual internship ?
         </h3> <br/>
    
          <p className="text-base md:text-lg lg:text-xl text-gray mb-6 md:mb-8  mx-auto ">
            Find out how to apply for a virtual internship and gain real-world work experience in a matter in a few steps .</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Section4
