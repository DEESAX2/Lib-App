import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router";
import { FaQuestionCircle, FaGlobe } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };

  return (
    <nav className="bg-[#FFFF] text-shadow-black fixed top-0 left-0 right-0 shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-[#E7E7E7] text-black text-xs py-6 px-4 flex justify-between items-center">
        <div></div>
        <div className="flex items-center space-x-4">
          <a
            href="https://houstonlibrary.org/get-help"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline text-xl bold font-light focus:outline-none"
          >
            <FaQuestionCircle className="mr-1 text-[#B32317] text-xl" />
            {t("getHelp")}
          </a>
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-1 hover:underline text-xl font-light focus:outline-none"
            >
              <FaGlobe className="mr-1 text-[#B32317] text-xl" />
              <span>{t("language")}</span>
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDropdown && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow z-10">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => changeLanguage("fr")}
                >
                  French
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => changeLanguage("ch")}
                >
                  Chinese
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => changeLanguage("de")}
                >
                  German
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => changeLanguage("pt")}
                >
                  Portuguese
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-1 bg-[#B32317]"></div>
      </div>
      {/* Main Bar */}
      <div className="container mx-auto px-2 py-2 flex justify-between items-center relative">
        <Link to="#" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Library Logo"
            className="h-15 w-25 rounded-full"
          />
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Menu */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-40 transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li>
            <Link
              to="/"
              className="text-black-600 font-bold hover:text-[#B32317] transition"
              onClick={() => setMenuOpen(false)}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="text-black-600 font-bold hover:text-[#B32317] transition"
              onClick={() => setMenuOpen(false)}
            >
              {t("addBook")}
            </Link>
          </li>
          <li>
            <Link
              to="/booklist"
              className="text-black-600 font-bold hover:text-[#B32317] transition"
              onClick={() => setMenuOpen(false)}
            >
              {t("bookList")}
            </Link>
          </li>
          <li>
            <a
              href="#footer"
              className="text-black-600 font-bold hover:text-[#B32317] transition"
              onClick={() => setMenuOpen(false)}
            >
               {t("contact")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
