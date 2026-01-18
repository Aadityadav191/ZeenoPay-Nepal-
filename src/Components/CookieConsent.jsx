import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import these

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}   
          exit={{ y: 100, opacity: 0 }}    
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#187f3c] to-green-600 text-white p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] flex flex-col md:flex-row items-center justify-between border-t border-white/10 "
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0 md:mr-8">
            <div className="hidden md:block bg-white/20 p-2 rounded-full">
               🍪
            </div>
            <p className="text-sm text-blue-50 leading-relaxed max-w-2xl">
              We use cookies to enhance your experience. By continuing to visit this
              site you agree to our use of cookies.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={declineCookies}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Decline
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={acceptCookies}
              className="bg-white text-green-600 px-8 py-2.5 rounded-full font-bold text-sm shadow-lg transition-shadow hover:shadow-green-500/20"
            >
              Accept All
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}