import { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";
import CookieConsent from "./Components/CookieConsent";

export default function App() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCookie(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AppRouter />
      {showCookie && <CookieConsent />}
    </>
  );
}
