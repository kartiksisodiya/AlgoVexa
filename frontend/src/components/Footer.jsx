import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-wrap gap-8 justify-between">
          
          {/* Logo & Info */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center text-2xl font-bold mb-2">
              <span className="text-red-500 mr-1"></span> AlgoVexa
            </div>
            <p className="text-gray-400">New York Web</p>
            <p className="text-gray-400">T: 917.409.0299 | E: info@AlgoVexa.com</p>
            <div className="flex gap-3 mt-3">
              <a href="#facebook" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-red-500 transition">f</a>
              <a href="#twitter" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-red-500 transition">t</a>
              <a href="#linkedin" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-red-500 transition">in</a>
              <a href="#instagram" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-red-500 transition">ig</a>
            </div>
          </div>

          {/* Sections */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-2">IT Services</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#support" className="hover:text-red-500">IT Support</a></li>
              <li><a href="#consulting" className="hover:text-red-500">IT Consulting</a></li>
              <li><a href="#cloud" className="hover:text-red-500">Cloud Computing</a></li>
              <li><a href="#cyber" className="hover:text-red-500">Cyber Security</a></li>
              <li><a href="#web" className="hover:text-red-500">Web Development</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-2">Industries</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#startup" className="hover:text-red-500">Startup Business</a></li>
              <li><a href="#health" className="hover:text-red-500">Health & Care</a></li>
              <li><a href="#real-estate" className="hover:text-red-500">Real Estate</a></li>
              <li><a href="#food" className="hover:text-red-500">Food & Restaurant</a></li>
              <li><a href="#travel" className="hover:text-red-500">Travel & Tourism</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#about" className="hover:text-red-500">About Us</a></li>
              <li><a href="#meet-team" className="hover:text-red-500">Meet Our Team</a></li>
              <li><a href="#case-studies" className="hover:text-red-500">Case Studies</a></li>
              <li><a href="#latest" className="hover:text-red-500">Latest News</a></li>
              <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#help" className="hover:text-red-500">Help Center</a></li>
              <li><a href="#faq" className="hover:text-red-500">FAQ</a></li>
              <li><a href="#privacy" className="hover:text-red-500">Privacy & Policy</a></li>
              <li><a href="#terms" className="hover:text-red-500">Terms & Condition</a></li>
              <li><a href="#contact-support" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
          <p>
            Copyright © 2019 AlgoVexa. Designed and Developed by{" "}
            <a href="#legal-themes" className="text-red-500 hover:underline">Legal Themes</a>. Only on{" "}
            <a href="#themeisle" className="text-red-500 hover:underline">Themeisle Media</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
