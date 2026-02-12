import React, { useState, useMemo } from 'react';
import { ExternalLink, Instagram, Send, ShoppingCart, Search } from 'lucide-react';
import { products } from '../data/products';
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

// Ad Component
// const AdSection = ({ position, size = "large" }) => (
//   <div className={`my-8 ${size === "large" ? "h-32" : "h-24"}`}>
//     {/* Replace with your AdMob ad unit */}
//     <ins className="adsbygoogle"
//          style={{display: 'block'}}
//          data-ad-client="ca-app-pub-3188721822997287"
//          data-ad-slot="7838456326"
//          data-ad-format="auto"
//          data-full-width-responsive="true"></ins>
//     <script>
//          (adsbygoogle = window.adsbygoogle || []).push({});
//     </script>
//   </div>
// );

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

// Social Media Section
const SocialSection = () => (
  <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white text-center my-12">
    <h2 className="text-3xl font-bold mb-4">Stay Connected!</h2>
    <p className="text-lg mb-6 opacity-90">Follow us for the latest deals and instant updates</p>
    
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/value_vantage?igsh=MXZ0MzZveTBwZTBmdw=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
      >
        <Instagram className="w-6 h-6" />
        <span className="font-semibold">Follow on Instagram</span>
      </a>
      
      {/* Telegram */}
      <a
        href="https://t.me/valuevantage05"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
      >
        <Send className="w-6 h-6" />
        <span className="font-semibold">Join Telegram</span>
      </a>
    </div>
  </div>
);

// Main App Component
const AffiliateWebsite = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products;
    
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
  <div className="container mx-auto px-2 py-4">
    <div className="w-fit mx-auto flex items-center justify-center space-x-1">
      {/* Logo */}
      <img
        src = {logo} // or your actual path like './logo.svg'
        alt="ValueVantage Logo"
        className="w-32 h-32 md:w-32 md:h-32"
      />
    </div>
    <p className="text-center text-gray-600 ">Your Shortcut to the Best Buys!</p>
  </div>
</header>


      <div className="container mx-auto px-4 py-8">
        {/* Top Ad Section */}
        <AdSection position="top" />

        {/* Social Media Section */}
        <SocialSection />

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* Products Grid */}
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

        {/* Bottom Ad Section */}
        {/* <AdSection position="bottom" />
      </div> */}

      {/* Affiliate Disclaimer */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-gradient-to-r from-gray-200 to-black rounded-2xl p-8 mx-4 mb-8">
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
          <p className="mb-4">© 2025 ValueVantage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AffiliateWebsite;
