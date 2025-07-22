import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            {/* Logo text color changed to deep blue */}
            <h3 className="text-xl font-bold text-blue-900">DevLuz</h3>
            <p className="mt-4 text-gray-600">
              Building modern web solutions with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            {/* Heading color changed to deep blue */}
            <h3 className="text-lg font-semibold text-blue-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                {/* Hover color changed to vibrant green */}
                <a href="#services" className="text-gray-600 hover:text-emerald-500 transition-colors duration-200">Services</a>
              </li>
              <li>
                {/* Hover color changed to vibrant green */}
                <a href="#process" className="text-gray-600 hover:text-emerald-500 transition-colors duration-200">Process</a>
              </li>
              <li>
                {/* Hover color changed to vibrant green */}
                <a href="#tech" className="text-gray-600 hover:text-emerald-500 transition-colors duration-200">Tech Stack</a>
              </li>
              <li>
                {/* Hover color changed to vibrant green */}
                <a href="/terms" className="text-gray-600 hover:text-emerald-500 transition-colors duration-200">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            {/* Heading color changed to deep blue */}
            <h3 className="text-lg font-semibold text-blue-900">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.fiverr.com/s/ZmvdGqa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 transition-colors duration-200" // Hover color changed to vibrant green
                >
                  Fiverr
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 transition-colors duration-200" // Hover color changed to vibrant green
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 hover:text-emerald-500 transition-colors duration-200" // Hover color changed to vibrant green
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} DevLuz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;