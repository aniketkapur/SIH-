import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';

const NotificationToast = ({ type = 'info', message, isVisible, onClose, duration = 5000 }) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getToastConfig = (type) => {
    switch (type) {
      case 'success':
        return {
          classes: 'bg-green-50 border-green-200 text-green-800',
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          iconBg: 'bg-green-100'
        };
      case 'error':
        return {
          classes: 'bg-red-50 border-red-200 text-red-800',
          icon: <XCircle className="h-5 w-5 text-red-600" />,
          iconBg: 'bg-red-100'
        };
      case 'warning':
        return {
          classes: 'bg-yellow-50 border-yellow-200 text-yellow-800',
          icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
          iconBg: 'bg-yellow-100'
        };
      default:
        return {
          classes: 'bg-blue-50 border-blue-200 text-blue-800',
          icon: <Info className="h-5 w-5 text-blue-600" />,
          iconBg: 'bg-blue-100'
        };
    }
  };

  const config = getToastConfig(type);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-down">
      <div className={`max-w-sm w-full border rounded-xl shadow-lg p-4 ${config.classes}`}>
        <div className="flex items-start gap-3">
          <div className={`flex-shrink-0 p-1 rounded-lg ${config.iconBg}`}>
            {config.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-relaxed">
              {message}
            </p>
          </div>
          <button
            onClick={() => {
              setShow(false);
              onClose?.();
            }}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-white hover:bg-opacity-50 transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;