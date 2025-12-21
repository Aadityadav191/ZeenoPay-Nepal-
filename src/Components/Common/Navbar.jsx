import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="w-full font-sans bg-white shadow-lg sticky top-0 z-50">
        {/* <div className="hidden md:flex justify-between items-center py-2.5 px-4 sm:px-8 border-b border-gray-200 text-sm text-gray-600">
          <div className="flex items-center space-x-6 font-medium">
            <p>+977 9821747900</p>
            <p>+977 9821747900</p>
            <p>Zeenopay@gmail.com</p>
          </div>

          <Link to="/cost-calculator">
            <a className="uppercase tracking-[0.15em] text-xs font-bold text-indigo-800 opacity-80 hover:text-indigo-600 transition">
              COST CALCULATOR
            </a>
          </Link>
        </div> */}

        <nav className="flex items-center justify-between px-4 sm:px-8 py-1">
          <Link
            to="/"
            className="flex items-center hover:opacity-90 transition"
          >
            <img
              src={Logo}
              alt="Zeenopay"
              className="h-14 sm:h-14 w-auto rounded-lg"
            />
          </Link>

          <div className="hidden lg:flex  gap-0 items-center space-x-1 font-medium text-gray-700">
            <Link
              to="/about"
              className="hover:text-indigo-600 hover:bg-indigo-100 rounded-lg px-3 py-1 transition"
            >
              About
            </Link>
            <Link
              to="/Contact"
              className="hover:text-indigo-600  hover:bg-indigo-100 rounded-lg px-3 py-1 transition"
            >
              Contact
            </Link>
            <Link
              to="/Blog"
              className="hover:text-indigo-600  hover:bg-indigo-100 rounded-lg px-3 py-1 transition"
            >
              Blog
            </Link>

            <Link
              to="/about"
              className="hover:text-indigo-600  hover:bg-indigo-100 rounded-lg px-3 py-1 transition"
            >
              Guides
            </Link>
            <Link
              to="/Contact"
              className="hover:text-indigo-600  hover:bg-indigo-100 rounded-lg px-3 py-1 transition"
            >
              FAQ
            </Link>
            <Link
              to="/Blog"
              className="hover:text-indigo-600  hover:bg-indigo-100 rounded-lg px-3 py-1 transition"
            >
              Returns & Refunds
            </Link>
            <Link
              to="/COST CALCULATOR"
              className="hover:text-indigo-600  hover:bg-indigo-100 rounded-lg px-3 py-1 transition"
            >
              Cost Calculator
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/create-order">
              <button
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white 
                           bg-gradient-to-r from-[#36b6ff] to-indigo-600 rounded-full shadow-md transition duration-300  hover:from-indigo-600 hover:to-[#36b6ff]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Create Order
              </button>
            </Link>

            <Link to="/login">
              <button className="px-6 py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-full hover:border-gray-400 hover:text-gray-900 transition duration-300">
                Login / Register
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2.5 text-indigo-600 border border-gray-200 rounded-full hover:bg-indigo-50 transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        <div
          id="mobile-menu"
          className={`${
            isOpen ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"
          } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col space-y-3 px-4">
            <Link to="/create-order" className="w-full" onClick={closeMenu}>
              <button className="flex items-center justify-center w-full gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Create Order
              </button>
            </Link>

            <Link to="/cost-calculator" className="w-full" onClick={closeMenu}>
              <button className="flex items-center justify-center w-full gap-2 px-5 py-2.5 text-sm font-semibold text-indigo-600 border border-indigo-500 rounded-lg hover:bg-indigo-50 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                COST CALCULATOR
              </button>
            </Link>

            <hr className="border-gray-200 mt-2 mb-2" />

            {/* Main Navigation Links */}
            <Link
              to="/about"
              onClick={closeMenu}
              className="py-1.5 text-gray-700 hover:text-indigo-600 transition"
            >
              About
            </Link>
            <Link
              to="/Contact"
              onClick={closeMenu}
              className="py-1.5 text-gray-700 hover:text-indigo-600 transition"
            >
              Contact
            </Link>
            <Link
              to="/Blog"
              onClick={closeMenu}
              className="py-1.5 text-gray-700 hover:text-indigo-600 transition"
            >
              Blog
            </Link>
            <Link
              to="/FAQ"
              onClick={closeMenu}
              className="py-1.5 text-gray-700 hover:text-indigo-600 transition"
            >
              FAQ
            </Link>
            <Link
              to="/Returns & Refunds"
              onClick={closeMenu}
              className="py-1.5 text-gray-700 hover:text-indigo-600 transition"
            >
              Returns & Refunds
            </Link>
            <Link
              to="/Cost Calculator"
              onClick={closeMenu}
              className="py-1.5 text-gray-700 hover:text-indigo-600 transition"
            >
              Cost Calculator
            </Link>

            <hr className="border-gray-200 mt-2 mb-2" />

            {/* Login/Register Button */}
            <Link to="/login" className="w-full" onClick={closeMenu}>
              <button className="w-full px-6 py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:border-gray-400 hover:text-gray-900 transition">
                Login / Register
              </button>
            </Link>

            {/* Theme Toggle (Example) */}
            <div className="flex justify-end pt-2">
              <button className="p-2.5 text-gray-600 border border-gray-200 rounded-full hover:bg-gray-100 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
