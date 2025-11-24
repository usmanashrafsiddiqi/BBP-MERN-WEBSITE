"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from "react-i18next";

const Developer = () => {
  const { t } = useTranslation();

  const developers = [
    {
      slug: "emaar",
      name: t("EMAAR"),
      description: t("EMAAR_DESC"),
      logo: "/emardev.png",
      location: "Dubai - UAE",
      featured: true,
    },
    {
        slug: "damac",
      name: t("DAMAC"),
      description: t("DAMAC_DESC"),
      logo: "/damacdev.png",
      location: "Dubai - UAE",
      featured: true,
    },
    {
       slug: "sobha",
      name: t("SHOBA"),
      description: t("SHOBA_DESC"),
      logo: "/sobhadev.png",
      location: "Dubai - UAE",
      featured: true,
    },
    {
       slug: "danube-properties",
      name: t("DANUBE_PROPERTIES"),
      description: t("DANUBE_DESC"),
      logo: "/propertiesdev.png",
      location: "Dubai - UAE",
      featured: true,
    },
    {
      slug: "ellington",
      name: t("ELLINGTON"),
      description: t("ELLINGTON_DESC"),
      logo: "/ellingtondev.png",
      location: "Dubai - UAE",
      featured: true,
    },
    {
      slug: "samana",
      name: t("SAMANA"),
      
      description: t("SAMANA_DESC"),
      logo: "/samanadev.png",
      location: "Dubai - UAE",
      featured: true,
    },
    {
       slug: "binghatti",
      name: t("BINGHATTI"),
      description: t("BINGHATTI_DESC"),
      logo: "/binghatidev.png",
      location: "Dubai - UAE",
      featured: false,
    },
    {
          slug: "azizi",

      name: t("AZIZI"),
      description: t("AZIZI_DESC"),
      logo: "/azizdev.png",
      location: "Dubai - UAE",
      featured: false,
    },
  ];

  const formatDevURL = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      {/* Header Section */}
      <div className="p-2 md:p-4 bg-white">
        <Header
          backgroundImage="/newdev.jpg"
          title={t("DEVELOPER_HEADING")}
          subtitle={t("DEVELOPER_HEADING_TEXT")}
          showFilter={false}
        />
      </div>

      {/* Developer Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">
          {t("DEVELOPERS_LIST")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <Link to={`/developer/${dev.slug}`} key={index}
              className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-4 relative hover:shadow-md transition-all block"
            >
              {dev.featured && (
                <span className="absolute top-3 right-3 text-xs bg-red-600 text-white px-2 py-1 rounded-full font-semibold">
                  FEATURED
                </span>
              )}

              <div className="bg-[#e6f0fa] h-[160px] rounded-lg flex items-center justify-center mb-4">
                <img
                  src={dev.logo}
                  alt={dev.name}
                  className="max-h-[110px] max-w-[240px] w-auto object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {dev.name}
              </h3>

              <div className="flex items-center text-sm text-gray-600 mb-2">
                {dev.location}
              </div>

              <p className="text-sm text-gray-600 leading-snug">
                {dev.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Developer;
