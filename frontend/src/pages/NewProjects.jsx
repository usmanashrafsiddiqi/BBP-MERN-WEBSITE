import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Sample data (same as your original)
const projects = [
  {
    id: 1,
    image: "/25.jpg",
    title: "Creekside Residences",
    deal: "HOT DEAL",
    price: "2BR | 1.7 M",
    startingFrom: "AED 1,700,000",
    handover: "Q4 2025",
    bedrooms: "1, 2 & 3",
    paymentPlan: "70/30",
    location: "Dubai Creek Harbour",
  },
  {
    id: 2,
    image: "/17.jpg",
    title: "Downtown Heights",
    deal: "LIMITED OFFER",
    price: "1BR | 1.2 M",
    startingFrom: "AED 1,200,000",
    handover: "Q1 2026",
    bedrooms: "1 & 2",
    paymentPlan: "60/40",
    location: "Downtown Dubai",
  },
  {
    id: 3,
    image: "/9.jpg",
    title: "Bayview Studio Tower",
    deal: "SPECIAL PRICE",
    price: "Studio | 950K",
    startingFrom: "AED 950,000",
    handover: "Q2 2026",
    bedrooms: "Studio",
    paymentPlan: "50/50",
    location: "Business Bay",
  },
  {
    id: 4,
    image: "/10.jpg",
    title: "Hillside Greens",
    deal: "HOT DEAL",
    price: "2BR | 1.8 M",
    startingFrom: "AED 1,800,000",
    handover: "Q3 2026",
    bedrooms: "2 & 3",
    paymentPlan: "80/20",
    location: "Dubai Hills Estate",
  },
  {
    id: 5,
    image: "/27.jpg",
    title: "Palm Azure Residences",
    deal: "LUXURY LAUNCH",
    price: "3BR | 2.5 M",
    startingFrom: "AED 2,500,000",
    handover: "Q4 2025",
    bedrooms: "2 & 3",
    paymentPlan: "70/30",
    location: "Palm Jumeirah",
  },
  {
    id: 6,
    image: "/14.jpg",
    title: "Skyline Towers",
    deal: "NEW LAUNCH",
    price: "2BR | 1.6 M",
    startingFrom: "AED 1,600,000",
    handover: "Q2 2026",
    bedrooms: "1, 2 & 3",
    paymentPlan: "60/40",
    location: "Downtown Dubai",
  },
  {
    id: 7,
    image: "/23.jpg",
    title: "Mudon Living",
    deal: "AFFORDABLE",
    price: "2BR | 1.5 M",
    startingFrom: "AED 1,500,000",
    handover: "Q4 2025",
    bedrooms: "1 & 2",
    paymentPlan: "70/30",
    location: "Mudon, Dubai",
  },
  {
    id: 8,
    image: "/4.jpg",
    title: "City Walk Parkside",
    deal: "HOT DEAL",
    price: "1BR | 1.1 M",
    startingFrom: "AED 1,100,000",
    handover: "Q1 2026",
    bedrooms: "1 & 2",
    paymentPlan: "65/35",
    location: "City Walk, Dubai",
  },
  {
    id: 9,
    image: "/5.jpg",
    title: "Marina Heights Studio",
    deal: "HOT DEAL",
    price: "Studio | 899K",
    startingFrom: "AED 899,000",
    handover: "Q3 2026",
    bedrooms: "Studio",
    paymentPlan: "50/50",
    location: "Dubai Marina",
  },
  {
    id: 10,
    image: "/8.jpg",
    title: "JVC Urban Oasis",
    deal: "READY SOON",
    price: "2BR | 1.65 M",
    startingFrom: "AED 1,650,000",
    handover: "Q4 2025",
    bedrooms: "1 & 2",
    paymentPlan: "60/40",
    location: "Jumeirah Village Circle",
  },
  {
    id: 11,
    image: "/13.jpg",
    title: "Arjan Smart Apartments",
    deal: "BEST VALUE",
    price: "1BR | 999K",
    startingFrom: "AED 999,000",
    handover: "Q2 2025",
    bedrooms: "Studio, 1BR",
    paymentPlan: "50/50",
    location: "Arjan, Dubai",
  },
  {
    id: 12,
    image: "/7.jpg",
    title: "Meydan Luxe Homes",
    deal: "LUXURY LAUNCH",
    price: "2BR | 1.75 M",
    startingFrom: "AED 1,750,000",
    handover: "Q1 2026",
    bedrooms: "2 & 3",
    paymentPlan: "80/20",
    location: "Meydan, Dubai",
  }
];


// 🔍 Function to extract query params
const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const NewProjects = () => {
  const query = useQuery();

  const keyword = query.get("keyword")?.toLowerCase() || "";
  const minPrice = parseInt(query.get("minPrice")) || 0;
  const maxPrice = parseInt(query.get("maxPrice")) || Infinity;
  const bedrooms = query.get("bedrooms")?.toLowerCase() || "";

  // 🧠 Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const priceNumber = parseInt(project.startingFrom.replace(/[^\d]/g, ""));

    return (
      (!keyword ||
        project.title.toLowerCase().includes(keyword) ||
        project.location.toLowerCase().includes(keyword)) &&
      (!bedrooms || project.bedrooms.toLowerCase().includes(bedrooms)) &&
      priceNumber >= minPrice &&
      priceNumber <= maxPrice
    );
  });

  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      <Header
        backgroundImage="/community.jpg"
        title="Upcoming Projects In Dubai"
        subtitle=""
        description="Find exciting new real estate projects and investment opportunities"
        showFilter={false}
      />

      <section className="max-w-[1320px] mx-auto px-4 md:px-8 py-12">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No matching projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
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

                <div className="px-4 pb-4 pt-2 text-sm text-gray-600 border-t border-gray-100 flex items-center gap-2">
                  <span className="text-gray-500">📍</span>
                  <span>{project.location}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default NewProjects;
