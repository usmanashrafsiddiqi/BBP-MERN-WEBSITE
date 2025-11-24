import React from "react";
import { useTranslation } from "react-i18next";
const team = [
  {
    id: 1,
    nameKey: "AIMAIN_RASHID",
    roleKey: "GENERAL_MANAGER",
    quoteKey: "AIMAIN_TEXT",
    image: "/mam.jfif",
  },
  {
    id: 2,
    nameKey: "HILAL_PARAY",
    roleKey: "MARKETING_DIRECTOR",
    quoteKey: "HILAL_TEXT",
    image: "/testi1.jpeg",
  },
  {
    id: 3,
    nameKey: "OBAID",
    roleKey: "MARKETING_&_SOCIAL_MEDIA_DESIGNER",
    quoteKey: "OBAID_TEXT",
    image: "/u.jpg",
  },
  {
    id: 4,
    nameKey: "MARUFA_BHAT",
    roleKey: "SALES_EXECUTIVE_LEAD",
    quoteKey: "MARUFA_TEXT",
    image: "/marufa1.png",
  },
  {
    id: 5,
    nameKey: "DIYA",
    roleKey: "SALES_LEAD_(JAPAN)",
    quoteKey: "DIYA_TEXT",
    image: "/d.jpg",
  },
  {
    id: 6,
    nameKey: "RAMAKANTH_SURSETTI",
    roleKey: "DIGITAL_MARKETING_MANAGER",
    quoteKey: "RAMAKANTH_TEXT",
    image: "/raman.jpg",
  },
  {
    id: 7,
    nameKey: "USMAN_ASHRAF",
    roleKey: "FULL_STACK_DEVELOPER",
    quoteKey: "USMAN_TEXT",
    image: "/usman.png",
  },
];


const TeamInfo = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {t("MEET_OUR_TALENTED_TEAM")}
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
         {t("TEAM_TEXT")}
        </p>
      </div>

      {/* Alternating Layout Cards with Wider Width */}
      <div className="flex flex-col gap-20 items-center">
        {team.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } bg-white rounded-xl shadow-lg overflow-hidden w-full lg:w-[90%]`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[480px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-800">{t(member.nameKey)}</h3>
              <p className="text-[#9C2B15] font-semibold text-lg mt-2">{t(member.roleKey)}</p>
              <p className="italic text-gray-600 mt-4 text-base leading-relaxed">
                 {t(member.quoteKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamInfo;
