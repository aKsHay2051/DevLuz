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
      title: "Let's Chat About Your Idea",
      description: "We'll have a friendly conversation about what you need and how we can help make it happen",
      icon: "☕",
      gradient: "from-blue-400 to-blue-500",
      details: [
        "Understanding your goals",
        "Discussing your budget",
        "Planning the timeline",
        "No technical jargon - just honest talk"
      ]
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "We'll create a plan and show you exactly what we're going to build before we start coding",
      icon: "📋",
      gradient: "from-indigo-400 to-indigo-500",
      details: [
        "Simple wireframes you'll understand",
        "Clear project milestones",
        "Regular check-ins with you",
        "Adjustments based on your feedback"
      ]
    },
    {
      number: "03",
      title: "Building Your Solution",
      description: "Time to code! We'll keep you updated every step of the way and show you progress regularly",
      icon: "⚡",
      gradient: "from-purple-400 to-purple-500",
      details: [
        "Clean, maintainable code",
        "Weekly progress updates",
        "Testing as we go",
        "You can see it taking shape"
      ]
    },
    {
      number: "04",
      title: "Launch & We've Got Your Back",
      description: "We'll help you go live and make sure everything works perfectly. Then we're here if you need us",
      icon: "🚀",
      gradient: "from-pink-400 to-purple-500",
      details: [
        "Smooth deployment",
        "We'll teach you how to use it",
        "Quick fixes if anything goes wrong",
        "Ongoing support when you need it"
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
            How We Work Together
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A straightforward process that keeps you involved every step of the way
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
        
        {/* Personal touch section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With a Small Team Like Ours?</h3>
            <p className="text-lg text-gray-600 mb-8">
              We may be just getting started, but that means you get our full attention and dedication to making your project successful.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-900 mb-2">100% Focus</h4>
                <p className="text-sm text-gray-600">Every project gets our complete attention</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-semibold text-gray-900 mb-2">Direct Communication</h4>
                <p className="text-sm text-gray-600">You talk directly to the developers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="font-semibold text-gray-900 mb-2">Growing Together</h4>
                <p className="text-sm text-gray-600">Your success helps us build our reputation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;