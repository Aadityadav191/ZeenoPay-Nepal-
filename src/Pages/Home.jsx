import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import OrderCard from "../Components/OrderCard";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen  overflow-x-hidden">
      <section className="flex flex-col items-center justify-center px-6 py-10 text-center md:py-23 bg-gray-50 relative overflow-x-hidden">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-gray-600 uppercase bg-[#ffffff] rounded-full shadow-md"
          >
            ⭐️ Trusted by 50,000+ shoppers
          </motion.span>

          <h1 className="text-5xl font-extrabold tracking-tight text-gray-700 md:text-6xl">
            <motion.span
              className="block whitespace-nowrap"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Shop Globally,
            </motion.span>

            <span
              className="text-transparent bg-clip-text bg-gray-700 block whitespace-nowrap">
              Ship to <span className="text-green-500">Nepal</span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-xl font-light  text-slate-600 max-w-5xl mx-auto leading-7"
          >
            Access millions of international products and get them delivered
            safely to your doorstep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <OrderCard />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fast Delivery Card */}
          <div className="group bg-white p-6 rounded-[24px] shadow-xl border border-gray-100 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
            <div className="bg-emerald-50 p-3 rounded-xl mb-4 shadow-sm transition-colors duration-300 group-hover:bg-emerald-500">
              <Zap className="w-5 h-5 text-emerald-600 transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Fast Delivery
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Delivered within 7-14 days
            </p>
          </div>

          {/* Secure & Safe Card */}
          <div className="group bg-white p-6 rounded-[24px] shadow-xl border border-gray-100 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
            <div className="bg-emerald-50 p-3 rounded-xl mb-4 shadow-sm transition-colors duration-300 group-hover:bg-emerald-500">
              <ShieldCheck className="w-5 h-5 text-emerald-600 transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Secure & Safe
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              100% buyer protection
            </p>
          </div>

          {/* Best Rates Card */}
          <div className="group bg-white p-6 rounded-[24px] shadow-xl border border-gray-100 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
            <div className="bg-emerald-50 p-3 rounded-xl mb-4 shadow-sm transition-colors duration-300 group-hover:bg-emerald-500">
              <TrendingDown className="w-5 h-5 text-emerald-600 transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Best Rates
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Competitive global pricing
            </p>
          </div>
        </div>
      </section>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-5 text-sm font-semibold text-white bg-[#1e293b] rounded-xl shadow-lg text-center mx-auto my-5 block transition-all"
      >
        Explore how it works
        <ArrowRight className="inline-block w-4 h-4 ml-2" />
      </motion.button>

      <section className="px-6 py-20 text-white text-center">
        <Testimonials />
      </section>
      <hr className=" border-gray-300 mb-10 max-w-7xl mx-auto" />
      <section className="flex gap-10  justify-around mb-10 max-w-6xl mx-auto flex-wrap">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 text-center">50,000+</h1>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 text-center">95%</h1>
          <p className="text-gray-600">Customer Satisfaction</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 text-center">4.9/5</h1>
          <p className="text-gray-600">Average Rating</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 text-center">24/7</h1>
          <p className="text-gray-600">Support Available</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
