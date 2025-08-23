const DealCard = ({ image, title, location, price, plan }) => {
  return (
    <div className="w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-800 uppercase">{title}</h3>
        <p className="text-gray-500 mt-1">{location}</p>
        <p className="text-lg font-semibold text-gray-900 mt-2">{price}</p>
        <p className="text-pink-600 font-bold text-sm mt-2">{plan}</p>
      </div>
    </div>
  );
};

const DealOfTheWeek = () => {
  const deals = [
    {
      image: "/afford1.webp",
      title: "AZIZI MILAN",
      location: "City of Arabia Dubailand",
      price: "Studio AED 586,000",
      plan: "1% Monthly Payment Plan",
    },
    {
      image: "/afford2.jpg",
      title: "JADE TOWER",
      location: "Majan",
      price: "1BR AED 1M",
      plan: "2 Years PHPP",
    },
    {
      image: "/afford3.jpg",
      title: "SAMANA HILLS 2",
      location: " Dubai South",
      price: "1BR AED 849,000",
      plan: "1% Monthly Payment Plan",
    },
    {
      image: "/afford4.jpg",
      title: "AZIZI RAFI",
      location: "AL Furjan",
      price: "1BR AED 834,240",
      plan: "60/40 Payment Plan",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#6B1B07] uppercase mb-12 sm:mb-16">
      Affordable picks
      </h2>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
        {deals.map((deal, index) => (
          <DealCard key={index} {...deal} />
        ))}
      </div>
    </div>
  );
};

export default DealOfTheWeek;
