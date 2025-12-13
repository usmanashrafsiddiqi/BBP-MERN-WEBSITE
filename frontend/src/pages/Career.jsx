import React from "react";
import Header from "../components/Header";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Assuming you're using react-i18next

const Career = () => {
  const { t } = useTranslation();

  const jobs = [
  {
    title: "JOB_PROFILE_1",
    slug: "customer-service-representative",
    desc: "CUSTOMER_SERVICE_TEXT",
  },
  {
    title: "JOB_PROFILE_2",
    slug: "sales-executive",
    desc: "SALES_EXECUTIVE_TEXT",
  },
  {
    title: "JOB_PROFILE_3",
    slug: "back-office-assistant",
    desc: "BACK_OFFICE_ASSISTANT_TEXT",
  },
];

  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      {/* Header */}
      <Header
        backgroundImage="/contactbg.jpg"
        showFilter={false}
        title={t("CAREERS_HEADING")}
        subtitle=""
        description={t("CAREERS_TEXT")}
      />

      {/* Why Work At Section */}
      <section className="mt-16 w-full px-4 lg:px-8 xl:px-12 bg-blue-50 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("WHY_WORK_WITH_BRISKBOLD").split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <p className="text-gray-700 font-semibold mb-4">
            {t("WHY_WORK_TEXT").split(". ").slice(0, 1).join(". ") + "."}
          </p>
          <p className="text-gray-600">
            {t("WHY_WORK_TEXT").split(". ").slice(1).join(". ")}
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/4.jpg"
            alt="Career Team"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="mt-16 w-full px-4 lg:px-8 xl:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t("FIND_THE_RIGHT_JOB")}
        </h2>
        <p className="text-center text-gray-600 mb-8">{t("JOB_VACANCIES")}</p>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl px-6 py-4 flex flex-col md:flex-row md:items-center justify-between shadow-sm"
            >
              <div className="mb-4 md:mb-0">
             <h3 className="text-lg font-bold text-teal-700">{t(job.title)}</h3>
               <p className="text-gray-600 text-sm mt-1">{t(job.desc)}</p>

              </div>

              <div className="flex items-center justify-between md:justify-end gap-6">
                <div className="flex items-center text-sm text-gray-600">
                  <FaMapMarkerAlt className="mr-1 text-blue-600" />
                  Dubai, UAE
                </div>
                <Link
                  to={`/careers/${job.slug}`}
                  className="flex items-center gap-2 border border-red-700 text-red-700 px-4 py-2 rounded-full hover:bg-red-700 hover:text-white transition"
                >
                  {t("VIEW_DETAILS")}
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Career;
