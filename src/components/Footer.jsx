
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoth from "../assets/images/logoth.png";
import sandylogo from "../assets/images/sandylogo.png";

function Footer() {
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
          <h4 className="text-lg font-bold mb-2">Connect With Us!</h4>
          <p>B.J Da Rocha loop, 20</p>
          <p>Accra, Ghana</p>
          <p className="mb-2">+233 545 725 331</p>
          <div className="flex space-x-3 mt-2">
            <a href="https://facebook.com/esther.manor" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F3] transition-transform duration-300" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-120" />
            </a>
            <a href="https://twitter.com/GITOATOP" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2] transition-transform duration-300" aria-label="Twitter">
              <FaTwitter className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-120" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077B5] transition-transform duration-300" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E4405F] transition-transform duration-300" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://wa.me/233545725331" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25D366] transition-transform duration-300" aria-label="WhatsApp">
              <FaWhatsapp className="w-5 h-5 text-white transform transition-transform duration-300 hover:scale-125" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/catalog" className="hover:underline">Catalog</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/membership" className="hover:underline">Membership</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Opening Hours & Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-2">Opening Hours</h4>
          <ul className="text-sm mb-4">
            <li>Mon-Fri: 8:00am - 6:00pm</li>
            <li>Sat: 9:00am - 4:00pm</li>
            <li>Sun: Closed</li>
          </ul>
          <h4 className="text-lg font-bold mb-2">Newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-1 rounded text-black text-xs placeholder-white bg-transparent border border-white"
            />
            <button type="submit" className="ml-2 px-2 py-1 bg-[#1877F3] text-white rounded text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center sm:flex sm:justify-between sm:items-center container mx-auto px-4">
        <p className="text-xs mb-2 sm:mb-0">
          &copy; 2025 Books Haven Public Library. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-2 text-xs">
          <a href="/accessibility" className="hover:text-blue-400 transition-colors duration-300">
            Accessibility
          </a>
          <a href="/privacy" className="hover:text-blue-400 transition-colors duration-300">
            Privacy & Security
          </a>
          <a href="/policies" className="hover:text-blue-400 transition-colors duration-300">
            Library Policies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;