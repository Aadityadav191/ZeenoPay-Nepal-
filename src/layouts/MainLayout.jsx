import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { useEffect ,useState} from 'react';
import CookieConsent from "../Components/CookieConsent";

export default function MainLayout() {
    const [showCookie, setShowCookie] = useState(false);
    useEffect(() => {
      // Show cookie after 5 seconds
       setTimeout(() => setShowCookie(true), 5000);
    }, []);
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      {showCookie && <CookieConsent />}
      <Footer />
    </>
  );
}
