import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20"> {/* Subtle brand background */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-xl p-8">
          {/* Main heading with brand gradient */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent mb-4">
            Our Working Terms
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Simple, fair terms for working together on your project. These terms help ensure a smooth collaboration for both of us.
          </p>

          <div className="space-y-8">
            <section>
              {/* Section headings with a stronger blue */}
              <h2 className="text-xl font-semibold text-blue-700 mb-4">1. What We Do</h2>
              <p className="text-gray-700 leading-relaxed"> {/* Slightly darker gray for readability */}
                DevLuz is a dedicated web development team focused on creating custom websites, web applications,
                and providing technical consulting. We're passionate about delivering quality work and building
                strong relationships. Every project begins with a clear discussion about your specific needs,
                goals, and how we can best achieve them together.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">2. How Payment Works</h2>
              <div className="text-gray-700 leading-relaxed space-y-2"> {/* Slightly darker gray for readability */}
                <p>• We usually request a **small initial deposit** to get started. This helps us confirm your commitment and covers initial setup costs. The exact amount will be discussed and agreed upon for each project.</p>
                <p>• The rest of the payment is due when we finish the project and you are happy with the results.</p>
                <p>• For bigger projects, we might agree on payments as we complete different parts of the work.</p>
                <p>• We understand that things happen, so if you ever have a problem with payment, please just talk to us! Open communication helps us find solutions together.</p>
                <p>• All payment details will be clearly laid out in our project agreement, so there are no surprises.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">3. Project Timelines & Communication</h2>
              <p className="text-gray-700 leading-relaxed"> {/* Slightly darker gray for readability */}
                We'll give you our **best estimate for when your project will be ready**. Creating custom web solutions can sometimes involve unexpected twists, but we promise to always keep you in the loop. If anything changes with the timeline, we'll explain why and discuss new expectations with you right away. Your quick feedback and providing us with content we need (like text or images) are super important to keep your project moving smoothly!
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">4. Who Owns What</h2>
              <p className="text-gray-700 leading-relaxed"> {/* Slightly darker gray for readability */}
                Once you've fully paid for the project, **all the custom code and unique design we've created for you is yours!** We might use general coding methods we've learned, and we'd love to show off your project in our portfolio (only with your permission, of course!). Any tools or services from other companies (like specific fonts or open-source libraries) will still follow their own rules.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">5. After We Launch</h2>
              <p className="text-gray-700 leading-relaxed"> {/* Slightly darker gray for readability */}
                We'll happily fix any bugs or issues that appear in the first **30 days** after your project goes live, at no extra cost to you. This covers problems that were part of our original development work. If you need updates, new features, or ongoing support after this period, we're here to help at our regular rates, or we can discuss a separate support plan. We want your project to succeed for the long run!
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">6. Important Notes</h2>
              <div className="text-gray-700 leading-relaxed space-y-2"> {/* Slightly darker gray for readability */}
                <p>• We'll always do our very best work, but we can't promise specific business results (like getting lots of sales or being #1 on Google). The success of your business depends on many things, not just the website itself.</p>
                <p>• If something goes wrong that's clearly our mistake, we are committed to making it right. Your satisfaction is really important to us.</p>
                <p>• If, for any reason, we can't continue working on your project, we'll make sure all completed work is handed over to you smoothly, and we'll discuss a fair way forward regarding any payments for work already done.</p>
                <p>• We take your privacy seriously. Any information you share with us about your business or project will be kept confidential.</p>
                <p>• These terms are a guide for our collaboration. We might update them from time to time, and we'll always let our active clients know about important changes.</p>
              </div>
            </section>

            {/* Our Commitment section with vibrant emerald theme */}
            <section className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h2 className="text-lg font-semibold text-emerald-800 mb-3">Our Commitment</h2>
              <p className="text-emerald-700 leading-relaxed">
                As a growing team, your project receives our utmost attention and dedication. We pride ourselves on clear, honest communication throughout
                every stage of development. We are genuinely invested in your success, as it helps us build our reputation and portfolio. We're excited
                to collaborate with you and bring your digital vision to life!
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
                Questions about these terms? Please don't hesitate to reach out – we're happy to clarify anything!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;