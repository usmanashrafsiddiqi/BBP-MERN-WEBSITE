import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Header = ({
  backgroundImage = "/mainbg.png",
  showFilter = true,
  title = "BRISKBOLD PROPERTY",
  subtitle = "Real Estate Network",
  description = "We're reimagining how you buy, sell and rent...",
  showContactInfo = false,
}) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [size, setSize] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.append('keyword', keyword);
    if (category) params.append('category', category);
    if (propertyType) params.append('propertyType', propertyType);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (bedrooms) params.append('bedrooms', bedrooms);
    if (size) params.append('size', size);

    navigate(`/newprojects?${params.toString()}`);
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 640px) {
            .header-no-filter-sm {
              min-height: 60vh !important;
            }
          }
        `}
      </style>

      <header
        className={`relative min-h-[100vh] sm:min-h-[90vh] md:h-[85vh] bg-cover bg-center rounded-[24px] overflow-hidden ${
          !showFilter ? 'header-no-filter-sm' : ''
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center">
          <Navbar />

          <div className="flex flex-col items-center justify-center text-center text-white px-4 h-full pt-32 sm:pt-20">
            {/* Title & Subtitles */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide">
                {title}
              </h1>
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-2">
                {subtitle}
              </p>
              <p className="mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light">
                {description}
              </p>
            </div>

            {/* Optional Contact Info */}
            {showContactInfo && (
              <div className="flex flex-col sm:flex-row justify-center items-start gap-y-12 sm:gap-x-48 text-white mb-16 px-4">
                {/* Contact blocks here if needed */}
              </div>
            )}

            {/* Filter Section */}
            {showFilter && (
              <div className="mt-6 max-w-7xl w-full px-4 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex rounded-full overflow-hidden border border-gray-300 bg-transparent">
                    <button className="px-6 py-2 bg-white text-black font-semibold text-sm rounded-l-full">
                      BUY
                    </button>
                    <button className="px-6 py-2 bg-transparent text-white text-sm border-l border-gray-300">
                      RENT
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 pt-10 shadow-lg w-full">
                  <div className="flex flex-wrap justify-center gap-4">
                    <input
                      type="text"
                      placeholder="Enter Property, Location..."
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      className="min-w-[250px] px-4 py-2 border rounded-full text-sm"
                    />
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="min-w-[180px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">Residential</option>
                      <option value="commercial">Commercial</option>
                    </select>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="min-w-[180px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">Property Type</option>
                      <option value="studio">Studio</option>
                      <option value="1br">1BR</option>
                      <option value="2br">2BR</option>
                    </select>
                    <select
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">Min Price</option>
                      <option value="500000">500K</option>
                      <option value="1000000">1M</option>
                    </select>
                    <select
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">Max Price</option>
                      <option value="1500000">1.5M</option>
                      <option value="2000000">2M</option>
                    </select>
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">Bedroom</option>
                      <option value="studio">Studio</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3+</option>
                    </select>
                    <select
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">Size</option>
                      <option value="small">Small</option>
                      <option value="large">Large</option>
                    </select>
                    <button
                      onClick={handleSearch}
                      className="bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-red-800 transition"
                    >
                      SEARCH NOW <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
