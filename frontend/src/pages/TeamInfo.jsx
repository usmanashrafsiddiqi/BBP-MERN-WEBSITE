import React from "react";

const team = [
  {
    id: 1,
    name: "Aiman Rashid",
    role: "General Manager",
    image: "/aimanmam.jpg",
    quote: "Leadership is unlocking people’s potential to become better.",
  },
  {
    id: 2,
    name: "Hilal Paray ",
    role: "Chief Operating Officer",
    image: "/testi1.jpeg",
    quote: "Creativity without strategy is called art. With strategy, it's marketing.",
  },
  {
    id: 3,
    name: "Obaid",
    role: "UI/UX Designer",
    image: "/u.jpg",
    quote: "Design is not just what it looks like. Design is how it works.",
  },
  {
    id: 4,
    name: "Marufa Ahmed",
    role: "Sales Executive Lead",
    image: "/marufa1.png",
    quote: "Creativity without strategy is called art. With strategy, it's marketing.",
  },
  {
    id: 5,
    name: "Diya",
    role: "Marketing Lead",
    image: "/d.jpg",
    quote: "Creativity without strategy is called art. With strategy, it's marketing.",
  },
  {
    id: 6,
    name: "Ramakanth Sursetti",
    role: "Socail Media Handler",
    image: "/raman.jpg",
    quote: "Code is like humor. When you have to explain it, it’s bad.",
  },
 
];

const TeamInfo = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Meet Our Talented Team
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          Discover the professionals who bring innovation, creativity, and dedication to our company.
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
              <h3 className="text-3xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-[#9C2B15] font-semibold text-lg mt-2">{member.role}</p>
              <p className="italic text-gray-600 mt-4 text-base leading-relaxed">
                “{member.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamInfo;
