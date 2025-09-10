import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, CheckCircle, AlertTriangle, Eye, Calendar, User } from 'lucide-react';

const TrackIssues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Mock data for reported issues
  const [issues] = useState([
    {
      id: 'CIV-001',
      title: 'Large pothole on Main Street',
      category: 'Potholes',
      location: 'Main St & 5th Ave',
      status: 'In Progress',
      priority: 'High',
      reportedDate: '2024-01-15',
      lastUpdate: '2024-01-18',
      description: 'Deep pothole causing traffic issues',
      assignedDept: 'Road Maintenance',
      estimatedCompletion: '2024-01-25'
    },
    {
      id: 'CIV-002',
      title: 'Broken streetlight',
      category: 'Streetlights',
      location: 'Park Avenue',
      status: 'Resolved',
      priority: 'Medium',
      reportedDate: '2024-01-10',
      lastUpdate: '2024-01-16',
      description: 'Streetlight not working, area is dark at night',
      assignedDept: 'Electrical Services',
      estimatedCompletion: '2024-01-16'
    },
    {
      id: 'CIV-003',
      title: 'Garbage overflow at bus stop',
      category: 'Garbage Overflow',
      location: 'City Center Bus Stop',
      status: 'Pending',
      priority: 'High',
      reportedDate: '2024-01-20',
      lastUpdate: '2024-01-20',
      description: 'Trash bin overflowing, attracting pests',
      assignedDept: 'Waste Management',
      estimatedCompletion: '2024-01-22'
    },
    {
      id: 'CIV-004',
      title: 'Damaged sidewalk',
      category: 'Sidewalk Damage',
      location: 'Oak Street',
      status: 'Rejected',
      priority: 'Low',
      reportedDate: '2024-01-12',
      lastUpdate: '2024-01-14',
      description: 'Cracked sidewalk near school',
      assignedDept: 'Infrastructure',
      estimatedCompletion: null
    }
  ]);

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide";
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

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || issue.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || issue.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Track Your Issues
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor the status and progress of your reported civic issues in real-time
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filter & Search</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Search Issues
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by title, location, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Status Filter
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 bg-white"
              >
                <option value="all">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Category Filter
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 bg-white"
              >
                <option value="all">All Categories</option>
                <option value="Potholes">Potholes</option>
                <option value="Streetlights">Streetlights</option>
                <option value="Garbage Overflow">Garbage Overflow</option>
                <option value="Sidewalk Damage">Sidewalk Damage</option>
                <option value="Water Issues">Water Issues</option>
                <option value="Traffic Signals">Traffic Signals</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8 flex items-center justify-between">
          <div className="text-gray-600 font-medium">
            Showing <span className="font-bold text-blue-600">{filteredIssues.length}</span> of <span className="font-bold">{issues.length}</span> issues
          </div>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Issues List */}
        <div className="space-y-6">
          {filteredIssues.map((issue) => (
            <div key={issue.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="xl:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {issue.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="font-mono bg-gray-100 px-2 py-1 rounded">ID: {issue.id}</span>
                          <span>•</span>
                          <span>{issue.category}</span>
                        </div>
                      </div>
                      <span className={`${getPriorityBadge(issue.priority)} flex-shrink-0`}>
                        {issue.priority}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {issue.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Location</div>
                          <div className="text-sm font-medium text-gray-900">{issue.location}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Reported</div>
                          <div className="text-sm font-medium text-gray-900">
                            {new Date(issue.reportedDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status and Details */}
                  <div className="xl:col-span-1">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 h-full">
                      <div className="mb-6">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Current Status</div>
                        <span className={getStatusBadge(issue.status)}>
                          {issue.status}
                        </span>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <User className="h-4 w-4 text-gray-400" />
                          <div>
                            <div className="text-xs font-medium text-gray-500">Assigned Department</div>
                            <div className="text-sm font-medium text-gray-900">{issue.assignedDept}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <div>
                            <div className="text-xs font-medium text-gray-500">Last Update</div>
                            <div className="text-sm font-medium text-gray-900">
                              {new Date(issue.lastUpdate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        {issue.estimatedCompletion && (
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <div>
                              <div className="text-xs font-medium text-gray-500">Est. Completion</div>
                              <div className="text-sm font-medium text-gray-900">
                                {new Date(issue.estimatedCompletion).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        <Eye className="h-4 w-4" />
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredIssues.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100">
            <AlertTriangle className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No Issues Found
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              We couldn't find any issues matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
                setCategoryFilter('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackIssues;