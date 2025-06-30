import React from 'react';
import Navbar from './Navbar';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Header = ({
  backgroundImage = "/mainbg.png",
  showFilter = true,
  title = "BRISKBOLD PROPERTY",
  subtitle = "Real Estate Network",
  description = "We're reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.",
  showContactInfo = false,
}) => {
  return (
    <>
      <style>
        {`
          @media (max-width: 350px) {
            .custom-header-height {
              min-height: 110vh;
            }
          }
          @media (max-width: 320px) {
            .custom-header-height {
              min-height: 115vh;
            }
          }
        `}
      </style>

      <header
        className="relative min-h-[100vh] sm:min-h-[90vh] md:h-[85vh] bg-cover bg-center rounded-[24px] overflow-hidden custom-header-height"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center">
          <Navbar />

          <div className="flex flex-col items-center justify-center text-center text-white px-4 h-full pt-32 sm:pt-20">

            {/* Headings */}
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

            {/* Contact Info */}
            {showContactInfo && (
              <div className="flex flex-col sm:flex-row justify-center items-start gap-y-12 sm:gap-x-48 text-white mb-16 px-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white text-black p-4 rounded-full text-2xl mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Call Us</h3>
                    <p className="text-lg font-medium">+971 56 924 2326</p>
                    <p className="text-lg font-medium">+971 56 924 2326</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white text-black p-4 rounded-full text-2xl mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Email Us</h3>
                    <p className="text-lg font-medium">bbpmarketing@brisk</p>
                    <p className="text-lg font-medium">boldproperties.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white text-black p-4 rounded-full text-2xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Visit Us</h3>
                    <p className="text-lg font-medium">Business Bay, Dubai, UAE</p>
                  </div>
                </div>
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
                      className="min-w-[250px] px-4 py-2 border rounded-full text-sm"
                    />
                    <select className="min-w-[180px] px-4 py-2 border rounded-full text-sm text-black">
                      <option>Residential</option>
                    </select>
                    <select className="min-w-[180px] px-4 py-2 border rounded-full text-sm text-black">
                      <option>Property Type</option>
                    </select>
                    <select className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black">
                      <option>Min Price</option>
                    </select>
                    <select className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black">
                      <option>Max Price</option>
                    </select>
                    <select className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black">
                      <option>Bedroom</option>
                    </select>
                    <select className="min-w-[130px] px-4 py-2 border rounded-full text-sm text-black">
                      <option>Size</option>
                    </select>
                    <button className="bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-red-800 transition">
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
