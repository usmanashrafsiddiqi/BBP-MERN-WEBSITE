import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterInterestForm from '../components/RegisterInterestForm';
import SectionImageSlider from '../components/ImageSlider';
const articles = {
  article1: {
    title: 'BriskBold Properties Hosts Landmark Dubai Real Estate Showcase in Japan 2024',
    date: "Nov 15, 2024",
    bannerImage: '/blog1.jpg',
    sections: [
      {
        heading: ' A Glimpse into Global Investment Opportunities',
        content: 'The event brought together a diverse audience of high-net-worth individuals, investors, and real estate enthusiasts eager to explore the booming Dubai property market.',
        list: ['Live presentations by our Dubai-based real estate experts', 'One-on-one consultation sessions tailored for Japanese investors','Information on residency through property investment programs','A preview of Dubai’s futuristic infrastructure plans, including smart city projects, flying taxis, and metro line expansions'],
        image: '/japan1.jpeg',
      },
    ],
  },
  article2: {
    title: 'June 2025 Event Unites Dubai Real Estate & Global Investors ',
    date: " June 2025",
    bannerImage: '/tok.jpg',
    sections: [
      {
        heading: 'Dubai realestate event in Tokyo',
        content: 'Key Highlights',
        list: ['Direct project launches from top-tier developers.', '1-on-1 investment consultations for Japanese clients.','Flexible payment plans & up to 10% annual ROI options'],
       images: [
        '/tokyo.png',
        '/blog2.jpg'  
      ]
      },
    ],
  },
   article3: {  
    title: 'BriskBOLD Properties Team Get-Together 2025',
    date: "July 2025",
    bannerImage: '/blog3.jpg',
    sections: [
      {
        heading: 'On 29th July 2025, the BriskBOLD Properties family came together for a memorable Day at Café Sufi Riverfront, Kashmir.',
        content: 'It was more than just a gathering – it was a celebration of teamwork, shared goals, and the strong bond that drives our success. Surrounded by the serene beauty of Kashmir, our team enjoyed moments of connection, laughter, and inspiration.At BriskBOLD, we believe that great businesses are built not only on vision and strategy but also on people who work together with passion and purpose. Events like these remind us that we are not just colleagues, but a family growing stronger every day.Together we grow. Together we achieve.',
        list: [
          'Strengthening bonds beyond the workplace',
          'Celebrating teamwork in the heart of Kashmir',
          'Inspiring conversations & shared vision',
          'A perfect blend of work, joy, and togethernes'
        ],
        images: [
  '/eve5.jpg',
  '/eve1.jpg',
  '/eve2.jpg',
  '/eve3.jpg',
  '/eve4.jpg',
]
      },
    ],
  },
};

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return <div className="text-center py-20 text-red-600 text-xl">Article not found.</div>;
  }

  return (
    <div className="relative">
      {/* Header */}
      <div className="p-2 md:p-4 bg-white overflow-hidden">
        <Header
          backgroundImage={article.bannerImage}
          showFilter={false}
          title=""
          subtitle=""
          description=""
          showContactInfo={false}
        />
      </div>

      {/* Only Date Overlay */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 px-4">
        {/* <p className="mt-4 text-sm md:text-base">{article.date}</p> */}
      </div>

      {/* Article Title */}
      <div className="mt-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 max-w-4xl mx-auto">
          {article.title}
        </h1>
      </div>

      {/* Article Content */}
      <div className="w-full mt-12 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Text */}
          <div className="w-full lg:w-[60%] space-y-12">
  {article.sections.map((sec, idx) => (
    <div
      key={idx}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        {sec.heading}
      </h2>

      <p className="text-gray-800 leading-relaxed mb-4">{sec.content}</p>

      {sec.list && sec.list.length > 0 && (
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          {sec.list.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}

      {/* Handle images */}
      {sec.images && sec.images.length > 0 ? (
        <div className="relative mt-4">
          <SectionImageSlider images={sec.images} />
        </div>
      ) : sec.image ? (
        <img
          src={sec.image}
          alt={sec.heading}
          className="w-full h-64 object-cover rounded-xl mt-4"
        />
      ) : null}
    </div>
  ))}
</div>


          {/* Right: Sidebar */}
          <div className="w-full lg:w-[40%] space-y-8">
            <div className="bg-white border p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-base mb-3">Let’s share with your Friends.</h3>
              <div className="flex space-x-4 text-2xl text-blue-600">
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <div className="bg-[#17354c] text-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Get A Free Consultation</h3>
              <form className="space-y-3 text-sm">
                <input className="w-full p-2 rounded bg-white text-black" placeholder="First Name" />
                <input className="w-full p-2 rounded bg-white text-black" placeholder="Last Name" />
                <input className="w-full p-2 rounded bg-white text-black" placeholder="Email" />
                <input className="w-full p-2 rounded bg-white text-black" placeholder="Mobile Number" />
                <select className="w-full p-2 rounded bg-white text-black">
                  <option>Nationality</option>
                </select>
                <div className="flex gap-4">
                  <label><input type="radio" name="mode" /> Phone</label>
                  <label><input type="radio" name="mode" /> Email</label>
                </div>
                <label className="flex items-start gap-2">
                  <input type="checkbox" /> I’ve read and agree to the Privacy Policy
                </label>
                <button className="bg-red-600 text-white w-full p-2 rounded hover:bg-red-700">Get A Free Consultation!</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <RegisterInterestForm />
      </div>

      <Footer />
    </div>
  );
};

export default ArticlePage;
