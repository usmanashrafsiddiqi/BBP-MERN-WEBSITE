import React, { useRef } from "react";
import { FaBed, FaBath, FaWhatsapp } from "react-icons/fa";
import { PiRuler } from "react-icons/pi";
import { MdCall, MdLocationPin } from "react-icons/md";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Dummy data
const properties = [
    {
        id: 1,
        title: "AED 1,500,000",
        image: "/4.jpg",
        location: "Parallel to Sheikh Zayed Road. 5 Minutes to...",
        beds: 5,
        baths: 3,
        size: "2,800 sq ft",
        type: "VILLA",
    },
    {
        id: 2,
        title: "AED 1,200,000",
        image: "/6.jpg",
        location: "Downtown Dubai. Close to Metro Station",
        beds: 3,
        baths: 2,
        size: "1,900 sq ft",
        type: "APARTMENT",
    },
    {
        id: 3,
        title: "AED 2,100,000",
        image: "/5.jpg",
        location: "Palm Jumeirah. Beach access",
        beds: 4,
        baths: 3,
        size: "2,500 sq ft",
        type: "VILLA",
    },
    {
        id: 4,
        title: "AED 950,000",
        image: "/17.jpg",
        location: "Business Bay. Great city view",
        beds: 2,
        baths: 2,
        size: "1,300 sq ft",
        type: "APARTMENT",
    },
    {
        id: 5,
        title: "AED 3,000,000",
        image: "/17.jpg",
        location: "Emirates Hills. Luxury community",
        beds: 6,
        baths: 5,
        size: "4,500 sq ft",
        type: "VILLA",
    },
    {
        id: 6,
        title: "AED 1,800,000",
        image: "/4.jpg",
        location: "Jumeirah Village Circle",
        beds: 4,
        baths: 3,
        size: "2,200 sq ft",
        type: "VILLA",
    },
    {
        id: 7,
        title: "AED 1,350,000",
        image: "/5.jpg",
        location: "Al Barsha. Near Mall of Emirates",
        beds: 3,
        baths: 2,
        size: "1,750 sq ft",
        type: "APARTMENT",
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
                        <button onClick={() => scroll("left")} className="p-2 rounded-full border">
                            <IoChevronBack size={20} />
                        </button>
                        <button onClick={() => scroll("right")} className="p-2 rounded-full border">
                            <IoChevronForward size={20} />
                        </button>
                    </div>
                </div>

                {/* Scrollable cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 sm:gap-8 lg:gap-12 overflow-x-auto no-scrollbar px-2 snap-x scroll-smooth"
                >
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="w-[260px] sm:w-[300px] h-[330px] bg-white shadow-md rounded-2xl flex-shrink-0 overflow-hidden snap-start border border-gray-270"
                        >

                            <div className="relative h-[60%] w-full px-3 pt-3 pb-0">
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

                            <div className="p-4 h-[40%] flex flex-col gap-3 ">

                                <div>
                                    <h3 className="text-teal-700 font-extrabold text-xl">{property.title}</h3>

                                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                                        <MdLocationPin className="text-gray-400" />
                                        {property.location}
                                    </p>
                                </div>
                                <div className="mt-3 flex gap-2 flex-wrap">
                                    <span className="bg-[#E1F4F3] text-[#1E7C78] px-3 py-1 rounded-md text-sm flex items-center gap-1">
                                        <FaBed /> {property.beds} beds
                                    </span>
                                    <span className="bg-[#E1F4F3] text-[#1E7C78] px-3 py-1 rounded-md text-sm flex items-center gap-1">
                                        <FaBath /> {property.baths} baths
                                    </span>
                                    <span className="bg-[#E1F4F3] text-[#1E7C78] px-3 py-1 rounded-md text-sm flex items-center gap-1">
                                        <PiRuler /> {property.size}
                                    </span>

                                </div>
                                <div className="mt-4 flex justify-between items-center bg-[#E6F0EF] px-3 py-2 rounded-xl">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="/images/agent.jpg"
                                            alt="agent"
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-base font-bold text-[#1E7C78]">Gelya Meeder</p>

                                            <p className="text-xs text-gray-500">Manager</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="bg-teal-700 p-2 rounded-full">
                                            <MdCall className="text-white text-lg" />
                                        </span>
                                        <span className="bg-teal-700 p-2 rounded-full">
                                            <FaWhatsapp className="text-white text-lg" />
                                        </span>
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
