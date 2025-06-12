import logo from "../assets/images/logo.jpg";
import { Link } from "react-router";
import { FaMapMarkerAlt,FaQuestionCircle, FaGlobe} from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [lang, setLang] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-[#FFFF] text-shadow-black fixed top-0 left-0 right-0 shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-[#E7E7E7] text-black  text-xs py-6 px-4 flex justify-between items-center">
         {/* Left side */}
         <div></div>
         {/* --- Right side-- */}
        <div className="flex items-center space-x-4">
          <a href="https://houstonlibrary.org/get-help" target="_blank" rel="noopener noreferrer" className= " flex items-center hover:underline text-xl bold font-light focus:outline-none"><FaQuestionCircle className="mr-1 text-[#B32317] text-xl" />Get Help</a>
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-1 hover:underline text-xl  font-light focus:outline-none"><FaGlobe className="mr-1 text-[#B32317] text-xl" /><span>Language</span>
              <svg className="w-3 h-3 ml-1" fill= "none" stroke="currentColor" strokeWidth="2"viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showDropdown && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow z-10">
                {["English", "French", "Portuguese", "Spanish"].map((l) => (
                  <li key={l} className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${ lang === l ? "font-bold" : ""}`} onClick={() => {setLang(l);setShowDropdown(false);}}>{l}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* -----red line--- */}
        <div className="w-full h-1 bg-[#B32317]"></div>
      </div>
      {/* Main Bar */}
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        {/* ----LOGO---- */}
        <Link to="#" className="flex items-center space-x-2"><img src={logo}alt="Library Logo"
            className="h-15 w-25 rounded-full"/>
        </Link>
        {/* ----NAVIGATION LINKS---- */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/"className="text-black-600 font-bold hover:text-[#B32317] transition">Home</Link>
          </li>
          <li><Link to="/add-book"className="text-black-600 font-bold hover:text-[#B32317] transition">AddBook </Link>
          </li>
          <li>
            <Link to="/booklist" className="text-black-600 font-bold hover:text-[#B32317] transition">BookList</Link>
          </li>
          <li><Link to="/edit-book"className="text-black-600 font-bold hover:text-[#B32317] transition"> EditBook </Link>
          </li>
          <li><Link to="/view-book"className="text-black-600 font-bold hover:text-[#B32317] transition"> ViewBook</Link>
          </li>
          <li><a href="#footer" className="text-black-600 font-bold hover:text-[#B32317] transition">Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
