import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterInterestForm from '../components/RegisterInterestForm';

const articles = {
  article1: {
    title: 'Top 5 Real Estate Trends To Watch In 2024',
    date: 'October 28 2024',
    bannerImage: '/blog.jpg',
    sections: [
      {
        heading: 'Sustainable Living Takes Center Stage',
        content:
          'As climate change remains a top global concern, sustainable housing is no longer a luxury but a necessity. Buyers are increasingly drawn to homes featuring solar panels, energy-efficient appliances, and green building materials.',
        list: [
          'Net-zero homes and passive designs are gaining popularity.',
          'Green certifications like LEED are becoming a major selling point.',
        ],
        image: '/articleimg1.jpg',
      },
      {
        heading: 'Smart Homes Revolutionize Living Spaces',
        content:
          'The integration of smart technologies is transforming properties into intelligent living spaces. From AI-powered security systems to voice-controlled lighting, buyers now prioritize convenience and efficiency.',
        list: [
          '85% of new homebuyers prefer properties with pre-installed smart home systems.',
          'Emerging tech like AI-powered HVAC systems is saving homeowners thousands annually.',
        ],
        image: '/4.jpg',
      },
    ],
  },
  article2: {
    title: 'How to Choose the Perfect Neighborhood for Your Family',
    date: 'October 28 2024',
    bannerImage: '/blogcover2.jpg',
    sections: [
      {
        heading: 'Understand Your Family’s Needs',
        content:
          'From access to quality schools to proximity to work and safety, every family has unique needs. Start by listing what matters most to you.',
        list: [
          'Look for good schools, parks, and low crime rates.',
          'Walkability and commute times can greatly impact lifestyle.',
        ],
        image: '/articleimg3.jpg',
      },
      {
        heading: 'Do a Community Check',
        content:
          'Spend time in the neighborhood before deciding. Visit on weekdays and weekends to get a feel for noise, traffic, and atmosphere.',
        list: [
          'Talk to locals and visit nearby shops.',
          'Review future developments or zoning plans.',
        ],
        image: '/articleimg4.jpg',
      },
    ],
  },
};

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Article not found.
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Header with background */}
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

      {/* Title overlay */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 px-4">
        {/* <h1 className="text-3xl md:text-5xl font-bold">{article.title}</h1> */}
        <p className="mt-4 text-sm md:text-base">{article.date}</p>
      </div>

      {/* Article Content Section */}
      <div className="w-full mt-24 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Article Text */}
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
                {sec.image && (
                  <img src={sec.image} alt="" className="rounded-xl mt-4 w-full object-cover" />
                )}
              </div>
            ))}
          </div>

          {/* Right: Sidebar */}
          <div className="w-full lg:w-[40%] space-y-8">
            {/* Social Share Box */}
            <div className="bg-white border p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-base mb-3">Let’s share with your Friends.</h3>
              <div className="flex space-x-4 text-2xl text-blue-600">
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>

            {/* Short Consultation Form */}
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
                <div>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" /> I’ve read and agree to the Privacy Policy
                  </label>
                </div>
                <button className="bg-red-600 text-white w-full p-2 rounded hover:bg-red-700">Get A Free Consultation!</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Register Section */}
      <div className="mt-24">
        <RegisterInterestForm />
      </div>

      <Footer />
    </div>
  );
};

export default ArticlePage;
