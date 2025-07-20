const Services = () => {
    const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER?.replace(/\D/g, '') || '';

  const services = [
    {
      title: "Web Application Development",
      description: "Custom web applications built with care and attention to detail. We're passionate about creating solutions that work perfectly for your needs.",
      icon: "💼",
      features: [
        "Full-Stack Development",
        "Responsive Design", 
        "Modern Technologies",
        "Personal Support"
      ],
      pricing: "Starting from ₹75,000",
      pricingRange: "₹75,000 - ₹1,50,000",
      hourlyRate: "₹5,500/hour"
    },
    {
      title: "Small Business Websites",
      description: "Professional websites for small businesses and startups. We understand budget constraints and deliver maximum value.",
      icon: "🌐",
      features: [
        "Professional Design",
        "Mobile-Friendly",
        "SEO Optimized",
        "Easy to Update"
      ],
      pricing: "Starting from ₹45,000",
      pricingRange: "₹45,000 - ₹85,000",
      hourlyRate: "₹5,500/hour"
    },
    {
      title: "API Development",
      description: "Clean, well-documented APIs for your applications. We focus on building reliable backend services that scale with your business.",
      icon: "🔗",
      features: [
        "RESTful API Design",
        "Database Integration",
        "Secure Authentication",
        "Clear Documentation"
      ],
      pricing: "Starting from ₹55,000",
      pricingRange: "₹55,000 - ₹1,20,000",
      hourlyRate: "₹5,500/hour"
    },
    {
      title: "Website Maintenance",
      description: "Keep your website running smoothly with our ongoing maintenance services. We're here when you need us.",
      icon: "🔧",
      features: [
        "Regular Updates",
        "Bug Fixes",
        "Performance Monitoring",
        "Quick Response Time"
      ],
      pricing: "₹5,500/hour",
      pricingRange: "Flexible packages available",
      hourlyRate: "₹5,500/hour"
    }
  ];

  const handleConsultation = () => {
    window.location.href=`https://wa.me/${whatsappNumber}`
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What We Can Build For You</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Quality web development services from a small, dedicated team based in India who cares about your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-4">
                <div className="text-lg font-semibold text-blue-600">Let's Discuss Your Project</div>
                <div className="text-xs text-gray-500 mt-1">
                  Custom pricing based on your specific needs
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Flexible payment options available
                </div>
                <button onClick={handleConsultation} className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                  Get Free Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced trust building section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Our Small Team Delivers Big Value</h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-600">
              <div>
                <div className="text-2xl mb-2">🤝</div>
                <strong className="text-gray-900">Direct Communication</strong>
                <p>No account managers - you work directly with the developers</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💰</div>
                <strong className="text-gray-900">Competitive Rates</strong>
                <p>Lower overhead means better prices for you</p>
              </div>
              <div>
                <div className="text-2xl mb-2">⚡</div>
                <strong className="text-gray-900">Agile & Fast</strong>
                <p>Small team = quick decisions and faster delivery</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🎯</div>
                <strong className="text-gray-900">Focused Attention</strong>
                <p>Your project gets our full focus, not divided attention</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-800 text-sm">
                <strong>Fair & Transparent Pricing:</strong> We believe in honest pricing based on project scope. 
                Every project is unique, so we'll discuss your specific needs and budget to find the best solution.
              </p>
            </div>
            
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-800 text-sm">
                <strong>Free Consultation:</strong> Let's discuss your project goals and requirements. 
                We'll provide a detailed proposal with clear pricing - no hidden costs, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;