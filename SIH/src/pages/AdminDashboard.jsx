import React, { useState } from 'react';
import { BarChart3, Users, MapPin, Clock, CheckCircle, AlertTriangle, Filter, Download, TrendingUp, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Mock data
  const stats = [
    { title: 'Total Issues', value: '1,247', change: '+12%', icon: <MapPin size={24} />, color: 'blue' },
    { title: 'Resolved Issues', value: '892', change: '+8%', icon: <CheckCircle size={24} />, color: 'green' },
    { title: 'Pending Issues', value: '245', change: '-5%', icon: <Clock size={24} />, color: 'yellow' },
    { title: 'Active Departments', value: '15', change: '0%', icon: <Users size={24} />, color: 'purple' }
  ];

  const recentIssues = [
    {
      id: 'CIV-001',
      title: 'Large pothole on Main Street',
      location: 'Main St & 5th Ave',
      status: 'In Progress',
      priority: 'High',
      department: 'Road Maintenance',
      reportedDate: '2024-01-15',
      assignedTo: 'John Smith'
    },
    {
      id: 'CIV-002',
      title: 'Broken streetlight',
      location: 'Park Avenue',
      status: 'Pending',
      priority: 'Medium',
      department: 'Electrical Services',
      reportedDate: '2024-01-18',
      assignedTo: 'Sarah Johnson'
    },
    {
      id: 'CIV-003',
      title: 'Garbage overflow at bus stop',
      location: 'City Center Bus Stop',
      status: 'Resolved',
      priority: 'High',
      department: 'Waste Management',
      reportedDate: '2024-01-10',
      assignedTo: 'Mike Davis'
    }
  ];

  const departments = [
    { name: 'Road Maintenance', issues: 45, resolved: 32, pending: 13 },
    { name: 'Electrical Services', issues: 28, resolved: 22, pending: 6 },
    { name: 'Waste Management', issues: 35, resolved: 30, pending: 5 },
    { name: 'Water Department', issues: 18, resolved: 15, pending: 3 },
    { name: 'Parks & Recreation', issues: 22, resolved: 18, pending: 4 }
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-semibold";
    switch (status) {
      case 'Pending': return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'In Progress': return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'Resolved': return `${baseClasses} bg-green-100 text-green-800`;
      case 'Rejected': return `${baseClasses} bg-red-100 text-red-800`;
      default: return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getPriorityBadge = (priority) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    switch (priority) {
      case 'High': return `${baseClasses} bg-red-100 text-red-800`;
      case 'Medium': return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Low': return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'Urgent': return `${baseClasses} bg-purple-100 text-purple-800`;
      default: return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Monitor and manage civic issues across all departments with real-time insights
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-6 py-3 border-2 border-gray-200 rounded-xl bg-white text-sm font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <Download className="h-4 w-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${
                  stat.color === 'blue' ? 'from-blue-100 to-blue-200' :
                  stat.color === 'green' ? 'from-green-100 to-green-200' :
                  stat.color === 'yellow' ? 'from-yellow-100 to-yellow-200' :
                  'from-purple-100 to-purple-200'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    'text-purple-600'
                  }`}>
                    {stat.icon}
                  </div>
                </div>
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                  stat.change.startsWith('+') ? 'text-green-700 bg-green-100' : 
                  stat.change.startsWith('-') ? 'text-red-700 bg-red-100' : 'text-gray-700 bg-gray-100'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Recent Issues */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Activity className="h-6 w-6" />
                    Recent Issues
                  </h2>
                  <button className="text-blue-100 hover:text-white text-sm font-medium bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all duration-200">
                    View All
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentIssues.map((issue) => (
                    <div key={issue.id} className="group p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="font-bold text-gray-900 text-lg">
                              {issue.title}
                            </h3>
                            <span className={`${getPriorityBadge(issue.priority)} text-xs`}>
                              {issue.priority}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-blue-500" />
                              <span className="font-medium">{issue.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-green-500" />
                              <span>{issue.department}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-purple-500" />
                              <span>Assigned to: {issue.assignedTo}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <span className={getStatusBadge(issue.status)}>
                            {issue.status}
                          </span>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            Manage
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Department Performance & Quick Actions */}
          <div className="space-y-8">
            {/* Department Performance */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Department Performance
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-gray-900">
                          {dept.name}
                        </h3>
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {dept.issues} total
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${(dept.resolved / dept.issues) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600 font-medium">{dept.resolved} resolved</span>
                        <span className="text-orange-600 font-medium">{dept.pending} pending</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                <h2 className="text-2xl font-bold text-white">
                  Quick Actions
                </h2>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Assign Issues
                </button>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Update Status
                </button>
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Generate Report
                </button>
                <button className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-4 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Manage Users
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8">
              <h2 className="text-3xl font-bold text-white text-center">
                Performance Analytics
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 mb-4 group-hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl font-bold text-blue-600 mb-2">72%</div>
                    <div className="text-blue-800 font-semibold">Resolution Rate</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 mb-4 group-hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl font-bold text-green-600 mb-2">2.3</div>
                    <div className="text-green-800 font-semibold">Avg Days to Resolve</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 mb-4 group-hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl font-bold text-purple-600 mb-2">4.2</div>
                    <div className="text-purple-800 font-semibold">Citizen Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;