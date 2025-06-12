import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer"
// Main Developers List
const developers = [
  {
    name: 'Emaar',
    location: 'Dubai - UAE',
    logo: '/emaar.jpg',
    featured: true,
  },
  {
    name: 'Damac',
    location: 'Dubai - UAE',
    logo: '/logos/damac.png',
    featured: true,
  },
  {
    name: 'Majid Al Futtaim',
    location: 'Dubai - UAE',
    logo: '/logos/majid.png',
    featured: true,
  },
  {
    name: 'Nakheel',
    location: 'Dubai - UAE',
    logo: '/logos/nakheel.png',
    featured: true,
  },
  {
    name: 'Select Group',
    location: 'Dubai - UAE',
    logo: '/logos/select.png',
    featured: true,
  },
  {
    name: 'Danube Properties',
    location: 'Dubai - UAE',
    logo: '/logos/danube.png',
    featured: true,
  },
  {
    name: 'Binghatti',
    location: 'Dubai - UAE',
    logo: '/logos/binghatti.png',
    featured: false,
  },
  {
    name: 'Ellington Properties',
    location: 'Dubai - UAE',
    logo: '/logos/ellington.png',
    featured: false,
  },
  {
    name: 'Sobha Properties',
    location: 'Dubai - UAE',
    logo: '/logos/sobha.png',
    featured: true,
  },
];

// Additional Developers List
const moreDevelopers = [
  {
    name: 'Credo',
    location: 'Dubai - UAE',
    logo: '/logos/credo.png',
    featured: false,
  },
  {
    name: 'TownX',
    location: 'Dubai - UAE',
    logo: '/logos/townx.png',
    featured: false,
  },
  {
    name: 'Green Group',
    location: 'Dubai - UAE',
    logo: '/logos/green.png',
    featured: false,
  },
  {
    name: 'ZāZEN',
    location: 'Dubai - UAE',
    logo: '/logos/zazen.png',
    featured: false,
  },
  {
    name: 'Nabni Developers',
    location: 'Dubai - UAE',
    logo: '/logos/nabni.png',
    featured: false,
  },
  {
    name: 'Arenco',
    location: 'Dubai - UAE',
    logo: '/logos/arenco.png',
    featured: false,
  },
  {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  },
  {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  },
  {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  },
  {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  },
  {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  },

  {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  }, {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  },
  {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  },
  {
    name: 'Ithra Dubai',
    location: 'Dubai - UAE',
    logo: '/logos/ithra.png',
    featured: false,
  },
  {
    name: 'Union Properties',
    location: 'Dubai - UAE',
    logo: '/logos/union.png',
    featured: false,
  },

];

const Developer = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="p-2 md:p-4 bg-white overflow-hidden">
        <Header
          backgroundImage="/devloper.jpg"
          title="Top Real Estate Developers"
          subtitle="Expertly Designed Spaces for Modern Living"
          showFilter={false}
        />
      </div>

      {/* Developer Grid Section */}
      <div className="w-full max-w-[1440px] mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Discover Our Top Developers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-4 relative hover:shadow-md transition-all"
            >
              {dev.featured && (
                <span className="absolute top-3 right-3 text-xs bg-red-600 text-white px-2 py-1 rounded-full font-semibold">
                  FEATURED
                </span>
              )}
              <div className="bg-[#e6f0fa] h-[160px] rounded-lg flex items-center justify-center mb-4">
                <img
                  src={dev.logo}
                  alt={dev.name}
                  className="max-h-[110px] max-w-[240px] w-auto object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">{dev.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <img src="/icons/location.svg" alt="location" className="w-4 h-4 mr-1" />
                {dev.location}
              </div>
              <p className="text-sm text-gray-600 leading-snug">
                With a legacy of crafting iconic landmarks and vibrant communities, {dev.name} is committed to
                creating spaces where life, business, and leisure flourish harmoniously.
              </p>
            </div>
          ))}
        </div>

        {/* More Developers Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">More Trusted Developers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {moreDevelopers.map((dev, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-4 relative hover:shadow-md transition-all"
              >
                {dev.featured && (
                  <span className="absolute top-3 right-3 text-xs bg-red-600 text-white px-2 py-1 rounded-full font-semibold">
                    FEATURED
                  </span>
                )}
                <div className="bg-[#e6f0fa] h-[160px] rounded-lg flex items-center justify-center mb-4">
                  <img
                    src={dev.logo}
                    alt={dev.name}
                    className="max-h-[110px] max-w-[240px] w-auto object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800">{dev.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <img src="/icons/location.svg" alt="location" className="w-4 h-4 mr-1" />
                  {dev.location}
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  With a legacy of crafting iconic landmarks and vibrant communities, {dev.name} is committed to
                  creating spaces where life, business, and leisure flourish harmoniously.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Developer;
