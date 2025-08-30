// src/pages/Blogs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = [
 {
    slug: "Where-every-home-tells-a-story",
    image: "/newblog.jpg",
    date: "August 2025",
    title: "Unlocking Dreams with BriskBold Properties: Where Every Home Tells a Story",
  },
];

const Blogs = () => {
  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      <Header
        backgroundImage="/newblog2.jpg"
        showFilter={false}
        title="BriskBold Blogs"
        subtitle="Ideas, Perspectives, Insights"
        description="Fresh perspectives and smart strategies from BriskBold’s editorial desk."
        showContactInfo={false}
      />

      <div className="text-white mt-6 text-center text-sm md:text-base font-light">
        Home / More / <span className="font-semibold">Blogs</span>
      </div>

      <div className="mt-20 max-w-[1440px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Latest Blog Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-md font-semibold text-cyan-900 mb-2">{post.title}</h3>
                <Link to={`/blogs/${post.slug}`} className="text-red-600 text-sm font-semibold hover:underline">
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
