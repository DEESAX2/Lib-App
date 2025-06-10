import React from "react";
import logo from "../assets/images/logo.jpg";


function Navbar(){
    return (

<nav className="bg-[#E7E7E7] text-shadow-black">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">

        {/* ----LOGO---- */}
        <a href="#" className="flex items-center space-x-2">
        <img src ={logo} alt="Library Logo" className="h-10 w-15 rounded-full" /></a>




        {/* ----NAVIGATION LINKS---- */}
        {/* <a href="/" className="text-2xl font-bold text-gray-800">Library App</a> */}
        <ul className="flex space-x-4">
            <li><a href="/" className="text-gray-600 hover:text-gray-800 transition">Home</a></li>
            <li><a href="/add-book" className="text-gray-600 hover:text-gray-800 transition">Add Book</a></li>
            <li><a href="/booklist" className="text-gray-600 hover:text-gray-800 transition">Book List</a></li>
            <li><a href="/create-account" className="text-gray-600 hover:text-gray-800 transition" >Create Account</a></li>
            <li><a href="/login" className="text-gray-600 hover:text-gray-800 transition">Login</a></li>
        </ul>
    </div>
    
</nav>
    );
}
export default Navbar;