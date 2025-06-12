import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoth from "../assets/images/logoth.png";
import sandylogo from "../assets/images/sandylogo.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="bg-[#404040] text-white py-6 text-sm font-['Inter'] rounded-lg mt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logos Section */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex flex-row items-center space-x-0 mb-2">
            <img src={sandylogo} alt="Books Haven Public Library Logo" className="h-30 rounded-md"/>
            <img src={logoth} alt="Books Haven Public Library" className="h-30 rounded-md"/>
          </div>
          <span className="text-base font-semibold text-gray-300">Books Haven Public Library Assoc.</span>
        </div>

        {/* Contact Info Section */}
        <div>
           <h4 className="text-lg font-bold mb-2">{t("connectWithUs")}</h4>
          <p>{t("Accra-city")}</p>
          <p className="mb-2">{t("phoneNumber")}</p>
          <div className="flex space-x-3 mt-2">
            <a href="https://facebook.com/esther.manor" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F3] transition-transform duration-300" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-120" />
            </a>
            <a href="https://twitter.com/GITOATOP" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2] transition-transform duration-300" aria-label="Twitter">
              <FaTwitter className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-120" />
            </a>
            <a href="https://www.linkedin.com/in/sandra-allotey-1266942a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077B5] transition-transform duration-300" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://www.instagram.com/like_earl?igsh=bGFxMWhmYm02Z2wx&utm_source=qr" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E4405F] transition-transform duration-300" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://wa.me/233548311401" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25D366] transition-transform duration-300" aria-label="WhatsApp">
              <FaWhatsapp className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-125" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-2">{t("quickLinks")}</h4>
          <ul className="space-y-1">
            <li><a href="/catalog" className="hover:underline">{t("catalog")}</a></li>
            <li><a href="/events" className="hover:underline">{t("events")}</a></li>
            <li><a href="/membership" className="hover:underline">{t("membership")}</a></li>
            <li><a href="/faq" className="hover:underline">{t("faq")}</a></li>
            <li><a href="/contact" className="hover:underline">{t("contactUs")}</a></li>
          </ul>
        </div>

        {/* Opening Hours & Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-2">{t("openingHours")}</h4>
          <ul className="text-sm mb-4">
            <li>{t("monFri")}: 8:00am - 6:00pm</li>
            <li>{t("sat")}: 9:00am - 4:00pm</li>
            <li>{t("sun")}: {t("Closed")}</li>
          </ul>
          <h4 className="text-lg font-bold mb-2">{t("newsletter")}</h4>
          <form className="flex">
            <input
              type="email"
              placeholder={t("yourEmail")}
              className="p-1 rounded text-black text-xs placeholder-white bg-transparent border border-white"
            />
            <button type="submit" className="ml-2 px-2 py-1 bg-[#1877F3] text-white rounded text-xs">
              {t("subscribe")}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center sm:flex sm:justify-between sm:items-center container mx-auto px-4">
        <p className="text-xs mb-2 sm:mb-0">
          &copy; 2025 {t("Books Haven Public Library")}.{t("allRightsReserved")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-2 text-xs">
          <a href="/accessibility" className="hover:text-blue-400 transition-colors duration-300">
            {t("accessibility")}
          </a>
          <a href="/privacy" className="hover:text-blue-400 transition-colors duration-300">
            {t("privacyAndSecurity")}
          </a>
          <a href="/policies" className="hover:text-blue-400 transition-colors duration-300">
            {t("libraryPolicies")}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;