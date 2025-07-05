import React, { useRef } from "react";
import { MdLocationPin } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectData = [
  {
    image: "/9.jpg",
    price: "AED 1,500,000",
    handover: "Q4 2025",
    bedrooms: "Studio, 1, 2 & 3",
    paymentPlan: "80/20 Post Handover",
    location: "Dubai Creek Harbour (The Lagoons), Dubai",
  },
  {
    image: "/10.jpg",
    price: "AED 2,100,000",
    handover: "Q3 2026",
    bedrooms: "1, 2 & 3",
    paymentPlan: "70/30",
    location: "Downtown Dubai",
  },
  {
    image: "/23.jpg",
    price: "AED 950,000",
    handover: "Q1 2026",
    bedrooms: "Studio & 1 Bed",
    paymentPlan: "60/40",
    location: "Jumeirah Village Circle, Dubai",
  },
  {
    image: "/24.jpg",
    price: "AED 1,800,000",
    handover: "Q4 2025",
    bedrooms: "1, 2 & 3",
    paymentPlan: "50/50",
    location: "Business Bay, Dubai",
  },
  {
    image: "/25.jpg",
    price: "AED 2,500,000",
    handover: "Q2 2027",
    bedrooms: "2 & 3 Beds",
    paymentPlan: "60/40",
    location: "Emaar Beachfront",
  },
  {
    image: "/26.jpg",
    price: "AED 1,200,000",
    handover: "Q3 2025",
    bedrooms: "1 & 2 Beds",
    paymentPlan: "70/30 Post Handover",
    location: "Dubai Hills Estate",
  },
  {
    image: "/27.jpg",
    price: "AED 1,000,000",
    handover: "Q4 2026",
    bedrooms: "Studio, 1 & 2",
    paymentPlan: "50/50",
    location: "Dubai Marina",
  },
  {
    image: "/28.jpg",
    price: "AED 1,300,000",
    handover: "Q1 2026",
    bedrooms: "1, 2 & 3 Beds",
    paymentPlan: "60/40",
    location: "Palm Jumeirah",
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
          className="flex gap-6 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar px-2 snap-x scroll-smooth"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[300px] h-[360px] bg-white shadow-md rounded-2xl flex-shrink-0 overflow-hidden snap-start border border-gray-200"
            >
              <div className="relative h-[55%] w-full px-3 pt-3">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt="Project"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-3 h-[45%] flex flex-col justify-between">
                {/* Detail Boxes */}
                <div className="grid grid-cols-2 gap-1 text-center text-sm">
                  <div className="bg-[#E1F4F3] text-[#1E7C78] rounded-lg px-2 py-2 font-semibold">
                    <div className="text-[11px]">Starting Price</div>
                    <div className="text-[13px] font-bold">{project.price}</div>
                  </div>
                  <div className="bg-[#E1F4F3] text-[#1E7C78] rounded-lg px-2 py-2 font-semibold">
                    <div className="text-[11px]">Handover</div>
                    <div className="text-[13px] font-bold">{project.handover}</div>
                  </div>
                  <div className="bg-[#E1F4F3] text-[#1E7C78] rounded-lg px-2 py-2 font-semibold">
                    <div className="text-[11px]">Bedrooms</div>
                    <div className="text-[13px] font-bold">{project.bedrooms}</div>
                  </div>
                  <div className="bg-[#E1F4F3] text-[#1E7C78] rounded-lg px-2 py-2 font-semibold">
                    <div className="text-[11px]">Payment Plan</div>
                    <div className="text-[13px] font-bold">
                      {project.paymentPlan}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="pt-2 text-[#1E7C78] flex items-center gap-1 text-[13px]">
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
