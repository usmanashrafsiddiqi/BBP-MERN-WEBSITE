// src/pages/BlogArticle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogArticles = {
  "future-of-real-estate": {
    title: "The Future of Real Estate Is Bold — Are You In?",
    date: "July 2025",
    image: "/blog1.jpg",
    content: `Today, it's not just about location — it's about timing, data, innovation, and vision. At BriskBold Properties, we’re not selling walls and windows. We’re offering a mindset — one that’s smart, scalable, and built for the future.
    
We work with investors, homeowners, and global buyers who think ahead. People who want more than just a transaction — they want a strategy.

From ultra-modern residences to high-yield investment units, BriskBold offers exclusive access to some of the most promising real estate opportunities — backed by market intelligence, tech-driven tools, and end-to-end support.`,
    bullets: [
      "👉 Curated, high-potential properties",
      "👉 Real-time data & trend-backed insights",
      "👉 Personalized consultation, zero guesswork",
      "👉 A bold, clear roadmap for long-term ROI",
    ],
    ending: `Whether you’re looking to diversify your portfolio or make your first confident move — we’re the partner that brings clarity to complexity.

This isn’t just real estate. This is BriskBold.`,
  },
};

const BlogArticle = () => {
  const { slug } = useParams();
  const article = blogArticles[slug];

  if (!article) {
    return <div className="text-center text-gray-700 p-10">Blog article not found.</div>;
  }

  return (
    <div className="relative">
      <Header
        backgroundImage={article.image}
        showFilter={false}
        title={article.title}
        subtitle={article.date}
        description=""
        showContactInfo={false}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <div className="text-base md:text-lg whitespace-pre-line mb-6">
          {article.content}
        </div>

        <ul className="list-none space-y-2 text-base font-medium">
          {article.bullets.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <div className="mt-8 text-base md:text-lg whitespace-pre-line font-medium">
          {article.ending}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogArticle;
