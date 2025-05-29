import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Sample community data
const communityData = [
  {
    name: 'Al Raha',
    description: 'Beachside community with luxury apartments and villas.',
    image: '/9.jpg',
  },
  {
    name: 'Al Reem Island',
    description: 'High-rise living with a vibrant atmosphere.',
    image: '/9.jpg',
  },
  {
    name: 'Khalifa City',
    description: 'Suburban area known for family-friendly living.',
    image: '/9.jpg',
  },
  {
    name: 'Saadiyat Island',
    description: 'Cultural district with exclusive residential communities.',
    image: '/9.jpg',
  },
  {
    name: 'Al Reef',
    description: 'Affordable community popular among families.',
    image: '/9.jpg',
  },
  {
    name: 'Yas Island',
    description: 'Entertainment destination with theme parks and golf course.',
    image: '/9.jpg',
  },
  {
    name: 'Al Mushrif',
    description: 'Central area with parks and schools.',
    image: '/9.jpg',
  },
  {
    name: 'Al Karamah',
    description: 'Blend of residential and commercial spaces.',
    image: '/9.jpg',
  },
  {
    name: 'Al Shamkha',
    description: 'Spacious villas attracting families.',
    image: '/9.jpg',
  },
  {
    name: 'Al Maryah Island',
    description: 'Financial hub with upscale residences.',
    image: '/9.jpg',
  },
  {
    name: 'Al Muroor',
    description: 'Relaxed area with parks and schools.',
    image: '/9.jpg',
  },
  {
    name: 'Al Bateen',
    description: 'High-end villas and marina views.',
    image: '/9.jpg',
  },
];

const itemsPerPage = 12;

const Community = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(communityData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = communityData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Header */}
      <div className="p-2 md:p-4 bg-white overflow-hidden">
        <Header
          backgroundImage="/community.jpg"
          title="Our Communities"
          subtitle="Explore Vibrant Living Spaces"
          description="Discover thoughtfully planned communities that bring people together in modern, comfortable environments."
          showFilter={false}
          showContactInfo={false}
        />
      </div>

      {/* Community Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-1 bg-white hover:shadow-xl transition-all"
            >
              <div className="bg-white rounded-2xl overflow-hidden h-[320px] flex flex-col">
                {/* Image (70%) */}
                <div className="h-[70%] w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content (30%) */}
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-full text-white ${
                currentPage === index + 1 ? 'bg-red-600' : 'bg-gray-300'
              } hover:bg-red-500 transition`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Community;
