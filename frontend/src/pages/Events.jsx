import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import RegisterInterestForm from '../components/RegisterInterestForm';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next'; // 👈 import translation hook

const Events = () => {
  const { t } = useTranslation(); // 👈 get translation function

  const eventPosts = [
    {
      slug: "article1",
      image: "/blog1.jpg",
      date: t("1ST_EVENT_DATE"),
      title: t("1ST_EVENT_TITLE"),
      description: "", // you can add t("1ST_EVENT_DESC") if available
    },
    {
      slug: "article2",
      image: "/blog2.jpg",
      date: t("2ND_EVENT_DATE"),
      title: t("2ND_EVENT_TITLE"),
      description: "",
    },
    {
      slug: "article3",
      image: "/blog3.jpg",
      date: t("3RD_EVENT_DATE"),
      title: t("3RD_EVENT_TITLE"),
      description: t("3RD_EVENT_DESC"),
    },
  ];

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="p-2 md:p-4 bg-white">
        <Header
          backgroundImage="/blog.jpg"
          showFilter={false}
          title={t("EVENTS_HEADING")}
          subtitle={t("EVENTS_SUB_HEADING")}
          description={t("EVENTS_TEXT")}
          showContactInfo={false}
        />
      </div>

      {/* Event search bar */}
      <div className="w-full flex justify-center mt-[-60px] relative z-0 px-4">
        <div className="flex items-center w-full max-w-3xl bg-white rounded-full overflow-hidden border shadow-md">
          <input
            type="text"
            placeholder={t("SEARCH_BY_KEYWORD")}
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
        Home / More / <span className="font-semibold">{t("EVENTS_HEADING")}</span>
      </div>

      {/* Latest Events Section */}
      <div className="mt-20 max-w-[1440px] mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {t("LATEST_EVENT")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eventPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt={`Event ${idx + 1}`}
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
                  {post.date}
                </div>
                <h3 className="text-md font-semibold text-cyan-900 mb-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{post.description}</p>
                <Link
                  to={`/events/${post.slug}`}
                  className="text-red-600 text-sm font-semibold hover:underline"
                >
                  {t("READ_ARTICLE")} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RegisterInterestForm />
      <Footer />
    </div>
  );
};

export default Events;
