import React from 'react';
import { CheckCircle, Clock, AlertTriangle, XCircle } from 'lucide-react';

const StatusBadge = ({ status, size = 'md' }) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSize = {
    sm: 12,
    md: 16,
    lg: 20
  };

  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case 'resolved':
        return {
          classes: 'bg-green-100 text-green-800 border border-green-200',
          icon: <CheckCircle size={iconSize[size]} />
        };
      case 'in progress':
        return {
          classes: 'bg-blue-100 text-blue-800 border border-blue-200',
          icon: <Clock size={iconSize[size]} />
        };
      case 'pending':
        return {
          classes: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
          icon: <AlertTriangle size={iconSize[size]} />
        };
      case 'rejected':
        return {
          classes: 'bg-red-100 text-red-800 border border-red-200',
          icon: <XCircle size={iconSize[size]} />
        };
      default:
        return {
          classes: 'bg-gray-100 text-gray-800 border border-gray-200',
          icon: <Clock size={iconSize[size]} />
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-semibold uppercase tracking-wide ${sizeClasses[size]} ${config.classes}`}>
      {config.icon}
      {status}
    </span>
  );
};

export default StatusBadge;