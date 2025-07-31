const DealCard = ({ image, title, label, detail }) => {
    return (
      <div className="w-[270px] sm:w-[250px] md:w-[230px] lg:w-[240px] xl:w-[260px] 2xl:w-[280px] h-[32rem] rounded-2xl overflow-hidden shadow-md relative">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="h-[30%] bg-gray-100 w-full" />
          <div className="h-[70%] bg-cyan-700 w-full" />
        </div>
  
        {/* Image and overlay */}
        <div className="relative z-10 flex flex-col items-center h-full px-4 pt-14">
          <div className="relative 
              w-[85%] sm:w-[85%] md:w-[85%] 
              lg:w-[85%] xl:w-[85%] 2xl:w-[85%] 
              flex-1 overflow-hidden rounded-md shadow-lg self-center">
            <img
              src={image}
              alt="deal"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-0 right-0 px-4 text-center text-white">
              <p className="text-sm text-black font-bold uppercase">{title}</p>
              <p className="text-pink-500 font-bold text-xl mt-1">{label}</p>
              <p className="text-black font-bold text-xl mt-1">{detail}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const DealOfTheWeek = () => {
    const sampleDeals = new Array(8).fill({
      image: "/5.jpg",
      title: "An Ideal Location",
      label: "Hot Deal",
      detail: "2BR | 1.7 M",
    });
  
    return (
      <div className="w-full bg-white py-12 px-4">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#6B1B07] uppercase mb-12 sm:mb-16">
          Deal of the Week
        </h2>
  
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {sampleDeals.map((deal, index) => (
            <DealCard key={index} {...deal} />
          ))}
        </div>
      </div>
    );
  };
  
  export default DealOfTheWeek;
  

  