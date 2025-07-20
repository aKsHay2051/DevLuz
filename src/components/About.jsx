import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About DevLuz</h2>
          <div className="mt-4 h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Fresh Ideas, Modern Solutions
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We're a passionate team of developers just starting our journey in creating 
              amazing web applications. While we're new to the business world, we bring 
              fresh perspectives and cutting-edge skills to help small businesses and 
              startups bring their digital ideas to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Custom Web Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Modern Tech Stack</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Affordable Solutions</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Fresh</div>
                <div className="text-sm text-gray-600 mt-1">New Perspectives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Dedicated</div>
                <div className="text-sm text-gray-600 mt-1">Team Approach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Learning</div>
                <div className="text-sm text-gray-600 mt-1">& Growing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Eager</div>
                <div className="text-sm text-gray-600 mt-1">To Deliver</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;