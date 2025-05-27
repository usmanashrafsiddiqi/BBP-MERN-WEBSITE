import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const DeveloperCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const logos = [
    "/damac.jpg",
    "/emaar.jpg",
    "/binghatti.jpg",
    "/samana.jpg",
    "/sobha.jpg",
    "/dunubai.jpg",
    "/empire.jpg",
    "/object.jpg",
    "/peace.jpg",
    "/reef.jpg",
    "/dugasta.jpg",
    "/azizi.jpg",
  ];

  const visibleLogos = logos.slice(startIndex, startIndex + 6);

  const prev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const next = () => {
    if (startIndex + 6 < logos.length) setStartIndex(startIndex + 1);
  };

  return (
    <div className="w-full py-20 bg-white text-center">
      <h2 className="text-5xl font-bold text-gray-800 mb-16">
        Explore Our Developers
      </h2>

      <div className="flex items-center justify-center gap-10 mb-14 flex-wrap">
        {visibleLogos.map((logo, index) => (
          <div
            key={index}
            className="w-72 h-72 rounded-full border-1 border-gray-300 flex items-center justify-center p-6"
          >
            <img
              src={logo}
              alt={`Developer ${index}`}
              className="max-h-32 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10">
        <button onClick={prev}>
          <ArrowLeftCircle className="w-12 h-12 text-gray-600 hover:text-gray-800" />
        </button>
        <button onClick={next}>
          <ArrowRightCircle className="w-12 h-12 text-gray-600 hover:text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default DeveloperCarousel;
