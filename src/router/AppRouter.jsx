import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/BlogDetails";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import FAQ from "../Pages/FAQ";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Terms_privacy from "../Pages/Terms_privacy";
import RefundPage from "../Pages/Return_Refunds";
import ReportProblem from "../Pages/Report_Problem";
import Createorder from "../Pages/Createorder";
import Calculator from "../Pages/Calculator";
import Guides from "../Pages/Guides";
import Recommended from "../Pages/Recommended";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages WITH Navbar & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/terms-of-use" element={<Terms_privacy />} />
          <Route path="/return-refunds" element={<RefundPage />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Report a Problem" element={<ReportProblem />} />
          <Route path="/create-order" element={<Createorder />} />
          <Route path="/Guides" element={<Guides />} />
          <Route path="/recommended" element={<Recommended />} />
        </Route>

        {/* Pages WITHOUT Navbar & Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
