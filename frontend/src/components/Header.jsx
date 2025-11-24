import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
const Header = ({
  backgroundImage = "/mainbg.png",
  showFilter = true,
  title ,
  subtitle,
  description,
  showContactInfo = false,
}) => {
  const navigate = useNavigate();
 const { t } = useTranslation();
 const headerTitle = title !== undefined ? title : t("BRISKBOLD_PROPERTY_TEXT");
const headerSubtitle = subtitle !== undefined ? subtitle : t("REAL_ESTATE_NETWORK");
const headerDescription = description !== undefined ? description : t("HEADER_DESCRIPTION_TEXT");
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
  className={`relative h-auto min-h-[100vh] sm:min-h-[95vh] md:min-h-[100vh] lg:min-h-[100vh] bg-cover bg-center rounded-[24px] overflow-visible ${
    !showFilter ? 'header-no-filter-sm' : ''
  }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center ">
          
        <div className="pt-0 pb-0">
  <Navbar />
</div>

          <div className="flex flex-col items-center justify-center text-center text-white px-4 h-full pt-32 sm:pt-20">
            {/* Title & Subtitles */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide">
                {headerTitle}
              </h1>
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-2">
                {headerSubtitle}
              </p>
              <p className="mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light">
                {headerDescription}
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
               <div className="w-full flex justify-center relative z-50 overflow-visible mb-4">
  {/* BUY button */}
 

<Link to="/newprojects">
  <button className="px-6 py-2 bg-transparent text-white text-sm border border-gray-300 rounded-l-md">
    {t("BUY")}
  </button>
</Link>


  {/* RENT button with tooltip */}
  <div className="relative group">
    <button className="px-6 py-2 bg-transparent text-white text-sm border-t border-b border-r border-gray-300 rounded-r-md">
      {t("RENT")}
    </button>

    {/* Tooltip */}
    <div className="absolute top-1/2 left-full ml-2 -translate-y-1/2 
                    bg-red-600 text-white text-xs font-semibold 
                    px-2 py-1 rounded shadow-lg 
                    opacity-0 group-hover:opacity-100 transition duration-200 
                    whitespace-nowrap z-50">
      Coming Soon
    </div>
  </div>
</div>


                <div className="bg-white rounded-2xl p-6 pt-10 shadow-lg w-full">
                  <div className="flex flex-wrap justify-center gap-4">
                  <input
  type="text"
  placeholder="Enter Property, Location..."
  value={keyword}
  onChange={(e) => setKeyword(e.target.value)}
  className="min-w-[250px] px-4 py-2 border rounded-full text-sm text-black"
/>

                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="min-w-[180px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">{t("RESIDENTIAL_TEXT")}</option>
                      <option value="commercial">Commercial</option>
                    </select>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="min-w-[180px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">{t("PROPERTY_TYPE_TEXT")}</option>
                      <option value="studio">Studio</option>
                      <option value="1br">1BR</option>
                      <option value="2br">2BR</option>
                    </select>
                    <select
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">{t("MIN_PRICE_TEXT")}</option>
                      <option value="500000">500K</option>
                      <option value="1000000">1M</option>
                    </select>
                    <select
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">{t("MAX_PRICE_TEXT")}</option>
                      <option value="1500000">1.5M</option>
                      <option value="2000000">2M</option>
                    </select>
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black"
                    >
                      <option value="">{t("BEDROOM_TEXT")}</option>
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
                      <option value="">{t("SIZE_TEXT")}</option>
                      <option value="small">Small</option>
                      <option value="large">Large</option>
                    </select>
                    <button
                      onClick={handleSearch}
                      className="bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-red-800 transition"
                    >
                        {t("SEARCH_NOW")}<FaArrowRight className="text-xs" />
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
