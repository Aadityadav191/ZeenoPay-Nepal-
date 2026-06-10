// import { useState, useEffect } from "react";
import whatsupIcon from "../assets/whatsup.png";

const Whatsup = () => {
  return (
    <div className="fixed bottom-10 left-10 z-50">
      <button
        type="button"
        className={`
          w-14 h-14 rounded-1xl overflow-hidden shadow-lg
          focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 
          transition-transform transform hover:scale-110
          animate-bounce-slow
        `}
        onClick={() => window.open("https://wa.me/9821747900", "_blank")}
      >
        <img 
          src={whatsupIcon} 
          alt="WhatsApp" 
          className="w-full h-full object-cover"
        />
      </button>


      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Whatsup;