import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Box, 
  RefreshCcw, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CreditCard,
  ChevronRight 
} from "lucide-react";

const Return_Refunds = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-20">
      {/* --- Gradient Header Section --- */}
      <div className="bg-white border-b overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 py-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-[#36b6ff] uppercase bg-blue-50 rounded-full">
            Customer Protection
          </span>
          <h1 className="text-5xl font-black mb-6">
            Returns & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36b6ff] to-indigo-600">Refunds</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We want you to love what you ordered. If you're not completely satisfied, 
            our return process is designed to be as transparent as possible.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        {/* --- Quick Steps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StepCard 
            icon={<Box className="text-blue-500" />} 
            step="01" 
            title="Package Item" 
            desc="Keep original tags and packaging." 
          />
          <StepCard 
            icon={<Mail className="text-indigo-500" />} 
            step="02" 
            title="Start Request" 
            desc="Contact us with your order ID." 
          />
          <StepCard 
            icon={<RefreshCcw className="text-green-500" />} 
            step="03" 
            title="Get Refund" 
            desc="Funds return in 5-7 business days." 
          />
        </div>

        {/* --- Main Policy Content --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden"
        >
          <div className="p-8 md:p-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
              <ShieldCheck className="text-[#36b6ff]" size={28} />
              Official Policy
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-10">
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={18} className="text-[#36b6ff]" />
                    <h3 className="text-xl font-bold text-gray-800">Return Window</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Items can be returned within <strong className="text-gray-900">30 days</strong> of the
                    delivery date. Items must be in their original, unworn
                    condition with all tags attached.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard size={18} className="text-[#36b6ff]" />
                    <h3 className="text-xl font-bold text-gray-800">Refund Process</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Once we receive your item, please allow 5-7 business days for
                    the refund to be processed. The credit will automatically be
                    applied to your original method of payment.
                  </p>
                </section>
              </div>

              <div className="space-y-10">
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <RefreshCcw size={80} />
                  </div>
                  <h4 className="font-bold text-blue-900 text-lg mb-2">Holiday Extension</h4>
                  <p className="text-blue-800/80 text-sm leading-relaxed relative z-10">
                    Purchases made between Nov 1st and Dec 24th can be
                    returned until Jan 31st of the following year. We've got you covered for the gifting season!
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Non-Returnable Items</h3>
                  <ul className="space-y-3">
                    {['Gift cards', 'Digital software products', 'Custom-made items', 'Beauty products'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#36b6ff]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* --- CTA Section --- */}
            <div className="mt-16 pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-black text-2xl text-gray-900">Ready to start a return?</h3>
                <p className="text-gray-500 mt-1">
                  Have your order number and email address ready.
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 group"
              >
                Start My Return
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* --- Help Footer --- */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-medium">
            Have more questions?{" "}
            <a href="#" className="text-[#36b6ff] hover:underline decoration-2 underline-offset-4">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ icon, step, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center text-center group transition-all hover:shadow-xl hover:shadow-blue-500/5"
  >
    <div className="bg-gray-50 p-4 rounded-2xl mb-4 group-hover:bg-white transition-colors">
      {icon}
    </div>
    <span className="text-[10px] font-black text-[#36b6ff] tracking-widest uppercase mb-1">Step {step}</span>
    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </motion.div>
);

export default Return_Refunds;