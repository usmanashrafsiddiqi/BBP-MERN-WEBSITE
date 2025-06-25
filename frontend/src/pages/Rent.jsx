// src/pages/Rent.jsx
import React from 'react';
import Header from '../components/Header';
import { FaBed, FaBath, FaRulerCombined, FaPhone, FaCommentDots } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import Footer from "../components/Footer"

const properties = [
  {
    id: 1,
    image: '/24.jpg',
    price: 'AED 1,500,000',
    type: 'VILLA',
    location: 'Parallel to Sheikh Zayed Road. 5 Minutes to Metro.',
    beds: 5,
    baths: 3,
    area: '2,800',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 2,
    image: '/9.jpg',
    price: 'AED 1,500,000',
    type: 'APARTMENT',
    location: 'Downtown Dubai, close to Dubai Mall.',
    beds: 3,
    baths: 2,
    area: '1,800',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 3,
    image: '/14.jpg',
    price: 'AED 1,500,000',
    type: 'VILLA',
    location: 'Palm Jumeirah, ocean view property.',
    beds: 6,
    baths: 4,
    area: '3,500',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 4,
    image: '/15.jpg',
    price: 'AED 1,500,000',
    type: 'APARTMENT',
    location: 'Marina Walk, fully furnished unit.',
    beds: 2,
    baths: 2,
    area: '1,600',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 5,
    image: '/25.jpg',
    price: 'AED 1,500,000',
    type: 'VILLA',
    location: 'Jumeirah Park, quiet gated community.',
    beds: 4,
    baths: 3,
    area: '3,000',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 6,
    image: '/27.jpg',
    price: 'AED 1,500,000',
    type: 'APARTMENT',
    location: 'Business Bay, high-floor unit.',
    beds: 2,
    baths: 2,
    area: '1,400',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 7,
    image: '/17.jpg',
    price: 'AED 1,500,000',
    type: 'VILLA',
    location: 'The Springs, family-friendly area.',
    beds: 3,
    baths: 2,
    area: '2,500',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 8,
    image: '/23.jpg',
    price: 'AED 1,500,000',
    type: 'APARTMENT',
    location: 'Dubai Hills, pool-facing view.',
    beds: 3,
    baths: 2,
    area: '1,700',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 9,
    image: '/10.jpg',
    price: 'AED 1,500,000',
    type: 'VILLA',
    location: 'Arabian Ranches, corner unit.',
    beds: 4,
    baths: 3,
    area: '3,200',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 10,
    image: '/6.jpg',
    price: 'AED 1,500,000',
    type: 'APARTMENT',
    location: 'City Walk, modern interiors.',
    beds: 2,
    baths: 2,
    area: '1,500',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 11,
    image: '/9.jpg',
    price: 'AED 1,500,000',
    type: 'VILLA',
    location: 'Al Barari, luxury eco-community.',
    beds: 5,
    baths: 4,
    area: '4,000',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  },
  {
    id: 12,
    image: '/17.jpg',
    price: 'AED 1,500,000',
    type: 'APARTMENT',
    location: 'JLT Cluster F, walk to metro.',
    beds: 3,
    baths: 2,
    area: '1,650',
    agent: {
      name: 'Gelya Meeder',
      role: 'Manager',
      avatar: '/agent.jpg',
    }
  }
];

const Rent = () => {
  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      <Header
        backgroundImage="/mainbg.png"
        title="Find Property In UAE"
        subtitle=""
        description=""
        showFilter={false}
      />

      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-52">
                <img src={property.image} alt="property" className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {property.type}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-[#0F4157] font-semibold text-lg">{property.price}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                  <HiLocationMarker className="text-red-500" />
                  {property.location}
                </p>

                <div className="flex justify-between text-gray-700 text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <FaBed /> {property.beds} beds
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBath /> {property.baths} baths
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRulerCombined /> {property.area} ft²
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <img src={property.agent.avatar} alt="agent" className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium">{property.agent.name}</p>
                      <p className="text-xs text-gray-500">{property.agent.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-white bg-[#1DA1F2] p-2 rounded-full text-xs">
                      <FaPhone />
                    </button>
                    <button className="text-white bg-[#25D366] p-2 rounded-full text-xs">
                      <FaCommentDots />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Rent;
