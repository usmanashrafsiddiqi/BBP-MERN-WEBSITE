// src/pages/DeveloperDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const developerDetails = {
  emaar: {
    name: 'Emaar',
    location: 'Dubai - UAE',
    brochureLink: '#',
    image: '/emaar.jpg',
    shortDescription: 'With a legacy of crafting iconic landmarks and vibrant communities, Emaar is committed to creating spaces where life, business, and leisure flourish harmoniously.',
    about: "Emaar Properties stands at the forefront of Dubai's real estate sector, renowned for iconic developments such as the Burj Khalifa and The Dubai Mall. In January 2025, they achieved a remarkable 2,221 transactions, totaling AED 8.63 billion in sales. Emaar’s commitment to quality and innovation continues to set industry benchmarks.",
    features: ['Iconic Projects', 'Master-Planned Communities', 'Diverse Portfolio', 'Design Excellence', 'Timely Delivery', 'Sustainability', 'Customer-Centric Approach', 'Emaar One App','Global Presence'],
    whyChoose: `With a net asset value of AED 177.5 Bn (USD 48.3 Bn)*, Emaar Properties is among the most admired and valuable real estate development companies in the world. Emaar, which has established competencies in real estate, retail and shopping malls, hospitality, and leisure, shapes new lifestyles through its commitment to design excellence, build quality, and timely delivery.`,
    stats: { happyClients: '150,000+', ongoingProjects: '50,000+', experience: '13+ Years' },
    projectImage: '/5.jpg',
  },

  damac: {
    name: 'Damac',
    location: 'Dubai - UAE',
    brochureLink: '#',
    image: '/damacdev.png',
    shortDescription: 'Leading the luxury real estate market with opulent residences and commercial spaces.',
    about: 'DAMAC Properties has established itself as a leader in luxury real estate, offering a diverse portfolio of residential, commercial, and leisure properties across the Middle East. DAMAC recorded 1,767 transactions, with total sales reaching AED 4.13 billion in January. Their emphasis on strategic locations and premium amenities appeals to discerning investors.',
    features: ['Luxury Residences and Master Communities', 'Branded Residences and Partnerships', 'World-Class Amenities', 'Green and Sustainable Design','Strong Investment Potential'],
    whyChoose: `Renowned for iconic developments and exceptional craftsmanship, DAMAC Properties blends elegance, innovation, and world-class amenities. With a presence in the UAE, Saudi Arabia, Qatar, and beyond, its portfolio of luxury residential, commercial, and leisure properties sets a global standard for excellence.`,
    stats: { happyClients: '120,000+', ongoingProjects: '30,000+', experience: '20+ Years' },
    projectImage: '/6.jpg',
  },

  sobha: {
    name: 'Sobha',
    location: 'Dubai - UAE',
    brochureLink: '#',
    image: '/sobhadev.png',
    shortDescription: 'Unwavering focus on quality, precision, and premium lifestyle living.',
    about:  'Sobha Realty is recognized for its unwavering commitment to quality and attention to detail, delivering luxury residences that exemplify craftsmanship. In January, Sobha Realty completed 407 transactions, with total sales of AED 1.19 billion.',
    features: ['Superior Construction Quality', 'Architectural Excellence', 'Customer-Centric Approach','Sustainability','World-Class Amenities','Strategic Locations','Craftsmanship and Attention to Detail','Gated Community Living'],
    whyChoose: `Sobha stands out for its detail-oriented development process and consistent delivery of world-class properties.`,
    stats: { happyClients: '90,000+', ongoingProjects: '15,000+', experience: '25+ Years' },
    projectImage: '/9.jpg',
  },

  'danube-properties': {
    name: 'Danube Properties',
    location: 'Dubai - UAE',
    brochureLink: '#',
    image: '/propertiesdev.png',
    shortDescription: 'Affordable luxury redefined with timely project delivery.',
    about: 'Danube Properties is known for delivering affordable yet high-quality residences. In January 2025, Danube completed 497 transactions, totaling AED 761.54 million in sales.',
    features: ['Affordable Luxury and Value-Driven Properties ', 'Timely Delivery', ' World-Class Amenities','Customer-Centric Approach','Sustainability and Eco-Friendly Features','Innovation and Technology','Community Engagement','Flexible Payment Plans'],
    whyChoose: `Danube Properties the property development arm of the business is rated amongst top 5 developers in the UAE. Company’s major achievement include on time delivery of exceptional quality assets with record sales success.
Backed by its consistent growth and immense consumer confidence Danube Group has received over 50 awards in different categories. The Groups philosophy is to deliver exceptional quality and build long lasting relationship.`,
    stats: { happyClients: '80,000+', ongoingProjects: '12,000+', experience: '10+ Years' },
    projectImage: '/10.jpg',
  },

  ellington: {
    name: 'Ellington',
    location: 'Dubai - UAE',
    brochureLink: '#',
    image: '/ellingtondev.png',
    shortDescription: 'Design-led development for artistic and timeless living.',
    about: 'Ellington Properties is distinguished by its design-led approach, crafting bespoke residences that prioritize quality and lifestyle. In January 2025, they achieved 237 transactions, totaling AED 620.07 million.',
    features: ['Design-Led Approach', 'Customization Options', 'Luxury Amenities','Customer-Centric Approach','Prime Locations','Boutique Approach','Strong Investment Potential'],
    whyChoose: `Award winning boutique developer in the UAE, offering a vast portfolio of luxurious properties in prestigious locations. From elegant family villas to contemporary buildings, they aim to provide high end design and unique living experiences in each of their projects. s one of Dubai’s most renowned real estate developers, Ellington has celebrated prestigious industry achievements – such as the International Property Awards for Best Residential Development in Ellington Beach House, Best Kitchen Design for Ellington House, and Architecture Multiple Residence for Ocean House.
Other award winning Ellington projects include The Quayside, Crestmark, and One River Point in Business Bay.`,
    stats: { happyClients: '60,000+', ongoingProjects: '8,000+', experience: '8+ Years' },
    projectImage: '/14.jpg',
  },

  samana: {
    name: 'Samana',
    location: 'Dubai - UAE',
    brochureLink: '#',
    image: '/samanadev.png',
    shortDescription: 'Pioneering lifestyles through bold, elegant, and innovative developments.',
    about: 'SAMANA Developers is currently ranked as the 7th largest real estate developer in Dubai. With over 30 launched projects and 4 successful handovers, their vision is bold—and growth unstoppable.',
    features: ['Private Pools', 'Smart Home Technology', 'Resort-Style Amenities','Modern Design','Flexible Payment Plans','Prime Locations','High ROI and Rental Yields','Sustainability'],
    whyChoose: `Known for its iconic designs and lifestyle-driven communities, SAMANA creates spaces that inspire, elevate, and stand out. SAMANA Developers is currently ranked as the 7th largest real estate developer in Dubai. With over 30 launched projects and 4 successful handovers, our vision is bold—and our growth, unstoppable.
SAMANA Developers Marks Dh3.7 Billion Real Estate Investment in Dubai with ‘Barari Views’, Launch - First Project with Innovative Smart Home Technology`,
    stats: { happyClients: '50,000+', ongoingProjects: '10,000+', experience: '7+ Years' },
    projectImage: '/10.jpg',
  },

  binghatti: {
    name: 'Binghatti',
    location: 'Dubai - UAE',
    brochureLink: '#',
    image: '/binghatidev.png',
    shortDescription: 'Iconic branded residences with creative architectural flair.',
    about: 'Binghatti collaborates with global luxury brands to create distinctive real estate projects that merge architecture and identity.',
    features: ['Unique Architectural Design', 'Luxury Amenities', 'Strategic Locations','High-Quality Construction','Community Focused','Smart Home Features','Flexible Payment Plans','Strong ROI Potential'],
    whyChoose: `From striking facades to impeccably designed interiors, Binghatti developments have now set new standards in modern living, providing residents with a unique blend of artistic expression and practical functionality.With every project, we push the envelope of conventional boundaries to create spaces that resonate with modern lifestyles yet preserve an essence of timeless elegance.`,
    stats: { happyClients: '40,000+', ongoingProjects: '5,000+', experience: '15+ Years' },
    projectImage: '/14.jpg',
  },

  azizi: {
    name: 'Azizi',
    location: 'Dubai - UAE',
    brochureLink: '#',
    image: '/azizdev.png',
    shortDescription: 'Elegant and accessible homes built with precision and care.',
    about: 'Azizi Developments is a Dubai-based, award-winning real estate developer known for luxury residential and commercial properties.',
    features: ['Prime Dubai Locations', 'High Rental Returns and Property Value Appreciation', 'Flexible Payment Plans','Sustainability','Customer-Centric Approach'],
    whyChoose: `Azizi Developments is a top developer based in Dubai, UAE. It has delivered thousands of homes to investors and residents from over 100 countries. The company takes pride in its large collection of luxury properties in Dubai’s most popular areas. Focusing on modern designs, and quality construction. And a strong commitment to transparency and customer satisfaction. Azizi’s properties suit all types of lifestyles, and the company’s goal is to create great living experiences and improve the communities it serves. Azizi is currently building around 10,000 homes that will be finished by 2025. It also planned for over 31,000 more units to be completed between 2025 and 2028, which is worth billions of dollars. Known for building the second tallest skyscraper in the UAE, Azizi has a proven track record and a strong future pipeline of projects.`,
    stats: { happyClients: '70,000+', ongoingProjects: '9,000+', experience: '14+ Years' },
    projectImage: '/15.jpg',
  },
};

