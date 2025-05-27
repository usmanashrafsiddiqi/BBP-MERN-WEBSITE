import React from "react";

const RegisterInterestForm = ({
  backgroundImage = "/BULDINGS.png",
  title = "Register Your Interest",
  subtitle = "Our friendly team would love to hear from you.",
  buttonText = "SUBMIT FORM NOW →",
  showLeftText = false,
  leftTitle = "",
  leftDescription = "",
  leftBulletPoints = [], // 🆕 Add bullet list prop
}) => {
  return (
    <div className="h-[700px] w-full bg-white flex items-center justify-center p-4 mt-22">
      <div
        className="w-[1800px] h-[600px] rounded-3xl bg-cover bg-center relative flex items-center justify-between p-6"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* ✅ Left Text */}
        {showLeftText ? (
          <div className="w-1/2 pl-10 text-white">
            <h2 className="text-5xl font-bold mb-4">{leftTitle}</h2>
            <p className="text-2xl max-w-md whitespace-pre-line mb-4">
              {leftDescription}
            </p>

            {/* ✅ Bullet Points */}
            {leftBulletPoints.length > 0 && (
  <ul className="list-disc list-inside text-white text-lg leading-relaxed font-medium space-y-2 mt-4">
    {leftBulletPoints.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
)}

          </div>
        ) : (
          <div className="w-1/2" />
        )}

        {/* ✅ Right-side Form */}
        <div className="w-full max-w-[620px] bg-white rounded-2xl shadow-2xl p-10 mr-[100px]">
          <h2 className="text-6xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-2xl text-gray-900 mb-6">{subtitle}</p>

          <form className="space-y-6 text-2xl">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
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
                rows={3}
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
    </div>
  );
};

export default RegisterInterestForm;
