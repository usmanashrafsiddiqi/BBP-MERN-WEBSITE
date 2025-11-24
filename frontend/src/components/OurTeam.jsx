import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for routing
import { useTranslation } from "react-i18next";
const teamMembers = [
  {
    id: 1,
    name: "General Manager",
    image: "/mam.jfif",
    isHighlighted: true,
  },
  { id: 2, image: "/testi1.jpeg" },
  { id: 3, image: "/u.jpg" },
  { id: 4, image: "/d.jpg" },
  { id: 5, image: "/marufa1.png" },
];

const OurTeam = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation
const { t } = useTranslation();
  const handleSeeAll = () => {
    navigate("/team"); // ✅ Navigate to TeamInfo page
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1320px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800"> {t("OUR_TEAM")}</h2>
        <p className="text-gray-600 mt-2 mb-10 text-base md:text-xl max-w-2xl mx-auto">
          {t("OUR_TEAM_TEXT")}
        </p>

        {/* Flex layout: Left manager, right grid */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
          {/* Left large manager image */}
          <div className="w-full lg:w-[30%]">
            <div className="relative rounded-xl overflow-hidden h-[620px]">
              <img
                src={teamMembers[0].image}
                alt="General Manager"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white px-4 py-2 rounded-lg shadow text-sm font-semibold text-gray-700">
                {teamMembers[0].name}
              </div>
            </div>
          </div>

          {/* Right grid: 2 rows x 2 columns (4 members) */}
          <div className="w-full lg:w-[70%] grid grid-cols-2 gap-4 md:gap-6">
            {teamMembers.slice(1, 5).map((member) => (
              <div
                key={member.id}
                className="rounded-xl overflow-hidden h-[300px]"
              >
                <img
                  src={member.image}
                  alt={`Team member ${member.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SEE ALL TEAM MEMBER Button */}
        <button
          onClick={handleSeeAll}
          className="mt-10 bg-[#9C2B15] hover:bg-[#831e0d] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto"
        >
          {t("SEE_ALL_TEAM_MEMBERS")}
          <span className="bg-white text-[#9C2B15] rounded-full p-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 1.414L10.414 10l3.293 3.293a1 1 0 01-1.414 1.414L8.586 10l3.707-3.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default OurTeam;