const DeveloperDetail = () => {
  const { name } = useParams();
  const dev = developerDetails[name];

  if (!dev) return <div className="text-center py-20 text-xl">Developer not found.</div>;

  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      <Header
        backgroundImage="/devloper.jpg"
        title={`${dev.name}: Redefining Real Estate Excellence`}
        subtitle=""
        description={`Welcome to ${dev.name}, a trusted name in real estate known for luxury, innovation, and quality.`}
        showFilter={false}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Info Block */}
        <div className="w-full bg-[#f4f8fb] py-8 px-6 md:px-12 rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex items-start gap-4">
            <img src={dev.image} alt={dev.name} className="w-40 h-40 object-contain rounded-full bg-white border p-2" />
            <div>
              <h2 className="text-xl font-semibold text-[#00487C]">{dev.name} Properties</h2>
              <p className="text-sm text-gray-500">{dev.location}</p>
              <p className="text-sm text-gray-600 mt-2 max-w-lg leading-relaxed">{dev.shortDescription}</p>
            </div>
          </div>
          <a href={dev.brochureLink} target="_blank" rel="noopener noreferrer" className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800">
            Download Brochure →
          </a>
        </div>

        {/* About */}
        <div className="bg-white border rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold">About {dev.name} Properties</h3>
          <p className="text-gray-700">{dev.about}</p>

          <h4 className="text-lg font-semibold mt-6">Key Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-5 text-gray-600">
            {dev.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Why Choose & Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2 bg-white border rounded-2xl p-6 space-y-4">
            <h4 className="text-xl font-bold text-gray-800">Why Choose {dev.name}?</h4>
            {dev.whyChoose.split('\n').map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="bg-white border rounded-2xl overflow-hidden">
            <img src={dev.projectImage} alt="Upcoming Project" className="w-full h-56 object-cover" />
            <div className="p-4 space-y-1">
              <h5 className="font-semibold text-gray-800 text-lg">Upcoming project by {dev.name}</h5>
              <p className="text-sm text-gray-600">
                Each residence is designed with an emphasis on elegance, comfort, and functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div><h4 className="text-2xl font-bold">{dev.stats.happyClients}</h4><p className="text-gray-600">Happy homeowners worldwide</p></div>
          <div><h4 className="text-2xl font-bold">{dev.stats.ongoingProjects}</h4><p className="text-gray-600">Ongoing projects in prime locations</p></div>
          <div><h4 className="text-2xl font-bold">{dev.stats.experience}</h4><p className="text-gray-600">Experience in delivering excellence</p></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DeveloperDetail;
