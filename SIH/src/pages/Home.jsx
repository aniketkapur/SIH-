import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Bell, BarChart3, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Photo Reporting',
      description: 'Capture and upload photos of civic issues with GPS location tagging'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Location Tracking',
      description: 'Automatic GPS location detection for precise issue reporting'
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: 'Real-time Updates',
      description: 'Get notifications on the status of your reported issues'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Analytics Dashboard',
      description: 'Municipal staff can track trends and performance metrics'
    }
  ];

  const stats = [
    { number: '1,247', label: 'Issues Reported', icon: <MapPin className="h-5 w-5" /> },
    { number: '892', label: 'Issues Resolved', icon: <CheckCircle className="h-5 w-5" /> },
    { number: '15', label: 'Departments', icon: <Users className="h-5 w-5" /> },
    { number: '72%', label: 'Resolution Rate', icon: <BarChart3 className="h-5 w-5" /> }
  ];

  const recentIssues = [
    { id: 1, type: 'Pothole', location: 'Main St & 5th Ave', status: 'In Progress', priority: 'High' },
    { id: 2, type: 'Streetlight', location: 'Park Avenue', status: 'Resolved', priority: 'Medium' },
    { id: 3, type: 'Garbage Overflow', location: 'City Center', status: 'Pending', priority: 'High' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Report Civic Issues
              <span className="block text-blue-200">Make a Difference</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Help improve your community by reporting potholes, broken streetlights, 
              garbage overflow, and other municipal issues quickly and easily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/report" 
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Camera className="h-5 w-5" />
                Report an Issue
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/track" 
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                <MapPin className="h-5 w-5" />
                Track Issues
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to report and track civic issues in your community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Issues Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recent Issues
            </h2>
            <p className="text-xl text-gray-600">
              See what's being reported and resolved in your community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentIssues.map((issue) => (
              <div key={issue.id} className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {issue.type}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    issue.priority === 'High' 
                      ? 'bg-red-100 text-red-800 border border-red-200' 
                      : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                  }`}>
                    {issue.priority}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{issue.location}</span>
                </div>
                <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${
                  issue.status === 'Resolved' 
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : issue.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                }`}>
                  {issue.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of citizens helping to improve their communities
          </p>
          <Link 
            to="/report" 
            className="group inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Camera className="h-5 w-5" />
            Start Reporting
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;