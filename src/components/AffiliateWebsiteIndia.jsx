import React, { useState, useMemo } from 'react';
import { ExternalLink, Instagram, Send, ShoppingCart, Search, Globe } from 'lucide-react';
import { productsIndia } from '../data/productsIndia';
import logo from "../assets/logo.png";

// Search Bar Component
const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div className="max-w-2xl mx-auto mb-12">
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-4 text-lg bg-white rounded-2xl shadow-lg border-2 border-gray-100 focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-400"
      />
    </div>
  </div>
);

// Product Card Component
const ProductCard = ({ product }) => {
  const handleProductClick = () => {
    window.open(product.affiliateUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative bg-gray-50 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-contain p-2"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        
        <button
          onClick={handleProductClick}
          className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Shop Now</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Social Media Section - FIXED
const SocialSection = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/value_vantage?igsh=MXZ0MzZveTBwZTBmdw==', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/valuevantage05', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white text-center my-12">
      <h2 className="text-3xl font-bold mb-4">Stay Connected!</h2>
      <p className="text-lg mb-6 opacity-90">Follow us for the latest deals and instant updates</p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button
          onClick={handleInstagramClick}
          className="flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <Instagram className="w-6 h-6" />
          <span className="font-semibold">Follow on Instagram</span>
        </button>
        
        <button
          onClick={handleTelegramClick}
          className="flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <Send className="w-6 h-6" />
          <span className="font-semibold">Join Telegram</span>
        </button>
      </div>
    </div>
  );
};

// Main Component
const AffiliateWebsiteIndia = ({ onChangeCountry }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return productsIndia;
    
    return productsIndia.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-2 py-4">
          <div className="w-fit mx-auto flex items-center justify-center space-x-1">
            <img
              src={logo}
              alt="ValueVantage Logo"
              className="w-32 h-32 md:w-32 md:h-32"
            />
          </div>
          <p className="text-center text-gray-600">Your Shortcut to the Best Buys!</p>
          
          {/* Country Indicator and Change Button */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-sm text-gray-600">Shopping from India</span>
            <button
              onClick={onChangeCountry}
              className="ml-4 text-sm text-purple-600 hover:text-purple-800 font-semibold flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>Change Country</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <SocialSection />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            {searchTerm ? `Search Results (${filteredProducts.length})` : 'Products'}
          </h2>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">No products found matching "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Affiliate Disclaimer */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-gray-200 rounded-2xl p-8 mx-4 mb-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg mb-4">
            The products listed on this page contain affiliate links. 
            When you purchase any product, <span className="font-semibold text-gray-800">ValueVantage</span> may earn a commission. 
            <span className="font-semibold text-purple-600"> It won't cost you extra.</span>
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm leading-relaxed italic">
              We do not own or operate any of the third-party websites linked on this platform. 
              All product details, pricing, availability, and policies are determined by the respective sellers and may change without notice. 
              By clicking on these links and making a purchase, you acknowledge that all transactions, disputes, or issues are solely between you and the third-party website. 
              This site may display advertisements and affiliate links; we may earn a commission from qualifying purchases.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} ValueVantage. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AffiliateWebsiteIndia;