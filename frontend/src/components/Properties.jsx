import React, { useRef } from "react";
import { FaBed, FaWhatsapp } from "react-icons/fa";
import { MdCall, MdLocationPin } from "react-icons/md";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const properties = [
  {
    id: 1,
    title: "AED 574K – 620K",
    image: "/azizimilan.jpg",
    location: "38QG+963 - City of Arabia - Dubai ",
    beds: "1 bed",
    bedroomSize: "633 sq ft",
    studio: "Studio",
    studioSize: "317 sq ft",
    type: "AZIZI MILAN",
  },
  {
    id: 2,
    title: "AED 573K",
    image: "/rafi.jpg",
    location: "AL FURJAN",
    beds: "1 bed",
    bedroomSize: "600 sq ft",
    studio: "Studio",
    studioSize: "330 sq ft ",
    type: "AZIZI RAFFI",
  },
  {
    id: 3,
    title: "AED 1.81M",
    image: "/altan.jpg",
    location: "Dubai Creek Harbour",
    beds: "1-3 beds",
    bedroomSize: "776 sq ft",
    studio: " ",
    studioSize: " ",
    type: "EMAAR ALTAM",
  },
  {
    id: 4,
    title: "AED 1.82M",
    image: "/hillside.jpg",
    location: "Dubai hills Estate",
    beds: "1-3 beds",
    bedroomSize: "726 sq ft",
    studio: " ",
    studioSize: " ",
    type: "Emaar Hillside Vida",
  },
  {
    id: 5,
    title: "AED 900,000",
    image: "/park.jpg",
    location: "AL FURJAN",
    beds: "1-3 beds",
    bedroomSize: "860 sq ft",
    studio: "Studio",
    studioSize: "446 sq ft",
    type: "Sparklz",
  },
  {
    id: 6,
    title: "AED 850K",
    image: "/spirz.jpg",
    location: "Sports City",
    beds: "1 br,office",
    bedroomSize: "1350 sq ft",
    studio: "Studio",
    studioSize: "380 sq ft",
    type: "ASPIRZ",
  },
  {
    id: 7,
    title: "AED 800K",
    image: "/times.jpg",
    location: "Silicon Oasis",
    beds: "1-3 beds",
    bedroomSize: "545 sq ft",
    studio: "Studio",
    studioSize: "386 sq ft",
    type: "Timez",
  },
  {
    id: 8,
    title: "AED 770K",
    image: "/logoons.jpg",
    location: "Dubailand",
    beds: "1-3 beds",
    bedroomSize: "750 sq ft",
    studio: "Studio",
    studioSize: "393 sq ft",
    type: "Barari Lagoons",
  },
  {
    id: 9,
    title: "AED 2.4M",
    image: "/pearl.jpg",
    location: "Dubai Islands",
    beds: "1-4 beds",
    bedroomSize: "892 sq ft",
    studio: " ",
    studioSize: " ",
    type: "Ocean Pearl",
  },
  {
    id: 10,
    title: "AED 699K",
    image: "/parkvilla.jpg",
    location: "Dubai Land ",
    beds: "1-3 beds",
    bedroomSize: "760 sq ft",
    studio: "Studio",
    studioSize: "480 sq ft",
    type: "Park Villa",
  },
];

const Properties = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Discover A Luxury Lifestyle
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border"
            >
              <IoChevronBack size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border"
            >
              <IoChevronForward size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar px-2 snap-x scroll-smooth"
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="w-[260px] sm:w-[300px] h-[360px] bg-white shadow-md rounded-2xl flex-shrink-0 overflow-hidden snap-start border border-gray-200"
            >
              <div className="relative h-[55%] w-full px-3 pt-3">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={property.image}
                    alt="property"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute top-4 right-6 bg-[#9C2B15] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {property.type}
                </span>
              </div>

              <div className="p-3 h-[45%] flex flex-col justify-between">
                <div>
                  <h3 className="text-teal-700 font-extrabold text-lg">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] mt-1 flex items-center gap-1 leading-tight">
                    <MdLocationPin className="text-gray-400" />
                    {property.location}
                  </p>
                </div>

                <div className="mt-2 flex gap-2 flex-wrap">
                  <span className="bg-[#E1F4F3] text-[#1E7C78] px-2 py-1 rounded-md text-[13px] flex justify-between items-center gap-2 min-w-[100px]">
                    <span>
                      <FaBed className="inline-block" /> {property.beds}
                    </span>
                    <span className="text-[11px] text-gray-700">
                      {property.bedroomSize}
                    </span>
                  </span>

                  {property.studio.trim() && (
                    <span className="bg-[#E1F4F3] text-[#1E7C78] px-2 py-1 rounded-md text-[13px] flex justify-between items-center gap-2 min-w-[100px]">
                      <span>{property.studio}</span>
                      <span className="text-[11px] text-gray-700">
                        {property.studioSize}
                      </span>
                    </span>
                  )}
                </div>

                <div className="mt-2 flex justify-between items-center bg-[#E6F0EF] px-3 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <img
                      src="/aimanmam.jpg"
                      alt="agent"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[14px] font-semibold text-[#1E7C78]">
                        Aiman Rashid
                      </p>
                      <p className="text-[11px] text-gray-500">Manager</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="tel:+971569242326"
                      className="bg-teal-700 p-2 rounded-full hover:bg-teal-800 transition"
                    >
                      <MdCall className="text-white text-[15px]" />
                    </a>
                    <a
                      href="https://wa.me/971569242326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-700 p-2 rounded-full hover:bg-teal-800 transition"
                    >
                      <FaWhatsapp className="text-white text-[15px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
