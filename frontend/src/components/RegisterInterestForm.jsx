import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const RegisterInterestForm = ({
  backgroundImage = "/BULDINGS.png",
  title,       // can be passed from parent
  subtitle,    // can be passed from parent
  buttonText,  // can be passed from parent
}) => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hfi5lt",
        "template_zpvhzhc",
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
          console.log("Email error:", error.text);
          alert("There was an error sending the form.");
        }
      );
  };

  return (
    <div
      className="w-full bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto flex justify-end">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-[600px] bg-white rounded-xl shadow-lg px-8 py-12 min-h-[350px]"
        >
          {/* ✅ Title and Subtitle use passed props or fallback to translation */}
          <h2 className="text-3xl font-bold text-black mb-3">
            {title || t("REGISTER_YOUR_INTEREST")}
          </h2>
          <p className="text-gray-600 mb-8">
            {subtitle || t("OUR_FRIENDLY_TEAM_TEXT")}
          </p>

          {/* ✅ Input Fields (Translated Placeholders) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="name"
              placeholder={`${t("FIRST_NAME_HEADING")} *`}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
            />
            <input
              type="text"
              name="last_name"
              placeholder={`${t("LAST_NAME_HEADING")} *`}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder={`${t("EMAIL_HEADING")} *`}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder={`${t("MOBILE_NUMBER_HEADING")} *`}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              placeholder={`${t("MESSAGE_HEADING")} *`}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all"
          >
            {buttonText || t("SUBMIT_FORM_NOW_HEADING")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterInterestForm;
