import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between border-t">
      <p className="text-sm text-gray-200 mb-4 md:mb-0 md:mr-8">
        We use cookies to enhance your experience. By continuing to visit this
        site you agree to our use of cookies.
      </p>

      <div className="flex gap-4">
        <button
          onClick={declineCookies}
          className="text-xs font-semibold hover:text-gray-300 transition"
        >
          Decline
        </button>

        <button
          onClick={acceptCookies}
          className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg font-bold transition"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
