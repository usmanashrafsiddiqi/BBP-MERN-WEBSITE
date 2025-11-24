import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const FeatureBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="flex justify-center py-12 px-4">
      <div
        className="relative w-full rounded-3xl overflow-hidden bg-cover bg-center"
        style={{
          maxWidth: '96rem', // Custom width (96rem = 1536px, more than 7xl)
          backgroundImage: "url('/technology .png')", // Replace with actual path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 z-0 rounded-3xl" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-20 py-40 text-white text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-extrabold max-w-5xl leading-snug">
           {t("WE_WORK_HARD_TEXT")}
          </h2>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center bg-white text-teal-600 font-semibold px-6 py-3 rounded-full hover:bg-teal-100 transition"
          >
           {t("READ_MORE_ABOUT_US")} <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
