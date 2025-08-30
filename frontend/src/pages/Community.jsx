import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Sample community data
const communityData = [
  {
    name: 'Dubai Creek Harbour',
    description: "Dubai Creek Harbour, one of the most recent waterfront developments, is currently one of Dubai's most sought-after areas. The vibrant neighborhood includes residential, retail,commercial, and entertainment venues, as well as green spaces, a marina, and a yacht club, making it an ideal place to live, work, and play.",
    image: '/dubaiceek.jpg',
  },
  {
    name: 'Downtown Dubai',
    description: "Downtown Dubai is without a doubt one of the best neighborhoods for entertainment, shopping, and dining. Downtown Dubai offers everything: commercial, residential, hotel, entertainment, shopping, andworld-class leisure. This is one of the most sought-after places to live, with a variety of residences ranging from apartments to villas offeringspectacular views of the world's most iconic skyline.",
    image: '/downtown.jpg',
  },
  {
    name: 'Arabian Ranches',
    description: "Arabian Ranches is one of Dubai's most well-known gated villa communities. There's something about The Ranches' laid-back, everyone-knows-everyone vibe that residents can't get enough of. There are upscale villas and townhouses with Arabian and Spanish themes, as well as excellent community amenities, here.",
    image: '/arabianra.jpg',
  },
  {
    name: 'Dubai Marina',
    description: "Dubai Marinaoften hailed as the largest artificial marina globally, and is a vast, sprawling waterfront community that stretchesover an impressive 3 kilometers. The marina is a masterpiece of modern planning.",
    image: '/dubaimarina.jpg',
  },
  {
    name: 'Jumera Village Circle',
    description: "JVC stands out as the 2nd best residential community in Dubai. It is widely celebrated for its balanced blend of urban livingand peaceful tranquility. The residential community is extremely well-planned, and it provides a serene environment.",
    image: '/village.jpg',
  },
  {
    name: 'Dubailand',
    description: "Dubailand is historically regarded as an ideal residential community in Dubai for families. This family-centric community offers schools, clinics, and retail markets. It provides a comprehensive, family-friendly environment where residents can access educational, healthcare, and shopping facilities without venturing far from the comfort of their homes.",
    image: '/dubailand.jpg',
  },
  {
    name: 'Emirates Hills',
    description: "Emirates Hills offers a quiet life with distinctive green views and luxury villa neighborhoods. It is nestled close to the center of Dubai, which adds to its allure. This community is the ideal destination for families seeking various entertainment and service facilities.",
    image: '/hills.jpg',
  },
  {
    name: 'Business Bay',
    description: "Business Bay, located south of downtown Dubai, is widely known for its luxurious mix of apartments and hotels, creating a highly sophisticated urban landscape. The community’s skyline is decorated with upscale residences and world-class hotels. Its central location not only attracts tourists and residents seeking a lavish lifestyle but also positions the residential area as a sought-after hub for professionals and entrepreneurs.",
    image: '/bay.jpg',
  },
  {
    name: 'Jebel Ali',
    description: "Jebel Ali is a town, primarily located within an industrial area. This community, flourishing in the southwestern part of Dubai, boasts villas and luxury properties with green spaces and various amenities. It is seen as a highly affordable residential community in Dubai.What’s Special: Residential gems within an industrial area.",
    image: '/ali.jpg',
  },
  {
    name: 'AL Barsha',
    description: "Al Barsha, a newly built residential area, is a testament to Dubai’s continuous evolution. This community has become a sought-after haven for those looking for affordable yet quality living in the city. The area’s fantastic geographic accessibility also adds to its allure, which makes it a strategic choice for residents seeking convenience in their daily lives. What's Special: Reasonable prices and excellent accessibility.",
    image: '/BARSHA.jpg',
  },
  {
    name: 'Burg Khalifa Housing Community',
    description: "Burj Khalifa, the tallest tower in the world, provides a high-span luxury residential community. Standing at 828 meters, it houses over 900 vertical residences. The residential area of unimaginable luxuries offers various facilities such as swimmingpools, restaurants, offices, and shopping opportunities with global brands. However, this makes it one of the most expensive residential communities in Dubai.What’s Special: Tallest tower with high-span luxury living.",
    image: '/burj.jpg',
  },
  {
    name: 'Al Furjan',
    description: "Al Furjan is a vibrant, family-friendly residential community in Dubai, developed by Nakheel Properties, known for its well-planned infrastructure and modern amenities. It offers a mix of villas, townhouses, and apartments, with a focus on creating a close-knit community feel. The area combines traditional Emirati architecture with modern design and features landscaped gardens, shaded walkways, and abundant green spaces",
    image: '/furjan.jpg',
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
          backgroundImage="/newcom.jpg"
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
