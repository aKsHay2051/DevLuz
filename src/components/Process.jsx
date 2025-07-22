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
      gradient: "from-blue-500 to-blue-600", // Themed gradient
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
      gradient: "from-emerald-500 to-emerald-600", // Themed gradient
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
      gradient: "from-blue-600 to-blue-700", // Themed gradient
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
      // Blend of blue and emerald for the final step
      gradient: "from-emerald-600 to-blue-700", // Themed gradient
      details: [
        "Smooth deployment",
        "We'll teach you how to use it",
        "Quick fixes if anything goes wrong",
        "Ongoing support when you need it"
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"> {/* Section background themed */}
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Blob colors adjusted to match logo palette */}
        <div className="absolute w-96 h-96 -top-48 -right-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute w-96 h-96 bottom-48 -left-24 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {/* Main heading gradient to brand colors */}
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent sm:text-4xl">
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
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-100 transform -translate-y-1/2"></div>
              )}

              <div className={`
                relative p-6 bg-white rounded-xl shadow-lg
                transform transition-all duration-300
                hover:shadow-xl hover:-translate-y-2 group
                ${activeStep === index ? 'ring-2 ring-emerald-500 ring-opacity-50' : ''} {/* Themed ring */}
              `}>
                {/* Background gradient (hidden by default, shows on hover) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div> {/* Increased opacity slightly for more visible hover */}

                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-700">{step.number}</span> {/* Themed number color */}
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="text-3xl mb-4 transform transition-transform group-hover:scale-110 duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300"> {/* Themed hover title color */}
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
                        <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Themed checkmark icon */}
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
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto"> {/* Themed background */}
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