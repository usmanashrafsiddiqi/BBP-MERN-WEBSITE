import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';
const PrivacyPolicy = () => {
   const {t} = useTranslation();
  return (
    <div className=" min-h-screen">
      {/* Reuse Header */}
      <Header
        backgroundImage="/newpro.jpg"
        title= {t("PRIVACY_POLICY_HEADING")}
        subtitle={t("PRIVACY_POLICY_TEXT")} // ✅ Subtitle added
        description=""
        showFilter={false} // No search/filter needed
      />

      {/* Content container aligned with Header spacing */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 pt-12 flex flex-col gap-8">

        {/* Two sections */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1 text-left">
            <h5 className="text-lg font-semibold mb-2">{t("WHO_WE_ARE")}:</h5>
            <p className="mb-4">
             {t("INSIDE_TEXT")}
            </p>

            <h5 className="text-lg font-semibold mb-2">{t("INFORMATION_COLLECTION")}:</h5>
            <p className="mb-4">
              {t("INFORMATION_COLLECTION_TEXT")}
            </p>

            <h5 className="text-lg font-semibold mb-2">{t("HOW_WE_USE_YOUR_INFORMATION")}:</h5>
            <p className="mb-4">
             {t("HOW_WE_USE_YOUR_INFORMATION_TEXT")}
            </p>
          </div>

          <div className="flex-1 text-left">
            <h5 className="text-lg font-semibold mb-2">{t("COOKIES")}:</h5>
            <p className="mb-4">
              {t("COOKIES_TEXT")}
            </p>

            <h5 className="text-lg font-semibold mb-2">{t("SHARING_OF_INFORMATION")}:</h5>
            <p className="mb-4">
             {t("SHARING_OF_INFORMATION_TEXT")}
            </p>

            <h5 className="text-lg font-semibold mb-2">{t("CONTACT_US")}:</h5>
            <p>
             {t("FOR_QUESTIONS_TEXT_1")}{" "}
              <strong>{t("FOR_QUESTIONS_TEXT_2")}</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer with no extra bottom padding/margin */}
      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
