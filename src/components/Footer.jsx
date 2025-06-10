import React from "react";

function Footer() {
  return (
    <footer  id = "footer" className="bg-[#333d45] text-white py-8 text-sm font-['Inter'] rounded-lg">
      <div className="container mx-auto px-4 flex flex-wrap justify-around">
        {/* Logos Section */}
        <div className="w-full sm:w-auto mb-8 sm:mb-0 flex flex-col items-center sm:items-start text-center sm:text-left">
          {/* Replace with your actual logo paths. Using placeholders for demonstration. */}
          <img
            src="https://placehold.co/120x80/333d45/ffffff?text=Mayor+Logo"
            alt="Mayor John Whitmire"
            className="h-20 mb-4 rounded-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/120x80/333d45/ffffff?text=Logo+Error";
            }}
          />
          <img
            src="https://placehold.co/150x80/333d45/ffffff?text=HPL+Logo"
            alt="Houston Public Library"
            className="h-24 rounded-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/150x80/333d45/ffffff?text=Logo+Error";
            }}
          />
        </div>

        {/* Your Library Section */}
        <div className="w-1/2 sm:w-auto mb-6 sm:mb-0 text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">Your Library</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Policies</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Capital Projects</a>
            </li>
          </ul>
        </div>

        {/* Volunteer & Donate Section */}
        <div className="w-1/2 sm:w-auto mb-6 sm:mb-0 text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">Volunteer & Donate</h4>
          <ul>
            <li className="mb-2">
              <a href="#"className="hover:text-blue-400 transition-colors duration-300"> BPL Foundation</a>
            </li>
            <li className="mb-2">
              <a href="#"className="hover:text-blue-400 transition-colors duration-300">Careers</a>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-auto mb-6 sm:mb-0 text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">BPL News</h4>
          <ul>
            <li className="mb-2">
              <a href="#"className="hover:text-blue-400 transition-colors duration-300">Contact Us</a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300">Suggest a Purchase
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">Books Haven Public Library</h4>
          <p>B.J Da Rocha loop,20.</p>
          <p>Accra,Ghana</p>
          <p className="mb-3">+233 507 655 884</p>
          <p className="mb-2">Connect with us!</p>
          <div className="flex justify-center sm:justify-start space-x-3">
            {/* Replace with your actual social icon paths. Using placeholders for demonstration. */}
            <a
              href="#"
              className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.707v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.204 8.204 0 012 19.713c0-.13 0-.26 0-.398 1.144.755 2.478 1.262 3.93 1.262A11.64 11.64 0 0020.29 8.251c0-.294 0-.58-.011-.865a8.384 8.384 0 002.048-2.124A8.19 8.19 0 0120.29 2.251z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19.5 2h-15A2.5 2.5 0 002 4.5v15A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0019.5 2zM9 16.5H6V9h3v7.5zM7.5 7A1.5 1.5 0 119 5.5 1.5 1.5 0 017.5 7zm9 9.5h-3V12c0-.5-.5-1-1-1s-1 .5-1 1v4.5H9V9h3v1.5c.8-.8 1.9-1.5 3-1.5 2.3 0 4 1.7 4 4v4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C8.448 2 5.485 4.868 5.485 8.303v.457c0 1.217-.373 2.42-1.12 3.447L2.497 14.8c-.896 1.217-1.134 2.82-.693 4.254.44.896 1.282 1.637 2.213 1.979C7.433 21.6 9.697 22 12 22s4.567-.4 6.1-1.034c.931-.342 1.773-1.083 2.213-1.979.441-1.434.203-3.037-.693-4.254L19.565 12.2c-.747-1.027-1.12-2.23-1.12-3.447v-.457C18.515 4.868 15.552 2 12 2zm-4 8a1 1 0 100 2h8a1 1 0 100-2h-8z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center sm:flex sm:justify-between sm:items-center container mx-auto px-4">
        <p className="text-xs mb-2 sm:mb-0">
          &copy; 2025 Books Haven Public Library. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-2 text-xs">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300">Staff Login
          </a>
          <a href="#"className="hover:text-blue-400 transition-colors duration-300"> Accessibility, Privacy, & Security</a>
            </div>
      </div>
    </footer>
  );
}

export default Footer;
