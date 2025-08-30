// src/pages/Developer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const developers = [
  {
    name: 'Emaar',
    location: 'Dubai - UAE',
    logo: '/emardev.png',
    featured: true,
    description:
      "Emaar Properties stands at the forefront of Dubai's real estate sector, renowned for iconic developments such as the Burj Khalifa and The Dubai Mall. In January 2025, they achieved a remarkable 2,221 transactions, totaling AED 8.63 billion in sales. Emaar’s commitment to quality and innovation continues to set industry benchmarks.",
  },
  {
    name: 'Damac',
    location: 'Dubai - UAE',
    logo: '/damacdev.png',
    featured: true,
    description:
      'DAMAC Properties has established itself as a leader in luxury real estate, offering a diverse portfolio of residential, commercial, and leisure properties across the Middle East. DAMAC recorded 1,767 transactions, with total sales reaching AED 4.13 billion in January. Their emphasis on strategic locations and premium amenities appeals to discerning investors.',
  },
  {
    name: 'Sobha',
    location: 'Dubai - UAE',
    logo: '/sobhadev.png',
    featured: true,
    description:
      'Sobha Realty is recognized for its unwavering commitment to quality and attention to detail, delivering luxury residences that exemplify craftsmanship. In January, Sobha Realty completed 407 transactions, with total sales of AED 1.19 billion.',
  },
  {
    name: 'Danube Properties',
    location: 'Dubai - UAE',
    logo: '/propertiesdev.png',
    featured: true,
    description:
      'Danube Properties is known for delivering affordable yet high-quality residences. In January 2025, Danube completed 497 transactions, totaling AED 761.54 million in sales.',
  },
  {
    name: 'Ellington',
    location: 'Dubai - UAE',
    logo: '/ellingtondev.png',
    featured: true,
    description:
      'Ellington Properties is distinguished by its design-led approach, crafting bespoke residences that prioritize quality and lifestyle. In January 2025, they achieved 237 transactions, totaling AED 620.07 million.',
  },
  {
    name: 'Samana',
    location: 'Dubai - UAE',
    logo: '/samanadev.png',
    featured: true,
    description:
      'SAMANA Developers is currently ranked as the 7th largest real estate developer in Dubai. With over 30 launched projects and 4 successful handovers, their vision is bold—and growth unstoppable.',
  },
  {
    name: 'Binghatti',
    location: 'Dubai - UAE',
    logo: '/binghatidev.png',
    featured: false,
    description:
      'Binghatti Developers is a Dubai-based luxury real estate developer known for its high-quality projects and global brand partnerships.',
  },
  {
    name: 'Azizi',
    location: 'Dubai - UAE',
    logo: '/azizdev.png',
    featured: false,
    description:
      'Azizi Developments is a Dubai-based, award-winning real estate developer known for luxury residential and commercial properties.',
  },
];

const Developer = () => {
  const formatDevURL = (name) => name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      {/* Header Section */}
      <div className="p-2 md:p-4 bg-white overflow-hidden">
        <Header
          backgroundImage="/newdev.jpg"
          title="Top Real Estate Developers"
          subtitle="Expertly Designed Spaces for Modern Living"
          showFilter={false}
        />
      </div>

      {/* Developer Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Discover Our Top Developers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <Link
              to={`/developer/${formatDevURL(dev.name)}`}
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-4 relative hover:shadow-md transition-all block"
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
                {/* <img src="/icons/location.svg" alt="location" className="w-4 h-4 mr-1" /> */}
                {dev.location}
              </div>
              <p className="text-sm text-gray-600 leading-snug">{dev.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Developer;
