import React from 'react';

const TechStack = () => {
  const technologies = [
    // Core
    { name: "React.js", icon: "⚛️", gradient: "from-cyan-500 to-blue-500", category: "Core" },
    { name: "Next.js", icon: "▲", gradient: "from-black to-gray-800", category: "Core" },
    { name: "Node.js", icon: "🟢", gradient: "from-green-500 to-emerald-600", category: "Core" },
    { name: "TypeScript", icon: "TS", gradient: "from-blue-600 to-blue-700", category: "Core" },
    
    // Backend & Database
    { name: "Express.js", icon: "🚂", gradient: "from-gray-600 to-gray-700", category: "Backend & Database" },
    { name: "MongoDB", icon: "🍃", gradient: "from-green-600 to-emerald-700", category: "Backend & Database" },
    { name: "PostgreSQL", icon: "🐘", gradient: "from-blue-700 to-indigo-700", category: "Backend & Database" },
    { name: "Redis", icon: "⚡", gradient: "from-red-600 to-red-700", category: "Backend & Database" },

    // Tools & Infrastructure
    { name: "Docker", icon: "🐳", gradient: "from-blue-400 to-blue-500", category: "Tools & Infrastructure" },
    { name: "AWS", icon: "☁️", gradient: "from-orange-400 to-orange-500", category: "Tools & Infrastructure" },
    { name: "Git", icon: "📦", gradient: "from-orange-600 to-red-600", category: "Tools & Infrastructure" },
    { name: "Jest", icon: "🃏", gradient: "from-red-500 to-red-600", category: "Tools & Infrastructure" },
    { name: "Socket.IO", icon: "🔌", gradient: "from-green-500 to-emerald-600", category: "Tools & Infrastructure" },
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section id="tech" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="mt-2 text-gray-600">
            Modern technologies for scalable solutions
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-lg font-medium text-gray-800 mb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, techIndex) => (
                    <div key={techIndex} className="group">
                      <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                        <span className="text-xl mr-3">{tech.icon}</span>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          And more tools as needed for specific project requirements
        </div>
      </div>
    </section>
  );
};

export default TechStack; 