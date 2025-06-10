// iimport React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="bg-[#404040] text-white py-8 text-sm font-['Inter'] rounded-lg">
      <div className="container mx-auto px-4 flex flex-wrap justify-around">
        {/* Logos Section */}
        <div className="w-full sm:w-auto mb-8 sm:mb-0 flex flex-col items-center sm:items-start text-center sm:text-left">
          <img src="https://placehold.co/120x80/333d45/ffffff?text=Mayor+Logo" alt="Mayor John Whitmire"className="h-20 mb-4 rounded-md"onError={(e) => { e.target.onerror = null; e.target.src ="https://placehold.co/120x80/333d45/ffffff?text=Logo+Error";}}/>
          <img src="https://placehold.co/150x80/333d45/ffffff?text=HPL+Logo" alt="Houston Public Library" className="h-24 rounded-md" onError={(e) => { e.target.onerror = null;e.target.src = "https://placehold.co/150x80/333d45/ffffff?text=Logo+Error";
            }}/>
        </div>

        {/* Contact Info Section */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">Books Haven Public Library</h4>
          <p>B.J Da Rocha loop,20.</p>
          <p>Accra, Ghana</p>
          <p className="mb-3">+233 545 725 331</p>
          <p className="mb-2">Connect with us!</p>
          <div className="flex justify-center sm:justify-start space-x-3">
            <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-colors duration-300"aria-label="Facebook"><FaFacebookF className="w-4 h-4 text-white"/></a>
            <a href="#"className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-colors duration-300"aria-label="Twitter" > <FaTwitter className="w-4 h-4 text-white" /></a>
            <a href="#"className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-colors duration-300"aria-label="LinkedIn" ><FaLinkedinIn className="w-4 h-4 text-white" /> </a>
            <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-colors duration-300" aria-label="Instagram"><FaInstagram className="w-4 h-4 text-white" /></a>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center sm:flex sm:justify-between sm:items-center container mx-auto px-4">
        <p className="text-xs mb-2 sm:mb-0">&copy; 2025 Books Haven Public Library. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-2 text-xs">
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">Staff Login</a>
          <a href="#"className="hover:text-blue-400 transition-colors duration-300">Accessibility, Privacy, & Security</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;