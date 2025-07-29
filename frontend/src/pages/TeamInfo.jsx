import React from "react";

const team = [
  {
    id: 1,
    name: "Aiman Rashid",
    role: "General Manager",
    image: "/mam.jfif",
    quote: "Driving vision into action,aligning people,process and performance for lasting success",
  },
  {
    id: 2,
    name: "Hilal Paray ",
    role: "Marketing Director",
    image: "/testi1.jpeg",
    quote: "Creativity without strategy is called art. With strategy, it's marketing.",
  },
  {
    id: 3,
    name: "Obaid",
    role: "Marketing & Socail Media Designer",
    image: "/u.jpg",
    quote: "Design is not just what it looks like. Design is how it works.",
  },
  {
    id: 4,
    name: "Marufa Ahmed",
    role: "Sales Executive Lead",
    image: "/marufa1.png",
    quote: "Behind every high performing sales team is a leader who knows how to close minds before deals.",
  },
  {
    id: 5,
    name: "Diya",
    role: "Sales Lead (Japan)",
    image: "/d.jpg",
    quote: "Precision in approach,passion in execution.",
  },
  {
    id: 6,
    name: "Ramakanth Sursetti",
    role: "Digital Marketing Manager",
    image: "/raman.jpg",
    quote: "Where creativity meets conversion- and nothing is accidental ",
  },
  {
    id: 7,
    name: "Usman Ashraf",
    role: "Full Stack Developer",
    image: "/.jpg",
    quote: "Building seamless digital experiences from front to back-code that connects,designs that deliver.",
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
