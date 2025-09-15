import React from 'react'

function Navbar() {
  return (
     <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <a
                      href="https://encycdata.com/"   
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center cursor-pointer"
                    >
                      <img
                    src="/image1.png"   
                    alt="Logo"
                    className="w-8 h-8 md:w-8 md:h-8 mr-2"
                  />
                  <span className = " text-xl md:text-2xl font-bold text-gray-600"> ENCYCDATA  INTERNSHIP </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-24 flex items-baseline space-x-4 xl:space-x-8">
                <a href="#" className="text-gray-700 hover:text-green-600 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">Companies</a>
                <a href="#" className="text-gray-700 hover:text-green-600 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">Educators</a>
                <a href="#" className="text-gray-700 hover:text-green-600 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">Intern</a>
                <a href="#" className="text-gray-700 hover:text-green-600 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">Resources</a>
                <a href="#" className="text-gray-700 hover:text-green-600 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">About Us</a>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
            
              <button className="bg-green-600 hover:bg-green-700 text-white px-3 md:px-6 py-2  rounded-2xl text-xs md:text-sm font-medium transition-colors shadow-md">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
