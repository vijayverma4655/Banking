import  { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false);
  const [isCommunityMenuOpen, setIsCommunityMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 "
          data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="400"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-bold">Unine</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm"data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600">
          <li>
            <a
              href="#learn"
              className="hover:text-gray-400"
              
            >
              Learn
            </a>
          </li>

          {/* Dropdown: App */}
          <li className="relative">
            <button
              onClick={() => setIsAppMenuOpen(!isAppMenuOpen)}
              className="hover:text-gray-400 flex items-center gap-1"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800" // Add delay here
            >
              App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAppMenuOpen && (
              <ul
                className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="1000" // Delay for dropdown
              >
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#ios">iOS App</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#android">Android App</a>
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown: Community */}
          <li className="relative">
            <button
              onClick={() => setIsCommunityMenuOpen(!isCommunityMenuOpen)}
              className="hover:text-gray-400 flex items-center gap-1"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000" // Add delay here
            >
              Community
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isCommunityMenuOpen && (
              <ul
                className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="1200" // Delay for dropdown
              >
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#forum">Forums</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#events">Events</a>
                </li>
              </ul>
            )}
          </li>

          <li data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="1400">
            <a
              href="#work"
              className="hover:text-gray-400"
            
            >
              Unine at Work
            </a>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-gray-400 hover:text-white"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="1600"
          >
            <a href="D:\Banking_project\Banking\src\components\Login\Login.jsx">
            Sign up
          
            </a>
          </button>
          <button
            className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="1800"
          >
            Get a demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 p-4 bg-gray-900">
          <li  data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000">
            <a href="#learn" className="block text-white hover:text-gray-400">
              Learn
            </a>
          </li>
          <li  data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1200">
            <button 
              onClick={() => setIsAppMenuOpen(!isAppMenuOpen)}
              className="block text-white hover:text-gray-400"
            >
              App
            </button>
            {isAppMenuOpen && (
              <ul className="ml-4 bg-gray-800 rounded-md p-2">
                <li className="hover:bg-gray-700 px-2 py-1">
                  <a href="#ios">iOS App</a>
                </li>
                <li className="hover:bg-gray-700 px-2 py-1">
                  <a href="#android">Android App</a>
                </li>
              </ul>
            )}
          </li>
          <li data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="1400">
            <button
              onClick={() => setIsCommunityMenuOpen(!isCommunityMenuOpen)}
              className="block text-white hover:text-gray-400"
            >
              Community
            </button>
            {isCommunityMenuOpen && (
              <ul className="ml-4 bg-gray-800 rounded-md p-2">
                <li className="hover:bg-gray-700 px-2 py-1">
                  <a href="#forum">Forums</a>
                </li>
                <li className="hover:bg-gray-700 px-2 py-1">
                  <a href="#events">Events</a>
                </li>
              </ul>
            )}
          </li>
          <li data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="1600">
            <a href="#work" className="block text-white hover:text-gray-400">
              Unine at Work
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
