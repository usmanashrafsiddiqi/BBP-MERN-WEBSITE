// src/pages/BlogArticle.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogArticles = {
  "Where-every-home-tells-a-story": {
    titleKey: "BLOG_1",
    subtitleKey: "BY_MARUFA",
    dateKey: "BLOG_DATE",
    image: "/newblog2.jpg",
    contentKeys: [
      "BLOG_DESC_1",
      "BLOG_DESC_2",
      "WHY_BRISKBOLD_FEELS_DIFFERENT",
      "WHY_BRISKBOLD_FEELS_DIFFERENT_TEXT",
      "WHY_BRISKBOLD_FEELS_DIFFERENT_TEXT_2",
      "DUBAI'S_REAL_ESTATE",
      "DUBAI'S_REAL_ESTATE_TEXT",
      "A_PERSONAL_NOTE",
      "A_PERSONAL_NOTE_1",
      "A_PERSONAL_NOTE_2",
      "A_PERSONAL_NOTE_3",
    ],
  },
};

const BlogArticle = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const article = blogArticles[slug];

  if (!article) {
    return (
      <div className="text-center text-gray-700 p-10">
        {t("BLOG_NOT_FOUND", "Blog article not found.")}
      </div>
    );
  }

  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      <Header
        backgroundImage={article.image}
        showFilter={false}
        title={t(article.titleKey)}
        subtitle={t(article.dateKey)}
        description={t(article.subtitleKey)}
        showContactInfo={false}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 space-y-6">
        {article.contentKeys.map((key, idx) => {
          // Detect headings based on convention (keys with "##" or uppercase)
          const isHeading = key.includes("WHY_") || key.includes("DUBAI") || key.includes("A_PERSONAL_NOTE");
          return isHeading ? (
            <h2 key={idx} className=" text-gray-800 mt-8 mb-4">
              {t(key)}
            </h2>
          ) : (
            <p key={idx} className=" text-gray-700 leading-relaxed">
              {t(key)}
            </p>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default BlogArticle;
