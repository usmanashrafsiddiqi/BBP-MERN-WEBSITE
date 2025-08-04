import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

const Contact = () => {
  const title = "Get In Touch With Us";
  const subtitle = "Our friendly team would love to hear from you.";
  const buttonText = "SUBMIT FORM NOW →";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hfi5lt",     // Replace with your actual EmailJS service ID
        "template_zpvhzhc",    // Replace with your actual EmailJS template ID
        form.current,
        "I4CoOnYf72QcHtckV" 
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Form submitted successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("There was an error sending the form.");
        }
      );
  };

  return (
    <div>
      {/* ✅ Header Section */}
      <div className="p-2 md:p-4 bg-white overflow-hidden">
        <Header
          title="We’re Here To Help!"
          subtitle=""
          description=""
          backgroundImage="/contactbg.jpg"
          showFilter={false}
          showContactInfo={true}
        />
      </div>

      {/* ✅ Map + Custom Form Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start px-8 py-16 gap-8 max-w-[1440px] mx-auto">
        {/* 🗺️ Map Section */}
        <div className="w-full lg:w-1/2 h-[450px] rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=BRISKBOLD+PROPERTIES,+Business+Bay,+Dubai,+UAE&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* 📝 Custom Form Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 mb-6">{subtitle}</p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 text-lg md:text-xl"
          >
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="first_name"
                  required
                  className="w-full px-5 py-4 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="last_name"
                  required
                  className="w-full px-5 py-4 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2" htmlFor="mobile">
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-5 py-4 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="w-full px-5 py-4 border border-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-full flex items-center justify-center"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
   {/* 🌍 Office Locations Section with background image */}
<div
  className="bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-20 text-white"
  style={{ backgroundImage: "url('/contactbg.jpg')" }} // replace path if needed
>
  <div className="max-w-[1440px] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    {/* Card - Dubai */}
    <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <img src="/dubai.png" alt="UAE Logo" className="w-12 mb-3" />
      <h3 className="text-2xl font-semibold mb-2">Dubai</h3>
      <p className="text-sm leading-relaxed">
        Office 3507<br />
        Churchill Executive Tower<br />
        Business Bay, Dubai, UAE
      </p>
      <div className="mt-4 space-y-2 text-sm text-gray-300">
        <p>📞 (+971) 554372731</p>
        <p>💬 +971554372731</p>
      </div>
    </div>

    {/* Card - Canada */}
    <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <img src="/canada.png" alt="Canada Logo" className="w-12 mb-3" />
      <h3 className="text-2xl font-semibold mb-2">Canada</h3>
      <p className="text-sm leading-relaxed">
        100-4310, Sherwoodtowne Boulevard<br />
        Mississauga, Ontario<br />
        Canada, L4Z4C4
      </p>
      <div className="mt-4 space-y-2 text-sm text-gray-300">
        <p>📞 (+1) 6474463712</p>
        <p>💬 (+1) 6474463712</p>
      </div>
    </div>

    {/* Card - Japan */}
    <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <img src="/japan.png" alt="Japan Logo" className="w-12 mb-3" />
      <h3 className="text-2xl font-semibold mb-2">Japan</h3>
      <p className="text-sm leading-relaxed">
        7th Floor Wakamatsu building<br />
        Honchome 3-3-6, Chuo-ku<br />
        Tokyo, Japan
      </p>
      <div className="mt-4 space-y-2 text-sm text-gray-300">
        <p>📞 (+81) 8012198750</p>
        <p>💬 (+81) 8012198750</p>
      </div>
    </div>

    {/* Card - India */}
    <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <img src="/india.png" alt="India Logo" className="w-12 mb-3" />
      <h3 className="text-2xl font-semibold mb-2">India</h3>
      <p className="text-sm leading-relaxed">
        Delhi<br />
        Jammu & Kashmir
      </p>
      <div className="mt-4 space-y-2 text-sm text-gray-300">
        <p>📞 (+91) 9103163366</p>
        <p>💬 (+91) 9103163366</p>
      </div>
    </div>

    {/* Card - USA */}
    <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <img src="/united.png" alt="USA Logo" className="w-12 mb-3" />
      <h3 className="text-2xl font-semibold mb-2">United States</h3>
      <p className="text-sm leading-relaxed">
        3400 COTTAGE WAY, STE G2 #24309<br />
        Sacramento, CA 95825
      </p>
      <div className="mt-4 space-y-2 text-sm text-gray-300">
        <p>📞 (+1) 415 755 8939</p>
      </div>
    </div>

  </div>
</div>


      <Footer />
    </div>
  );
};

export default Contact;
