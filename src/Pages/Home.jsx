import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Settings, ShieldCheck, ArrowRight } from "lucide-react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-32 bg-gray-50 relative overflow-x-hidden">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Now Live in Nepal 🇳🇵
          </motion.span>

          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
            {/* Comes from Right Side of Full Screen */}
            <motion.span
              className="block whitespace-nowrap"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Global Voting,
            </motion.span>

            {/* Comes from Left Side of Full Screen */}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#36b3fe] to-indigo-600 block whitespace-nowrap"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
            >
              Local Convenience
            </motion.span>

            {/* Emoji pops in after the text settles */}
            <motion.span
              className="inline-block"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 1.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
             🇳🇵
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Bridge the gap between international platforms and Nepal. ZeenoPay
            provides the most secure voting and payment gateway for global
            competitions and digital services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#36b6ff] to-indigo-600 rounded-full shadow-lg"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-3xl font-bold text-center text-gray-900 mb-16"
        >
          Why choose us?
        </motion.h2>

        <div className="space-y-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 p-8 bg-blue-50 rounded-3xl">
              <Zap size={48} className="text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Lightning Fast Payments
              </h3>
              <p className="text-gray-600">
                Optimized for speed so your votes and payments reflect in
                real-time. We bridge the gap between Nepal and the global
                market.
              </p>
            </div>
            <div className="flex-1 h-64 bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center shadow-inner">
              <img
                src="https://media.zeenopay.com/events/voting/photo_1766562541266_advpc3.jpg"
                alt="ZeenoPay Event"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="flex flex-col md:flex-row-reverse items-center gap-12"
          >
            <div className="flex-1 p-8 bg-indigo-50 rounded-3xl">
              <ShieldCheck size={48} className="text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Secure by Default</h3>
              <p className="text-gray-600">
                Enterprise-grade security features included out of the box. We
                ensure every NPR spent is tracked and protected.
              </p>
            </div>
            <div className="flex-1 h-64 bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center shadow-inner">
              <img
                src="https://media.zeenopay.com/WhatsApp%20Image%202025-04-23%20at%2001.23.18.jpeg"
                alt="ZeenoPay Event"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 p-8 bg-teal-50 rounded-3xl">
              <Settings size={48} className="text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Fully Customizable</h3>
              <p className="text-gray-600">
                Tailor the voting experience to match your competition's brand
                perfectly with our intuitive dashboard.
              </p>
            </div>
            <div className="flex-1 h-64 bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center shadow-inner">
              <img
                src="https://zeenopay.s3.eu-north-1.amazonaws.com/events/registration/photo_1764430247908_6x95vw.jpeg"
                alt="ZeenoPay Event"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="px-6 py-20 bg-gray-900 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <button className="bg-[#36b3fe] px-10 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all">
          Join ZeenoPay Today
        </button>
      </motion.section>
    </div>
  );
};

export default Home;
