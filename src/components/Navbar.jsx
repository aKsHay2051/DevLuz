import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent' // Slightly more opaque when scrolled
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* DevLuz logo text with brand gradient */}
            <span className={`text-2xl font-bold bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent transform transition-all duration-300 ${
              isScrolled ? 'scale-90' : ''
            }`}>
              DevLuz
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden mobile-menu-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className={`
                inline-flex items-center justify-center p-2 rounded-lg
                transition-all duration-300
                ${isScrolled ? 'hover:bg-blue-50' : 'hover:bg-white/20'} {/* Hover color slightly themed */}
                ${isOpen ? 'bg-blue-50' : ''} {/* Active background slightly themed */}
              `}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                {/* Hamburger icon lines using a darker gray for contrast, or a subtle blue */}
                <span className={`
                  absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out
                  ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}
                `}></span>
                <span className={`
                  absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out
                  ${isOpen ? 'opacity-0' : 'opacity-100'}
                `}></span>
                <span className={`
                  absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out
                  ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}
                `}></span>
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="#process" isScrolled={isScrolled}>Process</NavLink>
            <NavLink href="#tech" isScrolled={isScrolled}>Tech Stack</NavLink>
            <a
              href="#contact"
              className={`
                ml-4 px-4 py-2 rounded-lg font-medium
                transition-all duration-200 transform hover:scale-105
                ${isScrolled
                  ? 'bg-gradient-to-r from-blue-700 to-emerald-600 text-white hover:shadow-lg hover:from-blue-800 hover:to-emerald-700' // Themed gradient
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-gray-900' // Still uses white/gray background, text remains dark
                }
              `}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`
          fixed inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300
          sm:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`
          absolute top-full left-0 w-full sm:hidden
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}
        `}
      >
        <div className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-4 space-y-1">
            {['About', 'Services', 'Process', 'Tech Stack', 'Contact'].map((item, index) => (
              <MobileNavLink
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </MobileNavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`
      px-3 py-2 rounded-lg font-medium
      transition-colors duration-200
      ${isScrolled
        ? 'text-gray-700 hover:text-emerald-600 hover:bg-blue-50' // Text color subtle, hover text vibrant green, hover bg light blue
        : 'text-gray-900 hover:text-emerald-600 hover:bg-white/20' // Text color dark, hover text vibrant green, hover bg slightly transparent white
      }
    `}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick, style }) => (
  <a
    href={href}
    onClick={onClick}
    className="
      block px-4 py-3 rounded-lg text-gray-700 font-medium
      hover:bg-blue-50 active:bg-blue-100 // Themed hover/active backgrounds
      transition-all duration-200
      animate-fade-in-up
    "
    style={style}
  >
    {children}
  </a>
);

export default Navbar;