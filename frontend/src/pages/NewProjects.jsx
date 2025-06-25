// src/pages/NewProjects.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer"

const projects = [
  {
    id: 1,
    image: "/25.jpg",
    title: "AN IDEAL LOCATION",
    deal: "HOT DEAL",
    price: "2BR | 1.7 M",
    startingFrom: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai"
  },
  {
    id: 2,
    image: "/17.jpg",
    title: "AN IDEAL LOCATION",
    deal: "HOT DEAL",
    price: "1BR | 1.2 M",
    startingFrom: "AED 1,200,000",
    handover: "Q4 2025",
    bedrooms: "1, 2 & 3",
    paymentPlan: "60/40",
    location: "Downtown Dubai, UAE"
  },
  {
    id: 3,
    image: "/9.jpg",
    title: "CITY LUXURY",
    deal: "HOT DEAL",
    price: "Studio | 950K",
    startingFrom: "AED 950,000",
    handover: "Q1 2026",
    bedrooms: "Studio & 1BR",
    paymentPlan: "50/50",
    location: "Business Bay, Dubai"
  },
  {
    id: 4,
    image: "/10.jpg",
    title: "GOLF VIEW",
    deal: "HOT DEAL",
    price: "2BR | 1.8 M",
    startingFrom: "AED 1,800,000",
    handover: "Q2 2026",
    bedrooms: "1, 2, 3",
    paymentPlan: "80/20",
    location: "Dubai Hills Estate, Dubai"
  },
  {
    id: 5,
    image: "/17.jpg",
    title: "WATERFRONT LIVING",
    deal: "HOT DEAL",
    price: "3BR | 2.1 M",
    startingFrom: "AED 2,100,000",
    handover: "Q3 2025",
    bedrooms: "2 & 3",
    paymentPlan: "70/30",
    location: "Palm Jumeirah, Dubai"
  },
  {
    id: 6,
    image: "/27.jpg",
    title: "SKYLINE VIEWS",
    deal: "HOT DEAL",
    price: "2BR | 1.6 M",
    startingFrom: "AED 1,600,000",
    handover: "Q1 2026",
    bedrooms: "1, 2 & 3",
    paymentPlan: "60/40",
    location: "Downtown Dubai, UAE"
  },
  {
    id: 7,
    image: "/23.jpg",
    title: "SERENE COMMUNITY",
    deal: "HOT DEAL",
    price: "2BR | 1.5 M",
    startingFrom: "AED 1,500,000",
    handover: "Q4 2025",
    bedrooms: "Studio, 1 & 2",
    paymentPlan: "70/30",
    location: "Mudon, Dubai"
  },
  {
    id: 8,
    image: "/4.jpg",
    title: "CENTRAL PARK LIVING",
    deal: "HOT DEAL",
    price: "1BR | 1.1 M",
    startingFrom: "AED 1,100,000",
    handover: "Q2 2026",
    bedrooms: "1 & 2",
    paymentPlan: "65/35",
    location: "City Walk, Dubai"
  },
  {
    id: 9,
    image: "/5.jpg",
    title: "ICONIC ADDRESS",
    deal: "HOT DEAL",
    price: "Studio | 899K",
    startingFrom: "AED 899,000",
    handover: "Q3 2026",
    bedrooms: "Studio",
    paymentPlan: "50/50",
    location: "Dubai Marina"
  },
  {
    id: 10,
    image: "/14.jpg",
    title: "LUXURY RETREAT",
    deal: "HOT DEAL",
    price: "2BR | 1.65 M",
    startingFrom: "AED 1,650,000",
    handover: "Q4 2025",
    bedrooms: "1 & 2",
    paymentPlan: "60/40",
    location: "Jumeirah Village Circle"
  },
  {
    id: 11,
    image: "/23.jpg",
    title: "SMART LIVING",
    deal: "HOT DEAL",
    price: "1BR | 999K",
    startingFrom: "AED 999,000",
    handover: "Q2 2025",
    bedrooms: "Studio, 1BR",
    paymentPlan: "50/50",
    location: "Arjan, Dubai"
  },
  {
    id: 12,
    image: "/25.jpg",
    title: "BOUTIQUE RESIDENCE",
    deal: "HOT DEAL",
    price: "2BR | 1.75 M",
    startingFrom: "AED 1,750,000",
    handover: "Q1 2026",
    bedrooms: "2 & 3",
    paymentPlan: "80/20",
    location: "Meydan, Dubai"
  }
];

const NewProjects = () => {
  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      {/* Header */}
      <Header
        backgroundImage="/community.jpg"
        title="Upcoming Projects In Dubai"
        subtitle=""
        description="Find exciting new real estate projects and investment opportunities"
        showFilter={false}
      />

      {/* Card Grid */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              {/* Image & Tags */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow text-gray-800">
                  {project.title}
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {project.deal} <span className="ml-1 font-normal">{project.price}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Starting From:</span>
                  <span>{project.startingFrom}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Handover:</span>
                  <span>{project.handover}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Bedroom:</span>
                  <span>{project.bedrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Payment Plan:</span>
                  <span>{project.paymentPlan}</span>
                </div>
              </div>

              {/* Location */}
              <div className="px-4 pb-4 pt-2 text-sm text-gray-600 border-t border-gray-100 flex items-center gap-2">
                <span className="text-gray-500">📍</span>
                <span>{project.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default NewProjects;
