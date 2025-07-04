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
      <Footer />
    </div>
  );
};

export default Contact;
