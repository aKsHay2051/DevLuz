import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Services</h2>
            <p className="text-gray-600">
              DevLuz offers web development services including full-stack development, landing pages, and backend solutions. 
              We are committed to delivering high-quality work and collaborating closely with clients to achieve the best possible outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Project Terms</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Project scope and deliverables will be clearly defined before work begins to ensure transparency.</li>
              <li>Any changes to the project scope may impact cost and timeline, but we will always communicate these adjustments promptly.</li>
              <li>Final approval from the client is required before project completion to ensure satisfaction.</li>
              <li>Payment terms will be discussed and mutually agreed upon before starting the project.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Intellectual Property</h2>
            <p className="text-gray-600">
              Clients receive full rights to the final work upon complete payment. DevLuz may showcase completed projects 
              in portfolios or promotional materials unless otherwise agreed upon.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Communication</h2>
            <p className="text-gray-600">
              Communication will be through agreed channels. We aim to respond within 24-48 business hours and maintain clear, 
              transparent communication throughout the project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Termination</h2>
            <p className="text-gray-600">
              If either party needs to end the agreement, a written notice is required. In such cases, payment will be required 
              for the work completed up to that point. We will ensure a smooth handover and offer support to transition the project if needed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              We are committed to providing reliable services, but in rare cases where unforeseen issues arise, we will work 
              proactively with clients to find reasonable solutions. While we cannot be responsible for indirect losses such as 
              business downtime or lost revenue, our goal is to resolve any concerns effectively and professionally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Refund Policy</h2>
            <p className="text-gray-600">
              We believe in fair and transparent dealings. Refunds will be considered on a case-by-case basis, ensuring fairness for both parties. 
              If work has begun, partial refunds may be issued based on the completed progress. Once a project is completed and approved by the client, 
              refunds will not be available. However, we are open to discussing concerns and making reasonable adjustments where possible.
            </p>
          </section>

          <div className="text-sm text-gray-500 border-t pt-4">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Terms;
