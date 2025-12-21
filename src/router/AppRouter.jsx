import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import FAQ from "../Pages/FAQ";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Terms_privacy from "../Pages/Terms_privacy";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages WITH Navbar & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-of-use" element={<Terms_privacy />} />
        </Route>

        {/* Pages WITHOUT Navbar & Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
