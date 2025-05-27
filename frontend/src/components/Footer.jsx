// Footer.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-white px-4 py-20">
      {/* Inner Blue Box */}
      <div className="bg-[#0A3D4D] text-white rounded-2xl max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 py-20 space-y-16">
        
        {/* Newsletter Subscription */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center lg:text-left leading-snug">
            Subscribe To The Newsletter<br />To Stay Up To Date
          </h2>

          {/* Input Box */}
          <div className="flex w-full lg:w-[500px] bg-white rounded-full shadow-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email here...."
              className="flex-1 px-6 py-4 outline-none text-black text-base font-medium"
            />
            <button className="bg-[#A13214] text-white px-6 py-4 font-semibold hover:bg-[#871e05] flex items-center gap-2 text-sm sm:text-base">
              SUBSCRIBE NOW
              <span className="bg-white text-[#A13214] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                →
              </span>
            </button>
          </div>
        </div>

        <hr className="border-[#174857]" />

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-base sm:text-lg">
          {/* About Section */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-xl">About BRISKBOLD PROPERTY Site</h4>
            <p className="text-gray-300 font-medium leading-relaxed">
              We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-xl">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 font-medium">
              <li>Apartment for sale in Dubai</li>
              <li>Villa for sale in Dubai</li>
              <li>Townhouses for sale in Dubai</li>
              <li>Penthouse for sale in Dubai</li>
              <li>Our Company</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-xl">Socials</h4>
            <div className="flex gap-4 text-white text-2xl">
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-xl">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 font-medium">
              <li className="flex items-center gap-2">
                <span>📞</span> +971 56 924 2326
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span> bbpmarketing@briskboldproperties.com
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> Business Bay, Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-[#174857]" />

        {/* Footer Bottom: Logo + Rights Reserved inline on left */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-base font-medium text-gray-400 gap-4">
          <div className="flex items-center gap-2">
            <img src="/mainlogo.png" alt="BriskBold Logo" className="w-40 h-auto" />
            <span>|</span>
            <span>All rights reserved.</span>
          </div>
          <div className="text-sm sm:text-base">© 2025 | BRISKBOLD PROPERTY</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
