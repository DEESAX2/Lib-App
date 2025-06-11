import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,FaWhatsapp} from "react-icons/fa";
import logoth from "../assets/images/logoth.png";
import sandylogo from "../assets/images/sandylogo.png";

function Footer() {
  return (
    <footer id="footer"className="bg-[#404040] text-white py-2 text-sm font-['Inter'] rounded-lg">
      <div className="container mx-auto px-4 flex flex-wrap justify-start items-start">
        {/* Logos Section */}
        <div className=" container mx-auto px-4 flex flex-wrap justify-start items-start">
         <img src={sandylogo} alt="Books Haven Public Library Logo"className="h-25 mb-4 rounded-md"/>

         <img src={logoth} alt="Books Haven Public Library"className="h-25 rounded-md"/>
        </div>

        {/* Contact Info Section */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">
            Books Haven Public Library
          </h4>
          <p>B.J Da Rocha loop,20.</p>
          <p>Accra, Ghana</p>
          <p className="mb-3">+233 545 725 331</p>
          <p className="mb-2 font-bold text-xl">Connect with us!</p>
          <div className="flex justify-center sm:justify-start space-x-3">
            <a href="#"className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1877F3] transition-colors duration-300"aria-label="Facebook"
            ><FaFacebookF className="w-6 h-6 text-[#1877F3]transform transition-transform duration-300 hover:scale-135" /></a>
            <a href="#"className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1DA1F2] transition-colors duration-300"
              aria-label="Twitter"><FaTwitter className="w-6 h-6 text-[#fff]transform transition-transform duration-300 hover:scale-135" /></a>
            <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1DA1F2] transition-colors duration-300"
              aria-label="LinkedIn"><FaLinkedinIn className="w-6 h-6 text-[#0077B5]transform transition-transform duration-300 hover:scale-135" />{" "}</a>
            <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FE343B] transition-colors duration-300" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 text-[#E4405F]transform transition-transform duration-300 hover:scale-135" />
            </a>
              <a href="https://wa.me/233545725331" target="_blank" rel="noopener noreferrer"className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-300"aria-label="WhatsApp"><FaWhatsapp className="w-46 h-6 text-white transform transition-transform duration-300 hover:scale-135"/></a>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center sm:flex sm:justify-between sm:items-center container mx-auto px-4">
        <p className="text-xs mb-2 sm:mb-0"> &copy; 2025 Books Haven Public Library. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-2 text-xs">
          <a href="#"className="hover:text-blue-400 transition-colors duration-300">
            Accessibility, Privacy, & Security
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
