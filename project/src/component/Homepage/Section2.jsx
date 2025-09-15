import React from 'react'
import { CheckCircle } from "lucide-react";

function Section2() {
  return (
    <div>
        
      <section className="bg-gray-100 pt-12 pb-32 px-4 md:px-16 mb-24 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
 {/* Left side in text j*/}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose a <span className="text-teal-600">Virtual Internship?</span>
          </h2>
          <ul className="space-y-5 text-gray-700">
            {[
              "Gain real-world work experience in your chosen industry and region.",
              "Access expert coaching, support, and award-winning courses to enhance your skills and boost your career prospects.",
              "Put your learning into practice with hands-on experience. College credit is also available.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>

  {/* Right  side Video */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/D8Z2na5LFmw"
            title="Why Intern from Home: 5 Benefits of Remote Work"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Section2
