import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, MapPin } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12 border border-gray-100">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
            <MapPin className="h-16 w-16 text-blue-400 mx-auto animate-bounce" />
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="space-y-4">
            <Link
              to="/"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 flex items-center justify-center gap-3 font-medium transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@civicreport.com" className="text-blue-600 hover:text-blue-700 font-medium">
                support@civicreport.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;