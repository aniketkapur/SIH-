import React from 'react';
import { AlertTriangle, Circle, ArrowUp, Zap } from 'lucide-react';

const PriorityBadge = ({ priority, size = 'md' }) => {
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

  const getPriorityConfig = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'urgent':
        return {
          classes: 'bg-purple-100 text-purple-800 border border-purple-200',
          icon: <Zap size={iconSize[size]} />
        };
      case 'high':
        return {
          classes: 'bg-red-100 text-red-800 border border-red-200',
          icon: <ArrowUp size={iconSize[size]} />
        };
      case 'medium':
        return {
          classes: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
          icon: <AlertTriangle size={iconSize[size]} />
        };
      case 'low':
        return {
          classes: 'bg-blue-100 text-blue-800 border border-blue-200',
          icon: <Circle size={iconSize[size]} />
        };
      default:
        return {
          classes: 'bg-gray-100 text-gray-800 border border-gray-200',
          icon: <Circle size={iconSize[size]} />
        };
    }
  };

  const config = getPriorityConfig(priority);

  return (
    <span className={`inline-flex items-center gap-1 rounded-lg font-medium ${sizeClasses[size]} ${config.classes}`}>
      {config.icon}
      {priority}
    </span>
  );
};

export default PriorityBadge;