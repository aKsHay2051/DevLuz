import React, { useState, useEffect } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('process');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Deep dive into your business needs and objectives",
      icon: "🎯",
      gradient: "from-blue-400 to-blue-500",
      details: [
        "Requirements gathering",
        "Technical architecture",
        "Project timeline",
        "Resource planning"
      ]
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating intuitive and engaging user experiences",
      icon: "✨",
      gradient: "from-indigo-400 to-indigo-500",
      details: [
        "UI/UX design",
        "Interactive prototypes",
        "Design system",
        "User feedback"
      ]
    },
    {
      number: "03",
      title: "Development",
      description: "Building with modern technologies and best practices",
      icon: "⚡",
      gradient: "from-purple-400 to-purple-500",
      details: [
        "Clean code",
        "Regular updates",
        "Quality assurance",
        "Performance optimization"
      ]
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Ensuring smooth deployment and ongoing maintenance",
      icon: "🚀",
      gradient: "from-pink-400 to-purple-500",
      details: [
        "Deployment",
        "Maintenance",
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 -top-48 -right-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute w-96 h-96 bottom-48 -left-24 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent sm:text-4xl">
            Development Process
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A systematic approach to bringing your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-100 transform -translate-y-1/2"></div>
              )}

              <div className={`
                relative p-6 bg-white rounded-xl shadow-lg
                transform transition-all duration-300
                hover:shadow-xl hover:-translate-y-2
                ${activeStep === index ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}
              `}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>

                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">{step.number}</span>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="text-3xl mb-4 transform transition-transform group-hover:scale-110 duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {step.description}
                  </p>

                  {/* Details list */}
                  <ul className="mt-4 space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className={`
                          flex items-center text-sm text-gray-500
                          transition-all duration-300
                          ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                        `}
                        style={{ transitionDelay: `${detailIndex * 100}ms` }}
                      >
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 