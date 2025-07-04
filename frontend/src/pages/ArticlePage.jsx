import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterInterestForm from '../components/RegisterInterestForm';

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
    bannerImage: '/blog2.jpg',
    sections: [
      {
        heading: 'Dubai realestate event in Tokyo',
        content: 'Key Highlights',
        list: ['Direct project launches from top-tier developers.', '1-on-1 investment consultations for Japanese clients.','Flexible payment plans & up to 10% annual ROI options'],
        image: '/tokyo.png',
      },
    ],
  },
  article3: {
    title: 'Understanding Off-Plan Properties in Dubai',
    date: 'November 7 2024',
    bannerImage: '/articleimg1.jpg',
    sections: [
      {
        heading: 'What is Off-Plan?',
        content: 'Off-plan properties are purchased before construction is completed.',
        list: ['Lower initial investment.', 'Potential for higher ROI.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article4: {
    title: 'Tips for First-Time Home Buyers',
    date: 'November 12 2024',
    bannerImage: '/blog4.jpg',
    sections: [
      {
        heading: 'Budgeting Smartly',
        content: 'Start with a clear budget including hidden costs.',
        list: ['Get pre-approved.', 'Include service fees and maintenance.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article5: {
    title: 'Investing in Dubai Marina: What You Need to Know',
    date: 'November 15 2024',
    bannerImage: '/blog5.jpg',
    sections: [
      {
        heading: 'Why Dubai Marina?',
        content: 'It’s a prime waterfront location with rental yield potential.',
        list: ['Great for short-term lets.', 'High tourism demand.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article6: {
    title: 'The Rise of Smart Homes in UAE',
    date: 'November 19 2024',
    bannerImage: '/blog6.jpg',
    sections: [
      {
        heading: 'Tech-Driven Living',
        content: 'Smart security, lighting, and energy management are becoming standard.',
        list: ['Alexa-compatible homes.', 'AI HVAC systems save energy.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article7: {
    title: 'Pros and Cons of Ready vs Off-Plan Properties',
    date: 'November 21 2024',
    bannerImage: '/blog1.jpg',
    sections: [
      {
        heading: 'Making the Right Choice',
        content: 'Understand the timeline, cost, and risk for both options.',
        list: ['Off-plan offers better payment plans.', 'Ready units give instant returns.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article8: {
    title: 'How to Stage Your Home for Sale',
    date: 'November 24 2024',
    bannerImage: '/blog2.jpg',
    sections: [
      {
        heading: 'Impress Buyers',
        content: 'Declutter and highlight your home’s best features.',
        list: ['Use neutral tones.', 'Add indoor plants and lighting.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article9: {
    title: 'Best Areas to Invest in Dubai 2025',
    date: 'December 1 2024',
    bannerImage: '/blog3.jpg',
    sections: [
      {
        heading: 'Hotspots to Watch',
        content: 'New developments in Dubai South and Business Bay show high potential.',
        list: ['Dubai South is near the expo site.', 'Business Bay is popular for short stays.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article10: {
    title: 'Common Mistakes Property Buyers Make',
    date: 'December 4 2024',
    bannerImage: '/blog4.jpg',
    sections: [
      {
        heading: 'Avoid These Pitfalls',
        content: 'Skipping legal checks or overextending your budget are common errors.',
        list: ['Always verify documents.', 'Don’t ignore maintenance costs.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article11: {
    title: 'Why Location is Key in Real Estate',
    date: 'December 7 2024',
    bannerImage: '/blog5.jpg',
    sections: [
      {
        heading: 'Value Comes From Location',
        content: 'Accessibility and amenities heavily influence pricing.',
        list: ['Proximity to metro boosts value.', 'Check for future developments.'],
        image: '/blog1.jpg',
      },
    ],
  },
  article12: {
    title: 'Understanding ROI in Rental Properties',
    date: 'December 10 2024',
    bannerImage: '/blog6.jpg',
    sections: [
      {
        heading: 'Measure Your Returns',
        content: 'Calculate ROI based on rental income vs investment cost.',
        list: ['Look for 6-8% annual return.', 'Factor in vacancy and service fees.'],
        image: '/blog1.jpg',
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
        <p className="mt-4 text-sm md:text-base">{article.date}</p>
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
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold text-green-700 mb-4">{sec.heading}</h2>
                <p className="text-gray-800 leading-relaxed mb-4">{sec.content}</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  {sec.list.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {sec.image && <img src={sec.image} alt="" className="rounded-xl mt-4 w-full object-cover" />}
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
