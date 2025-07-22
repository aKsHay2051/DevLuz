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
    // You can add more technologies here if needed
    // { name: "GraphQL", category: "Backend" },
    // { name: "Sass/Less", category: "Frontend" },
  ];

  // Helper function to determine color based on category (optional, for more nuanced theming)
  // const getCategoryColor = (category) => {
  //   switch (category) {
  //     case 'Frontend': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  //     case 'Backend': return 'bg-blue-50 text-blue-700 border-blue-200';
  //     case 'Database': return 'bg-purple-50 text-purple-700 border-purple-200';
  //     case 'Cloud': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
  //     case 'DevOps': return 'bg-red-50 text-red-700 border-red-200';
  //     default: return 'bg-gray-50 text-gray-700 border-gray-200';
  //   }
  // };

  return (
    <section id="tech" className="py-20 bg-gradient-to-br from-white to-blue-50"> {/* Section background subtly themed */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Main heading gradient to brand colors */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent sm:text-4xl">
            Technologies We Use
          </h2>
          <p className="mt-4 text-gray-600">
            Modern, reliable technologies for robust solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`
                bg-white px-4 py-2 rounded-full shadow-md
                border border-blue-200 text-sm font-semibold
                text-blue-700
                transition-all duration-200 transform
                hover:scale-105 hover:shadow-lg hover:border-emerald-300 hover:text-emerald-700
                cursor-pointer
              `}
              // Example of using category colors if you uncomment the getCategoryColor function
              // className={`px-4 py-2 rounded-full shadow-sm text-sm font-medium ${getCategoryColor(tech.category)}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;