import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Simple, fair terms for working together on your project
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. What We Do</h2>
              <p className="text-gray-600 leading-relaxed">
                DevLuz is a small web development team that creates custom websites, web applications, 
                and provides technical consulting. We're just starting out but committed to delivering 
                quality work. Every project starts with a clear conversation about what you need and 
                what we can deliver.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How Payment Works</h2>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p>• We ask for 30-50% upfront to get started (we're flexible based on project size)</p>
                <p>• The rest is due when we finish and you're happy with the work</p>
                <p>• For ongoing work, we bill monthly</p>
                <p>• If payment is more than 30 days late, we may pause work on future projects</p>
                <p>• We understand cash flow challenges - just talk to us if you need to work something out</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Project Timelines</h2>
              <p className="text-gray-600 leading-relaxed">
                We'll give you our best estimate on timing, but we're learning too! If requirements 
                change or we run into unexpected challenges, we'll let you know right away. We believe 
                in honest communication - if something's taking longer, we'll explain why and adjust 
                expectations together.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Who Owns What</h2>
              <p className="text-gray-600 leading-relaxed">
                Once you've paid in full, the custom code we write for your project is yours! 
                We might use general coding techniques and tools that we've learned, and we'd 
                like to showcase your project in our portfolio (with your permission). Any 
                third-party tools or libraries remain under their original licenses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. After We Launch</h2>
              <p className="text-gray-600 leading-relaxed">
                We'll fix any bugs that pop up in the first 30 days at no charge - that's on us! 
                After that, we're happy to help with updates, new features, or maintenance for 
                our standard hourly rate. We want your project to succeed long-term.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. The Fine Print</h2>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p>• We'll do our best work, but we can't guarantee your site will make you rich (we wish we could!)</p>
                <p>• If something goes wrong that's clearly our fault, we'll make it right</p>
                <p>• We're based in India and follow Indian law for any disputes</p>
                <p>• If we can't work together anymore, we'll handle it professionally and transfer everything cleanly</p>
                <p>• We take your privacy seriously and won't share your business info with anyone</p>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">Our Promise to You</h2>
              <p className="text-blue-800 leading-relaxed">
                We're a small team just starting out, which means your project gets our full attention 
                and dedication. We'll be honest about what we can do, communicate clearly throughout 
                the process, and do everything we can to make your project successful. Your success 
                helps us build our reputation, so we're genuinely invested in getting it right.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Questions about these terms? Just ask us - we're happy to explain anything!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;