import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { MapPin, Crosshair } from 'lucide-react';
import FallbackMap from './FallbackMap';

// Map component that renders the actual Google Map
const MapComponent = ({ center, zoom, onLocationSelect, selectedLocation }) => {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
          }
        ]
      });

      // Add click listener to map
      newMap.addListener('click', (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        onLocationSelect({ lat, lng });
      });

      setMap(newMap);
    }
  }, [ref, map, center, zoom, onLocationSelect]);

  // Update marker when selected location changes
  useEffect(() => {
    if (map && selectedLocation) {
      // Remove existing marker
      if (marker) {
        marker.setMap(null);
      }

      // Create new marker
      const newMarker = new window.google.maps.Marker({
        position: { lat: selectedLocation.lat, lng: selectedLocation.lng },
        map: map,
        title: 'Issue Location',
        animation: window.google.maps.Animation.DROP,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" fill="#3B82F6" stroke="#1E40AF" stroke-width="2"/>
              <circle cx="12" cy="10" r="3" fill="white"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(32, 32),
          anchor: new window.google.maps.Point(16, 32)
        }
      });

      setMarker(newMarker);

      // Center map on marker
      map.panTo({ lat: selectedLocation.lat, lng: selectedLocation.lng });
    }
  }, [map, selectedLocation, marker]);

  return <div ref={ref} className="w-full h-full rounded-xl" />;
};

// Main GoogleMap component with wrapper
const GoogleMap = ({ onLocationSelect, selectedLocation, className = "" }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  // Default center (you can change this to your city's coordinates)
  const defaultCenter = { lat: 28.6139, lng: 77.2090 }; // New Delhi, India
  
  const center = selectedLocation || currentLocation || defaultCenter;

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCurrentLocation(location);
          onLocationSelect(location);
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoadingLocation(false);
        }
      );
    } else {
      setIsLoadingLocation(false);
    }
  };

  const render = (status) => {
    if (status === 'LOADING') {
      return (
        <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading Google Maps...</p>
          </div>
        </div>
      );
    }

    if (status === 'FAILURE') {
      return (
        <div className="w-full h-96 bg-gradient-to-br from-red-50 to-pink-100 rounded-xl flex items-center justify-center border-2 border-red-200">
          <div className="text-center p-8">
            <MapPin className="h-16 w-16 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-800 mb-2">Map Loading Failed</h3>
            <p className="text-red-600 mb-4">
              Unable to load Google Maps. Please check your internet connection or API key.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={`relative ${className}`}>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
          <MapComponent
            center={center}
            zoom={15}
            onLocationSelect={onLocationSelect}
            selectedLocation={selectedLocation}
          />
        </div>
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={getCurrentLocation}
            disabled={isLoadingLocation}
            className={`bg-white p-3 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 ${
              isLoadingLocation ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
            }`}
            title="Get Current Location"
          >
            {isLoadingLocation ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            ) : (
              <Crosshair className="h-5 w-5 text-blue-600" />
            )}
          </button>
        </div>

        {/* Location Info */}
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
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
      </div>
    );
  };

  // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
  // For development, you can use a restricted key or get one from Google Cloud Console
  // Using import.meta.env for Vite (instead of process.env)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  // If no API key is provided, show fallback map
  if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
    return (
      <FallbackMap 
        selectedLocation={selectedLocation} 
        onLocationSelect={onLocationSelect}
      />
    );
  }

  return (
    <Wrapper apiKey={apiKey} render={render} libraries={['places']}>
      {render('SUCCESS')}
    </Wrapper>
  );
};

export default GoogleMap;