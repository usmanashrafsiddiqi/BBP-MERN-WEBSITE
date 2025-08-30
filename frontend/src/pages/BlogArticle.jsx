// src/pages/BlogArticle.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogArticles = {
  "Where-every-home-tells-a-story": {
    title: "Unlocking Dreams with BriskBold Properties: Where Every Home Tells a Story",
    subtitle: "By Marufa, Sales Executive – BriskBold Properties",
    date: "August 2025",
    image: "/newblog2.jpg",
    content: `
Stepping into the world of real estate isn’t just about buying or selling property, it’s about unlocking dreams, building futures, and creating stories that last a lifetime. At BriskBold Properties, I’ve seen how a simple decision to invest in a home can transform not only someone’s lifestyle but their entire outlook on life.

When I joined BriskBold Properties, I realized very quickly that we’re not just a real estate company, we’re dream curators. Each client I’ve worked with carries a vision: a cozy family home, a profitable investment in Dubai’s thriving real estate market, or a modern apartment with skyline views. My role as a sales executive goes beyond transactions, it’s about listening, guiding, and walking hand-in-hand with clients on their journey to finding the perfect property.

## Why BriskBold Properties Feels Different

In today’s fast-paced market, property decisions can feel overwhelming. What sets us apart is the way we simplify the process. From in-depth market insights to one-on-one consultation, we ensure that every client feels confident and informed before making their decision. We’re not here to push; we’re here to guide.

I’ve had clients who walked in confused and hesitant but left with keys to their dream home because we took the time to understand their needs, budgets, and aspirations. That’s the BriskBold difference: people-first, always.

## Dubai’s Real Estate: A Land of Opportunities

Being a part of Dubai’s real estate journey excites me every day. This city isn’t just about luxury; it’s about opportunities. From high rental yields to futuristic developments, Dubai continues to attract investors worldwide. Whether you’re a first-time buyer or a seasoned investor, BriskBold ensures you don’t just buy property, you invest in the future.

## A Personal Note

For me, real estate is personal. Every time a client smiles while signing the final agreement or sends me a picture of their new view, it reminds me why I love what I do. Homes aren’t just buildings; they’re emotions, milestones, and sometimes even legacies.

At BriskBold Properties, we don’t just sell properties, we build trust, relationships, and futures. And as your sales executive, I’m here to make sure your journey is smooth, transparent, and memorable.

So, whether you’re searching for your dream home, exploring investment opportunities, or simply curious about Dubai’s market—I’d love to be part of your story. Because at the end of the day, real estate isn’t just about property; it’s about people.
`,
  },
};

const BlogArticle = () => {
  const { slug } = useParams();
  const article = blogArticles[slug];

  if (!article) {
    return (
      <div className="text-center text-gray-700 p-10">
        Blog article not found.
      </div>
    );
  }

  // Split content into lines and detect headings
  const renderContent = (content) => {
    return content.split("\n").map((line, idx) => {
      if (line.startsWith("##")) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {line.replace("##", "").trim()}
          </h2>
        );
      } else if (line.trim() === "") {
        return <div key={idx} className="my-4" />;
      } else {
        return (
          <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });
  };

  return (
   <div className="p-2 md:p-4 bg-white overflow-hidden">
      <Header
        backgroundImage={article.image}
        showFilter={false}
        title={article.title}
        subtitle={article.date}
        description={article.subtitle}
        showContactInfo={false}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        {renderContent(article.content)}
      </div>

      <Footer />
    </div>
  );
};

export default BlogArticle;
