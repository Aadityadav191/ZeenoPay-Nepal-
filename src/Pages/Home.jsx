import React from "react";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-32 bg-gray-50">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
          Welcome to <span className="text-indigo-600">ZeenoPay Nepal 🫰 </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Zeenopay Nepal is your reliable partner for seamless international
          voting solutions. We are committed to providing secure, efficient, and
          user-friendly services to empower voters worldwide.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-lg transition transform hover:-translate-y-1">
            Start Free Trial
          </button>
          <button className="px-8 py-3 text-lg font-medium text-indigo-600 bg-white border border-indigo-200 rounded-full hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/*  Features Section  */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why choose us?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Lightning Fast
              </h3>
              <p className="mt-3 text-gray-600">
                Optimized for speed so your users never have to wait.
                Performance is our top priority.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Fully Customizable
              </h3>
              <p className="mt-3 text-gray-600">
                Tailor every aspect of the design to fit your brand identity
                with simple configuration.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Secure by Default
              </h3>
              <p className="mt-3 text-gray-600">
                Enterprise-grade security features included out of the box to
                keep your data safe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
