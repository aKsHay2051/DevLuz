import React from 'react';

const Hero = () => {
  const availabilityStatus = process.env.REACT_APP_AVAILABILITY_STATUS || 'available';

  
  const getStatusConfig = (status) => {
    switch (status) {
      case 'busy':
        return {
          message: 'Currently Not Available',
          styles: 'bg-red-100 text-red-800',
          dotStyle: 'bg-red-500'
        };
      case 'limited':
        return {
          message: 'Limited Availability',
          styles: 'bg-yellow-100 text-yellow-800',
          dotStyle: 'bg-yellow-500'
        };
      case 'available':
      default:
        return {
          message: 'Available for New Projects',
          styles: 'bg-green-100 text-green-800',
          dotStyle: 'bg-green-500'
        };
    }
  };

  const statusConfig = getStatusConfig(availabilityStatus);



  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl animate-blob"></div>
        <div className="absolute top-32 -left-24 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 left-48 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.04),transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="inline-block animate-fade-in-up">
            {/* <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium ${statusConfig.styles} mb-8 shadow-sm hover:shadow-md transition-shadow duration-200`}>
              {statusConfig.message}
              <span className={`ml-2 h-2 w-2 rounded-full ${statusConfig.dotStyle} animate-pulse`}></span>
            </span> */}
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
          
          {/* Enhanced CTA buttons */}
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10 animate-fade-in-up animation-delay-600">
            <div className="rounded-md shadow-lg">
              <a href="#contact" 
                className="group relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-300 hover:scale-105 md:py-4 md:text-lg md:px-10 overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-indigo-600 to-blue-600 transition-transform duration-300"></div>
                <svg className="relative z-10 ml-2 -mr-1 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            <div className="mt-3 rounded-md shadow-lg sm:mt-0 sm:ml-3">
              <a href="#services" 
                className="group w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 md:py-4 md:text-lg md:px-10">
                <span>Learn More</span>
                <svg className="ml-2 -mr-1 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-in-up animation-delay-800">
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
        </div> */}
      </div>
    </div>
  );
};

export default Hero; 