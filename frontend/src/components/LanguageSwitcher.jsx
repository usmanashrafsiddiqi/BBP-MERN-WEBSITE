import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "jp" : "en");
  };

  return (
    <div
      onClick={toggleLanguage}
      className="relative w-20 h-10 bg-transparent border border-gray-100 rounded-full cursor-pointer flex items-center justify-between px-3"
    >
      {/* Labels */}
      <span className="text-white text-xs font-semibold select-none">EN</span>
      <span className="text-white text-xs font-semibold select-none">JP</span>

      {/* Sliding circle */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center transition-all duration-300 ${
          isEnglish ? "left-1" : "left-[calc(100%-2.25rem)]"
        }`}
      >
        {isEnglish ? (
          <FaGlobe className="w-4 h-4 text-blue-500" />
        ) : (
          <img
            src="/japan.png"
            alt="Japan"
            className="w-5 h-5 rounded-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
