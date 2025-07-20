import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { logEvent } from '../utils/analytics';


const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER?.replace(/\D/g, '') || '';

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg }
      });
    }
  };

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // Track form submission attempt
    logEvent('Contact', 'Form Submit', 'Contact Form');

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_name: 'DevLuz', // You can customize this
      };


       await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      

      handleServerResponse(true, "Thanks for reaching out! We're excited to hear from you and will get back to you within 24 hours.");
    } catch (error) {
      console.error('Failed to send email:', error);
      handleServerResponse(
        false, 
        error.message || "Oops! Something went wrong. Please try again or reach out via WhatsApp - we're always available there!"
      );
    }
  };

  const handleWhatsAppClick = () => {
    logEvent('Contact', 'Click', 'WhatsApp Button');
    // ... existing logic
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-8 right-8 z-50
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-green-500 hover:bg-green-600
          text-white shadow-lg
          transition-all duration-300 hover:scale-110
          hover:shadow-xl
          group
        "
        onClick={handleWhatsAppClick}
      >
        <svg 
          className="w-7 h-7" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="
          absolute right-16 
          bg-white text-gray-700 
          px-4 py-2 rounded-lg shadow-lg
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-opacity duration-300
          whitespace-nowrap
          text-sm font-medium
        ">
          Quick chat with us!
        </span>
      </a>

      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 -top-48 right-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute w-96 h-96 bottom-48 -left-48 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent sm:text-4xl">
              Ready to Start Something Great?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We'd love to hear about your project! Let's chat and see how we can help bring your ideas to life.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Quick response guaranteed - we're always excited to connect with new clients!
            </p>
          </div>

          {/* Divider */}
          <div className="mt-12 mb-8 flex items-center justify-center">
            <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="mx-4 text-gray-400">or reach out directly</span>
            <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className={`
                    peer w-full px-4 py-3 rounded-lg border-2 
                    bg-white/70 backdrop-blur-sm
                    transition-all duration-300 outline-none
                    border-gray-200 focus:border-blue-400 focus:shadow-lg
                  `}
                  placeholder=" "
                  disabled={status.submitting}
                />
                <label
                  htmlFor="name"
                  className={`
                    absolute left-4 -top-2.5 text-sm bg-white px-2
                    transition-all duration-200 pointer-events-none
                    ${formState.name ? 'text-gray-600' : 'text-gray-500'}
                  `}
                >
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className={`
                    peer w-full px-4 py-3 rounded-lg border-2
                    bg-white/70 backdrop-blur-sm
                    transition-all duration-300 outline-none
                    border-gray-200 focus:border-blue-400 focus:shadow-lg
                  `}
                  placeholder=" "
                  disabled={status.submitting}
                />
                <label
                  htmlFor="email"
                  className={`
                    absolute left-4 -top-2.5 text-sm bg-white px-2
                    transition-all duration-200 pointer-events-none
                    ${formState.email ? 'text-gray-600' : 'text-gray-500'}
                  `}
                >
                  Email Address
                </label>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className={`
                    peer w-full px-4 py-3 rounded-lg border-2
                    bg-white/70 backdrop-blur-sm
                    transition-all duration-300 outline-none resize-none
                    border-gray-200 focus:border-blue-400 focus:shadow-lg
                  `}
                  placeholder=" "
                  disabled={status.submitting}
                />
                <label
                  htmlFor="message"
                  className={`
                    absolute left-4 -top-2.5 text-sm bg-white px-2
                    transition-all duration-200 pointer-events-none
                    ${formState.message ? 'text-gray-600' : 'text-gray-500'}
                  `}
                >
                  Tell us about your project
                </label>
              </div>

              {/* Status Message */}
              {status.info.msg && (
                <div className={`
                  text-sm px-4 py-3 rounded-lg
                  ${status.info.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}
                  animate-fade-in
                `}>
                  {status.info.msg}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  // disabled={status.submitting}
                  className={`
                    relative w-full sm:w-auto px-8 py-3 rounded-lg font-medium text-white
                    transition-all duration-300 transform
                    ${status.submitting ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'}
                    hover:shadow-lg hover:-translate-y-1
                    disabled:cursor-not-allowed disabled:hover:transform-none
                  `}
                >
                  <span className={`transition-opacity duration-200 ${status.submitting ? 'opacity-0' : 'opacity-100'}`}>
                    {status.submitted ? 'Message Sent! 🎉' : 'Let\'s Connect!'}
                  </span>
                  {status.submitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 