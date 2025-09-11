import React from 'react';
import { MapPin, Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Civic-Connect</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Empowering citizens to report civic issues and help build better communities. 
              Together, we can make a difference in our neighborhoods.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/aniketkapur" className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/report" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  Report Issue
                </a>
              </li>
              <li>
                <a href="/track" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  Track Issues
                </a>
              </li>
              <li>
                <a href="/admin" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  Admin Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">civicconnectsih@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300"> +91 9596914707 </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Guru Nanak Dev University<br />
                  Amritsar,Punjab
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Civic-Connect.Built for Smart India Hackathon 2025.
              <img src="aicte.png" alt="Civic Connect Logo" className="h-20 w-20 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;