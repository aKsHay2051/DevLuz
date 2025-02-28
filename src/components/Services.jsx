import React, { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web applications with modern MERN stack",
      icon: "💻",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "React.js Frontend",
        "Node.js Backend",
        "RESTful APIs",
        "Database Integration"
      ]
    },
    {
      title: "Landing Page Development",
      description: "High-performance landing pages with modern tech",
      icon: "🚀",
      gradient: "from-green-500 to-emerald-600",
      features: [
        "Next.js/React.js",
        "Performance Optimization",
        "SEO Best Practices",
        "Analytics Integration"
      ]
    },
    {
      title: "Backend Development",
      description: "Robust and scalable server-side solutions",
      icon: "⚡",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "API Development",
        "Database Design",
        "Authentication",
        "Performance Optimization"
      ]
    },
    /* Commenting out the 4th service
    {
      title: "API & Database",
      description: "Seamless data management and integration",
      icon: "🔌",
      gradient: "from-pink-500 to-purple-600",
      features: [
        "REST/GraphQL APIs",
        "MongoDB/PostgreSQL",
        "Data Modeling",
        "Third-party Integration"
      ]
    }
    */
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 -top-48 right-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute w-96 h-96 top-48 -left-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Modern web development solutions with focus on performance
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group perspective w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                relative p-6 bg-white rounded-xl shadow-xl 
                transition-all duration-500 ease-out
                ${hoveredIndex === index ? 'transform -translate-y-2' : ''}
                hover:shadow-2xl
              `}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                
                {/* Service Icon */}
                <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`
                        flex items-center text-sm text-gray-500
                        transition-all duration-300 delay-${featureIndex * 100}
                        ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                      `}
                    >
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className={`
                  mt-6 flex items-center justify-end text-blue-600
                  transition-all duration-300
                  ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                `}>
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 