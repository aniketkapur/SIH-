import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white shadow-xl sticky top-0 z-50 transition-all duration-300">
      {/* Enhanced gradient with deeper colors and shadow for depth */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Increased height for larger screens */}
          <Link
            to="/"
            className="flex items-center space-x-3 text-white hover:text-blue-100 transition-colors duration-300 group"
          >
            <MapPin className="h-9 w-9 group-hover:scale-110 transition-transform duration-300" />
            {/* Slightly larger icon with hover scale effect */}
            <span className="text-2xl font-extrabold tracking-tight">
              CivicReport
            </span>
            {/* Bolder, larger text with tighter tracking */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link
              to="/"
              className={`relative px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${
                isActive("/")
                  ? "bg-blue-800 text-white shadow-md"
                  : "text-blue-100 hover:bg-blue-700/50 hover:text-white hover:shadow-md"
              }`}
            >
              Home
              {/* Underline effect for active link */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 origin-left ${
                  isActive("/") ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              to="/report"
              className={`relative px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${
                isActive("/report")
                  ? "bg-blue-800 text-white shadow-md"
                  : "text-blue-100 hover:bg-blue-700/50 hover:text-white hover:shadow-md"
              }`}
            >
              Report Issue
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 origin-left ${
                  isActive("/report") ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              to="/track"
              className={`relative px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${
                isActive("/track")
                  ? "bg-blue-800 text-white shadow-md"
                  : "text-blue-100 hover:bg-blue-700/50 hover:text-white hover:shadow-md"
              }`}
            >
              Track Issues
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 origin-left ${
                  isActive("/track") ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              to="/admin"
              className={`relative px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${
                isActive("/admin")
                  ? "bg-blue-800 text-white shadow-md"
                  : "text-blue-100 hover:bg-blue-700/50 hover:text-white hover:shadow-md"
              }`}
            >
              Admin
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 origin-left ${
                  isActive("/admin") ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 animate-spin-once" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
            {/* Larger icon with spin animation on close */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800/95 backdrop-blur-sm animate-slide-down">
          {/* Added backdrop blur and slide-down animation */}
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                isActive("/")
                  ? "bg-blue-900 text-white shadow-md"
                  : "text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-sm"
              }`}
            >
              Home
            </Link>
            <Link
              to="/report"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                isActive("/report")
                  ? "bg-blue-900 text-white shadow-md"
                  : "text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-sm"
              }`}
            >
              Report Issue
            </Link>
            <Link
              to="/track"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                isActive("/track")
                  ? "bg-blue-900 text-white shadow-md"
                  : "text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-sm"
              }`}
            >
              Track Issues
            </Link>
            <Link
              to="/admin"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                isActive("/admin")
                  ? "bg-blue-900 text-white shadow-md"
                  : "text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-sm"
              }`}
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;