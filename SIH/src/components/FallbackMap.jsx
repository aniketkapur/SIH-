import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const FallbackMap = ({ selectedLocation, onLocationSelect }) => {
  const openInGoogleMaps = () => {
    if (selectedLocation) {
      const url = `https://www.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}`;
      window.open(url, '_blank');
    } else {
      const url = 'https://www.google.com/maps';
      window.open(url, '_blank');
    }
  };

  return (
    <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border-2 border-dashed border-blue-300 flex items-center justify-center">
      <div className="text-center p-8 max-w-md">
        <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-6" />
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Interactive Map
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          To enable the interactive map feature, please add your Google Maps API key to the GoogleMap component.
        </p>
        
        {selectedLocation && (
          <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-gray-800">Selected Location</span>
            </div>
            <p className="text-sm text-gray-600">
              Lat: {selectedLocation.lat.toFixed(6)}<br />
              Lng: {selectedLocation.lng.toFixed(6)}
            </p>
          </div>
        )}

        <button
          onClick={openInGoogleMaps}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 mx-auto font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <ExternalLink className="h-4 w-4" />
          Open Google Maps
        </button>
        
        <p className="text-xs text-gray-500 mt-4">
          You can still use the GPS button above to get your current coordinates
        </p>
      </div>
    </div>
  );
};

export default FallbackMap;