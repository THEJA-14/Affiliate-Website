import React, { useState, useEffect } from 'react';
import CountrySelector from './components/CountrySelector';
import AffiliateWebsiteIndia from './components/AffiliateWebsiteIndia';
import AffiliateWebsiteUSA from './components/AffiliateWebsiteUSA';
import './App.css';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already selected a country
    const savedCountry = localStorage.getItem('userCountry');
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
    setIsLoading(false);
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    localStorage.setItem('userCountry', country);
  };

  const handleChangeCountry = () => {
    setSelectedCountry(null);
    localStorage.removeItem('userCountry');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!selectedCountry) {
    return <CountrySelector onSelectCountry={handleCountrySelect} />;
  }

  return (
    <div className="App">
      {selectedCountry === 'india' ? (
        <AffiliateWebsiteIndia onChangeCountry={handleChangeCountry} />
      ) : (
        <AffiliateWebsiteUSA onChangeCountry={handleChangeCountry} />
      )}
    </div>
  );
}

export default App;