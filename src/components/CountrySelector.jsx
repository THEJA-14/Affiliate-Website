import React from 'react';
import { MapPin } from 'lucide-react';

const CountrySelector = ({ onSelectCountry }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        
        {/* Brand Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
            ValueVantage
          </h1>
          <p className="text-xl text-gray-300">
            Your Shortcut to the Best Buys
          </p>
        </div>

        {/* Selection Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <MapPin className="w-10 h-10 text-gray-700 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Select Your Region
            </h2>
            <p className="text-gray-600">
              Choose your location to continue
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            
            {/* India Button */}
            <button
              onClick={() => onSelectCountry('india')}
              className="group bg-gray-50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-green-600 rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-6xl mb-3">🇮🇳</div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-1 transition-colors">
                India
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                Amazon.in
              </p>
            </button>

            {/* USA Button */}
            <button
              onClick={() => onSelectCountry('usa')}
              className="group bg-gray-50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-red-600 rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-6xl mb-3">🇺🇸</div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-1 transition-colors">
                United States
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                Amazon.com
              </p>
            </button>

          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Your preference will be saved
          </p>
        </div>

      </div>
    </div>
  );
};

export default CountrySelector;