import React from "react";
import Header from "../components/Header";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Career = () => {
  return (
    <div className="p-2 md:p-4 bg-white overflow-hidden">
      {/* Reuse Header */}
      <Header
        backgroundImage="/contactbg.jpg"
        showFilter={false}
        title="Join Our Team At BRISKBOLD PROPERTY"
        subtitle=""
        description="If you’re passionate about growing your career and making a real impact, BRISKBOLD is the place for you. We’re looking for talented, driven individuals to join our team and be part of something extraordinary."
      />

      {/* Why Work At Section */}
      <section className="mt-16 w-full px-4 lg:px-8 xl:px-12 bg-blue-50 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Why Work At <br />
            <span className="text-gray-800">BRISKBOLD PROPERTY?</span>
          </h2>
          <p className="text-gray-700 font-semibold mb-4">
            At BRISKBOLD, we believe that success comes from bold ideas,
            continuous learning, and teamwork. Our goal is to create an
            environment where you can grow, develop new skills, and achieve your
            career goals.
          </p>
          <p className="text-gray-600">
            We’re not just colleagues—we’re a community. Every team member’s
            contribution is valued, every achievement is celebrated, and every
            challenge is faced together. When you join BRISKBOLD, you join a
            family that’s committed to helping you succeed.
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
          Find The Right Job For You
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Here are some of the recent job vacancies at BRISKBOLD PROPERTY
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Customer Service Representative",
              slug: "customer-service-representative",
              desc: "Be the friendly face of BRISKBOLD, helping customers with inquiries and providing world-class support.",
            },
            {
              title: "Sales Executive",
              slug: "sales-executive",
              desc: "Join our sales team and drive business growth by building client relationships and closing deals.",
            },
            {
              title: "Back Office Assistant",
              slug: "back-office-assistant",
              desc: "Support daily operations by managing administrative tasks, maintaining records, and ensuring smooth internal coordination.",
            }
          ]
            .map((job, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl px-6 py-4 flex flex-col md:flex-row md:items-center justify-between shadow-sm"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-bold text-teal-700">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{job.desc}</p>
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
                    VIEW DETAILS
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
