import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] -top-48 right-0 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute w-[500px] h-[500px] top-48 -left-48 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.04),transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent sm:text-4xl mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full">
                <span className="text-3xl text-white">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900">Full Stack Developer</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a self-taught developer passionate about building modern web applications. Through dedicated learning and hands-on experience, I've developed expertise in both frontend and backend technologies.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <span className="inline-block w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Experience & Skills
              </h3>
              <ul className="space-y-4">
                {[
                  '1+ year of hands-on development experience',
                  'Built 5+ full-stack projects from concept to deployment',
                  'Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js)',
                  'Experience with modern development tools and practices'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-200 transition-colors duration-200">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <span className="inline-block w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              What I Do
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I specialize in building scalable web applications with a focus on clean code, performance, and user experience. From responsive frontends to robust backend systems, I enjoy tackling complex problems and turning ideas into reality.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Let's Work Together
            <svg className="ml-2 -mr-1 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 