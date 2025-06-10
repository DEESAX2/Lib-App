import logo from "../assets/images/logo.jpg";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-[#E7E7E7] text-shadow-black fixed top-0 left-0 right-0 shadow-md">
      <div className="container mx-auto px-2 py-5 flex justify-between items-center">
        {/* ----LOGO---- */}
        <Link to="#" className="flex items-center space-x-2">
          <img src={logo} alt="Library Logo"className="h-15 w-35 rounded-full"/></Link>

        {/* ----NAVIGATION LINKS---- */}
        <ul className="flex space-x-6">
          <li> <Link to="/"className="text-gray-600 hover:text-gray-900 bold transition ">Home</Link></li>
          <li><Link to="/add-book"className="text-gray-600 hover:text-gray-800 transition">AddBook</Link> </li>
          <li><Link to="/booklist"className="text-gray-600 hover:text-gray-800 transition">BookList</Link></li>
          <li><Link to="/edit-book"className="text-gray-600 hover:text-gray-800 transition">EditBook</Link></li>
          <li><Link to="/view-book/:slug"className="text-gray-600 hover:text-gray-800 transition">ViewBook</Link></li>
          <li><a href="#footer"className="text-gray-600 hover:text-gray-800 transition">Contact</a> </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
