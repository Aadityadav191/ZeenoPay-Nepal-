import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? "opacity-100" : "opacity-0"}
          bg-green-600 hover:bg-green-700 text-white font-bold p-4 rounded-full shadow-lg 
          transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-green-400
        `}
        aria-label="Back to top"
      >
        <ArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
