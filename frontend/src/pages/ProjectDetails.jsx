import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ Make sure you have your navbar here
import Footer from "../components/Footer";

const projectDetails = {
  reef998: {
    title: "Reef 998",
    bannerImage: "/reef998.jpg",
    startingFrom: "AED 760K",
    handover: "2028",
    type: "Studio, 1, 2 & 3 BHK",
    paymentPlan: "5.5 Year",
    location: "Dubai Land",
    description:
      "Reef 998 offers a modern living experience with stunning architecture and top-tier amenities, located in the heart of Dubai Land.",
    features: [
      "Infinity pool",
      "State-of-the-art gym",
      "24/7 security",
      "Nearby schools and malls",
    ],
    gallery: ["/reef998.jpg", "/reef998.jpg", "/reef998.jpg"],
  },
  "azizi-sikandar": {
    title: "Azizi Sikandar",
    bannerImage: "/sikandar.jpg",
    startingFrom: "AED 550K",
    handover: "2027",
    type: "Studio, 1 & 2 BR",
    paymentPlan: "50/50",
    location: "Al Furjan",
    description:
      "Premium apartments with direct access to Dubai's main highways, offering convenience and luxury.",
    features: [
      "Spacious balconies",
      "Retail outlets",
      "Community parks",
      "Close to Metro station",
    ],
    gallery: ["/sikandar.jpg", "/sikandar.jpg"],
  },
  "azizi-arian": {
    title: "Azizi Arian",
    bannerImage: "/arian.jpg",
    startingFrom: "AED 960K",
    handover: "Dec 2026",
    type: "1, 2 & 3 BR",
    paymentPlan: "40/60",
    location: "2 min Walk From Metro",
    description:
      "A luxurious development just steps away from the metro, offering high-end finishes and modern layouts.",
    features: [
      "Rooftop pool",
      "Modern gym",
      "High-speed elevators",
      "Retail spaces on ground floor",
    ],
    gallery: ["/arian.jpg", "/arian.jpg"],
  },
  "azizi-wasel": {
    title: "Azizi Wasel",
    bannerImage: "/wasel.jpg",
    startingFrom: "AED 1,675,000",
    handover: "Q2 2027",
    type: "1, 2 & 3 BR, Penthouse",
    paymentPlan: "40/60",
    location: "Dubai Island",
    description:
      "Exclusive residences on Dubai Island featuring panoramic sea views and resort-style living.",
    features: [
      "Beach access",
      "Panoramic sea view",
      "Infinity pool",
      "Private parking",
    ],
    gallery: ["/wasel.jpg", "/wasel.jpg"],
  },
  "alta-view-skyhomes": {
    title: "ALTA VIEW Skyhomes",
    bannerImage: "/view.jpg",
    startingFrom: "AED 748K",
    handover: "Q4 2028",
    type: "Studio, 1, 2 BR",
    paymentPlan: "70/30",
    location: "Jumeirah Village Circle",
    description:
      "Stylish urban apartments in JVC with panoramic city views and world-class amenities.",
    features: [
      "Sky lounge",
      "Rooftop pool",
      "Fitness center",
      "Children’s play area",
    ],
    gallery: ["/view.jpg", "/view.jpg"],
  },
  "samana-skyviews": {
    title: "Samana Skyviews",
    bannerImage: "/skyview.jpg",
    startingFrom: "AED 689,000",
    handover: "-",
    type: "Studio, 1, 2 BR",
    paymentPlan: "1%",
    location: "Dubai Production City",
    description:
      "Affordable luxury with resort-style amenities in a vibrant community.",
    features: [
      "Private pools in selected units",
      "Gym",
      "Outdoor cinema",
      "BBQ area",
    ],
    gallery: ["/skyview.jpg", "/skyview.jpg"],
  },
  "azizi-ameer": {
    title: "Azizi Ameer",
    bannerImage: "/ameer.jpg",
    startingFrom: "AED 1,269,000",
    handover: "Dec 2027",
    type: "Studio, 1, 2 & 3 BR",
    paymentPlan: "70/30",
    location: "Al Furjan",
    description:
      "Premium residences in Al Furjan designed for modern family living.",
    features: [
      "Community pool",
      "Gym",
      "Landscaped gardens",
      "Close to Metro",
    ],
    gallery: ["/ameer.jpg", "/ameer.jpg"],
  },
};


const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with Navbar Over Image */}
      <div className="relative w-full h-[500px]">
        <img
          src={project.bannerImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Navbar on top */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Title & description on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="max-w-2xl">{project.description}</p>
        </div>
      </div>

      {/* Details section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
          <p>
            <strong>Starting From:</strong> {project.startingFrom}
          </p>
          <p>
            <strong>Handover:</strong> {project.handover}
          </p>
          <p>
            <strong>Type:</strong> {project.type}
          </p>
          <p>
            <strong>Payment Plan:</strong> {project.paymentPlan}
          </p>
          <p>
            <strong>Location:</strong> {project.location}
          </p>
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Gallery */}
        {project.gallery && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Gallery:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  className="rounded-lg object-cover w-full h-48"
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
