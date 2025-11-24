import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

// ✅ Updated Project Data with slugs
const projects = [
  {
    id: 1,
    slug: "reef998",
    image: "/reef998.jpg",
    title: "Reef 998",
    startingFrom: "AED 760K",
    handover: "2028",
    type: "Studio, 1, 2 & 3 BHK",
    paymentPlan: "5.5 Year",
    location: "Dubai Land",
  },
  {
    id: 2,
    slug: "azizi-sikandar",
    image: "/sikandar.jpg",
    title: "Azizi Sakandar",
    startingFrom: "AED 550K",
    handover: "2027",
    type: "Studio, 1 & 2 BR",
    paymentPlan: "50/50",
    location: "AL Furjan ",
  },
  {
    id: 3,
    slug: "azizi-arian",
    image: "/arian.jpg",
    title: "Azizi Arian",
    startingFrom: "AED 960K",
    handover: " Dec 2026",
    type: "1,2 & 3 BR",
    paymentPlan: "40/60",
    location: "2 min Walk From Metro",
  },
  {
    id: 4,
    slug: "azizi-wasel",
    image: "/wasel.jpg",
    title: "Azizi Wasel",
    startingFrom: "AED 1,675,000",
    handover: "Q2 2027",
    type: "1,2 & 3 BR, Penthouse",
    paymentPlan: "40/60",
    location: "Dubai Island",
  },
  {
    id: 5,
    slug: "alta-view-skyhomes",
    image: "/view.jpg",
    title: "ALTA VIEW Skyhomes",
    startingFrom: "AED 748K",
    handover: "Q4 2028",
    type: "Studio, 1, 2  BR",
    paymentPlan: "70/30",
    location: "Juneirah Village Circle",
  },
  {
    id: 6,
    slug: "samana-skyviews",
    image: "/skyview.jpg",
    title: "Samana Skyviews",
    startingFrom: "AED 689,000",
    handover: "-",
    type: "Studio, 1, 2  BR",
    paymentPlan: "1%",
    location: "Dubai Production City",
  },
  {
    id: 7,
    slug: "azizi-ameer",
    image: "/ameer.jpg",
    title: "AZIZI AMEER",
    startingFrom: "AED 1,269,000",
    handover: "Dec 2027",
    type: "Studio, 1, 2 & 3 BR",
    paymentPlan: "70/30",
    location: "AL Furjan ",
  },
];

// 🔍 Function to extract query params
const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const NewProjects = () => {
  const {t} = useTranslation();
  const query = useQuery();

  const keyword = query.get("keyword")?.toLowerCase() || "";
  const minPrice = parseInt(query.get("minPrice")) || 0;
  const maxPrice = parseInt(query.get("maxPrice")) || Infinity;
  const bedrooms = query.get("bedrooms")?.toLowerCase() || "";

  const filteredProjects = projects.filter((project) => {
    const priceNumber = parseInt(project.startingFrom.replace(/[^\d]/g, ""));
    return (
      (!keyword ||
        project.title.toLowerCase().includes(keyword) ||
        project.location.toLowerCase().includes(keyword)) &&
      (!bedrooms || project.type.toLowerCase().includes(bedrooms)) &&
      priceNumber >= minPrice &&
      priceNumber <= maxPrice
    );
  });

  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      <Header
        backgroundImage="/newpro.jpg"
        title= {t("NEW_PROJECTS")}
        subtitle=""
        description={t("OUR_PROJECTS_HEADING")}
        showFilter={false}
      />

      <section className="max-w-[1320px] mx-auto px-4 md:px-8 py-12">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No matching projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                to={`/projects/${project.slug}`}
                key={project.id}
                className="block bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
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
                    <span className="font-semibold">Type:</span>
                    <span>{project.type}</span>
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
              </Link>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default NewProjects;
