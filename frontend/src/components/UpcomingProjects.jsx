import React, { useRef } from "react";
import { MdLocationPin } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectData = [
  {
    image: "/9.jpg",
    price: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
  {
    image: "/10.jpg",
    price: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
  {
    image: "/23.jpg",
    price: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
  {
    image: "/24.jpg",
    price: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
  {
    image: "/24.jpg",
    price: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
  {
    image: "/24.jpg",
    price: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
  {
    image: "/24.jpg",
    price: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
  {
    image: "/24.jpg",
    price: "AED 1,500,000",
    handover: "Studio, 1, 2 & 3",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "Studio, 1, 2 & 3",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
];

const UpcomingProjects = () => {
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
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
            Upcoming Projects In Dubai
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 lg:gap-12 overflow-x-auto no-scrollbar px-1 snap-x scroll-smooth"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[300px] h-[330px] bg-white shadow-md rounded-2xl flex-shrink-0 overflow-hidden snap-start border border-gray-200"
            >
              <div className="relative h-[60%] w-full px-3 pt-3 pb-0">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt="Project"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-8 h-[40%] flex flex-col justify-between">
                {/* Detail Boxes */}
                <div className="grid grid-cols-2 gap-1 text-center text-sm">
                  <div className="bg-[#E1F4F3] text-[#1E7C78] rounded-lg px-2 py-2 font-semibold">
                    <div className="text-xs">Starting Price</div>
                    <div className="text-sm font-bold">{project.price}</div>
                  </div>
                  <div className="bg-[#E1F4F3] text-[#1E7C78] rounded-lg px-2 py-2 font-semibold">
                    <div className="text-xs">Handover</div>
                    <div className="text-sm font-bold">{project.handover}</div>
                  </div>
                  <div className="bg-[#E1F4F3] text-[#1E7C78] rounded-lg px-2 py-2 font-semibold">
                    <div className="text-xs">Bedrooms</div>
                    <div className="text-sm font-bold">{project.bedrooms}</div>
                  </div>
                  <div className="bg-[#E1F4F3] text-[#1E7C78] rounded-lg px-2 py-2 font-semibold">
                    <div className="text-xs">Payment Plan</div>
                    <div className="text-sm font-bold">{project.paymentPlan}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="pt-1 text-[#1E7C78] flex items-center gap-1 text-sm">
                  <MdLocationPin className="text-gray-400" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <div className="flex justify-center mt-6 gap-3">
          <button onClick={() => scroll("left")} className="p-2 rounded-full border">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full border">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
