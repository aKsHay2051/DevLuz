import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
  ];

  return (
    <section id="tech" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Technologies We Use</h2>
          <p className="mt-4 text-gray-600">
            Modern, reliable technologies for robust solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-700">
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 