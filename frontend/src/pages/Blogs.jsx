import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import RegisterInterestForm from '../components/RegisterInterestForm';
import Footer from '../components/Footer';

const Blogs = () => {
  return (
    <div className="px-2 md:px-6 lg:px-12 py-6 relative">
      {/* Header without text */}
      <Header
        backgroundImage="/blog.jpg"
        showFilter={false}
        title=" Real Estate Insights,"
        subtitle="Tips, and Trends"
        description=" your go-to resource for expert advice, market updates, and 
inspiration for your real estate journey"
        showContactInfo={false}
      />

      {/* Text overlay on top of Header */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold whitespace-pre-line leading-tight">
          Real Estate Insights,
          <br />
          Tips, And Trends
        </h1>
        <p className="mt-4 text-sm md:text-lg font-light max-w-3xl mx-auto">
          your go-to resource for expert advice, market updates, and inspiration for your real estate journey.
        </p>
      </div>

      {/* Blog search bar */}
      <div className="w-full flex justify-center mt-[-60px] relative z-10 px-4">
        <div className="flex items-center w-full max-w-3xl bg-white rounded-full overflow-hidden border shadow-md">
          <input
            type="text"
            placeholder="Search By Keyword"
            className="flex-grow px-4 py-3 text-sm outline-none rounded-l-full"
          />
          <button className="bg-red-700 text-white px-5 py-3 rounded-r-full hover:bg-red-800 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 20l-5.2-5.2a7.5 7.5 0 10-1.4 1.4L20 21l1-1zM4 10.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="text-white mt-6 text-center text-sm md:text-base font-light">
        Home / More / <span className="font-semibold">Blogs</span>
      </div>

      {/* Latest Blogs Section */}
      <div className="mt-12 max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Latest Blogs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, idx) => {
            const slug = `article${idx + 1}`;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
              >
                <img
                  src={`/blog${(idx % 6) + 1}.jpg`} // blog1.jpg to blog6.jpg cycling
                  alt="Blog Thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10m-13 9h16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                      />
                    </svg>
                    October 28 2024
                  </div>
                  <h3 className="text-md font-semibold text-cyan-900 mb-1">
                    How to Choose Perfect Neighborhood for Your Family
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    From schools to amenities, here's a checklist to guide your decision......
                  </p>
                  <Link
                    to={`/blogs/${slug}`}
                    className="text-red-600 text-sm font-semibold hover:underline"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <RegisterInterestForm />
      <Footer />
    </div>
  );
};

export default Blogs;
