import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-gray-900 text-white py-8 md:py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center mb-4">
                 <img
                    src="/image1.png"   
                    alt="Logo"
                    className="w-8 h-8 md:w-8 md:h-8 mr-2"
                  />
                  <a>
                  <span className = " text-xl md:text-2xl font-style:italic text-black-700"> ENCYCDATA  </span>
                  </a>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
               Building a brighter , Greener future with students at the center.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">For Interns</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors">Find Internships</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Sustainability Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">For Organizations</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="https://sites.google.com/encycdata.com/encycdata-privacy-policy/home" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Learn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
