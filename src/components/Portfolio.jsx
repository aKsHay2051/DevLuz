    import React from "react";
    import ReactDOM from "react-dom";
    import {
      ExternalLink,
      Github,
      Smartphone,
      Globe,
      Database,
      Shield,
      Zap,
      Users,
    } from "lucide-react";

    const Portfolio = () => {
      const projects = [
        {
          title: "Commingle - Social Media Platform",
          problem:
            "Modern users need a comprehensive social media platform that combines real-time communication, content sharing, and social networking in one seamless experience.",
          solution:
            "Built a full-featured social media platform using the MERN stack with Socket.IO for real-time chat, user authentication, and dynamic content management.",
          features: [
            { icon: Shield, text: "Secure JWT authentication system" },
            { icon: Zap, text: "Real-time chat with Socket.IO" },
            { icon: Users, text: "Friend requests & connections" },
            { icon: Database, text: "Post creation with media uploads" },
          ],
          techStack: [
            "React.js",
            "Node.js",
            "MongoDB",
            "Socket.IO",
            "TailwindCSS",
            "Cloudinary",
          ],
          demoUrl: "https://comingle.vercel.app",
          githubUrl: "https://github.com/AkShAy21211/Comingle-Client",
          image: "/commingle.png",
        },
        {
          title: "VoltTorn - E-commerce Platform",
          problem:
            "Small to medium businesses need a robust e-commerce solution with comprehensive admin controls, multiple payment methods, and detailed analytics.",
          solution:
            "Developed a complete e-commerce platform with Express.js and MongoDB featuring user management, payment integration, inventory control, and sales reporting.",
          features: [
            { icon: Shield, text: "Secure payment with Razorpay & COD" },
            { icon: Database, text: "Advanced inventory management" },
            { icon: Users, text: "Customer & admin dashboards" },
            { icon: Zap, text: "Real-time order tracking" },
          ],
          techStack: ["Express.js", "MongoDB", "Razorpay", "Mailchimp", "bcrypt"],
          demoUrl: "#",
          githubUrl: "https://github.com/AkShAy21211/VoltTorn-E-commerce",
          image: "",
        },
        {
          title: "QuickSupport - Help Desk System",
          problem:
            "Organizations struggle with managing customer support requests efficiently, lacking proper ticket tracking and user-friendly interfaces.",
          solution:
            "Created a comprehensive help desk system with user authentication, ticket management, and dashboard analytics for streamlined customer support.",
          features: [
            { icon: Shield, text: "Secure user authentication" },
            { icon: Database, text: "Ticket tracking with unique IDs" },
            { icon: Users, text: "User-friendly dashboard interface" },
            { icon: Globe, text: "Responsive design for all devices" },
          ],
          techStack: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],
          demoUrl: "#",
          githubUrl: "https://github.com/AkShAy21211/QuickSupport-client",
          image: "/quickSupport.png",
        },
      ];

      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                Our Work ✨
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Projects That Make
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real solutions for real problems. Each project showcases our
                commitment to building functional, scalable, and user-friendly
                applications.
              </p>
            </div>
            {/* Projects Grid */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Image - Conditionally render if image exists */}
                  {project.image && project.image !== "" && (
                    <div className="lg:w-1/2">
                      <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={project.title || "Project image"}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                          />
                        </div>
                        {/* Hover overlay with buttons */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                            {project.demoUrl && project.demoUrl !== "#" && (
                              <a
                                href={project.demoUrl}
                                className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-4 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </a>
                            )}
                            {project.githubUrl && project.githubUrl !== "#" && (
                              <a
                                href={project.githubUrl}
                                className="flex-1 bg-gray-800/90 hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center gap-2"
                              >
                                <Github className="w-4 h-4" />
                                GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className={project.image && project.image !== "" ? "lg:w-1/2" : "w-full"}>
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {project.title}
                      </h3>

                      {/* Problem Statement */}
                      <div>
                        <h4 className="text-lg font-semibold text-red-600 mb-2">
                          🎯 Problem
                        </h4>
                        <p className="text-gray-700">{project.problem}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-lg font-semibold text-green-600 mb-2">
                          💡 Solution
                        </h4>
                        <p className="text-gray-700">{project.solution}</p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">
                          ⚡ Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                            >
                              <feature.icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {feature.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-lg font-semibold text-purple-600 mb-3">
                          🔧 Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {project.demoUrl && project.demoUrl !== "#" && (
                          <a
                            href={project.demoUrl}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="w-5 h-5" />
                            View Live Demo
                          </a>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                          >
                            <Github className="w-5 h-5" />
                            View GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Build Your Next Project?
                </h3>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss your ideas and create something amazing together. We
                  bring the same dedication and quality to every project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-8 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="#services"
                    className="border-2 border-gray-300 text-gray-700 py-3 px-8 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                  >
                    View Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Portfolio