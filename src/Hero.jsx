import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl animate-blob"></div>
        <div className="absolute top-32 -left-24 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 left-48 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="inline-block animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-8">
              Available for New Projects
              <span className="ml-2 h-2 w-2 bg-green-600 rounded-full animate-pulse"></span>
            </span>
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in-up animation-delay-200">
            <span className="block">Building Scalable &</span>
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Interactive Web Solutions
            </span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl animate-fade-in-up animation-delay-400">
            At Devluz, I specialize in crafting fast, secure, and user-friendly websites using modern web technologies.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10 animate-fade-in-up animation-delay-600">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-200 hover:scale-105 md:py-4 md:text-lg md:px-10">
                <span>Get Started</span>
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transform transition-all duration-200 hover:scale-105 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-in-up animation-delay-800">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600">4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 