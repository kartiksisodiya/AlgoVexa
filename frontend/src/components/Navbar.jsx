import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'IT Solutions', path: '/solutions' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'IT Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (item) => {
    if (item.path.startsWith('/')) {
      return location.pathname === item.path;
    } else {
      return activeHash === item.path;
    }
  };

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
      {/* Top Strip */}
     
       
       

      {/* Main Nav */}
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#00B0E0)' }}
          >
            NS
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-lg text-gray-900">AlgoVexa</span>
            <span className="text-xs text-gray-500">IT Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.path}
              className={`relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#00B0E0] after:-bottom-1 after:left-0 hover:after:w-full after:transition-all ${
                isActive(item)
                  ? 'text-[#00B0E0] font-semibold after:w-full'
                  : 'text-gray-700 hover:text-[#00B0E0]'
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Contact Button */}
      
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-8 pb-4 flex flex-col gap-4 bg-white border-t">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.path}
              className={`text-gray-700 hover:text-[#00B0E0] transition ${
                isActive(item) ? 'text-[#00B0E0] font-semibold' : ''
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-md text-white bg-[#00B0E0] hover:bg-[#0098c9] transition shadow-sm"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
