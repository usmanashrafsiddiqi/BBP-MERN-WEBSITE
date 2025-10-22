import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen">
      {/* Reuse Header */}
      <Header
        backgroundImage="/newpro.jpg"
        title="Privacy Policy"
        subtitle="Your data, your control" // ✅ Subtitle added
        description=""
        showFilter={false} // No search/filter needed
      />

      {/* Content container aligned with Header spacing */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 pt-12 flex flex-col gap-8">

        {/* Two sections */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1 text-left">
            <h5 className="text-lg font-semibold mb-2">Who We Are:</h5>
            <p className="mb-4">
              BriskBold Properties is a forward-thinking real estate company committed to redefining property investment experiences. We specialize in premium residential and commercial properties across Dubai, offering clients exclusive access to some of the city’s most sought-after locations. Our mission is to help investors, buyers, and homeowners achieve their real estate goals with ease, transparency, and trust. With expert market knowledge and a client-first approach, we provide seamless property buying, selling, and investment solutions turning dreams into valuable assets.
            </p>

            <h5 className="text-lg font-semibold mb-2">Information Collection:</h5>
            <p className="mb-4">
              We may collect personal and organizational details such as your name, email address, company name, and project requirements when you interact with us via our website, forms, or consultation requests.
            </p>

            <h5 className="text-lg font-semibold mb-2">How We Use Your Information:</h5>
            <p className="mb-4">
              Your information helps us understand your business goals, provide tailored automation and development solutions, follow up on service inquiries, and send important updates about our offerings and innovations.
            </p>
          </div>

          <div className="flex-1 text-left">
            <h5 className="text-lg font-semibold mb-2">Cookies:</h5>
            <p className="mb-4">
              We use cookies to enhance your browsing experience and analyze traffic patterns. You can choose to disable cookies via your browser settings, but this may limit some functionality of our website.
            </p>

            <h5 className="text-lg font-semibold mb-2">Sharing of Information:</h5>
            <p className="mb-4">
              We do not sell your personal data. We may share information with trusted partners to support project execution, marketing, or infrastructure — all under strict confidentiality agreements.
            </p>

            <h5 className="text-lg font-semibold mb-2">Contact Us:</h5>
            <p>
              For questions about this Privacy Policy or how we manage your data, please contact us at{" "}
              <strong>Bbpmarketing@briskboldproperties.com</strong>.
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
