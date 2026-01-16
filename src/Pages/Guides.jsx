import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Calculator, Truck, Shield, MessageCircle, ChevronRight } from 'lucide-react';

export default function GuidesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const guideList = [
    {
      title: "Cost Calculator Guide",
      desc: "Learn to estimate total costs including duties and shipping.",
      icon: <Calculator className="w-6 h-6" />,
      tag: "Tools",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Customs & Taxes",
      desc: "A simple breakdown of Nepal's import tax rules.",
      icon: <Shield className="w-6 h-6" />,
      tag: "Legal",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Shipping Process",
      desc: "How we move your items from India to your doorstep.",
      icon: <Truck className="w-6 h-6" />,
      tag: "Logistics",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Payment Help",
      desc: "Step-by-step guide to paying via eSewa, Khalti, or Bank.",
      icon: <Book className="w-6 h-6" />,
      tag: "Payments",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* --- Gradient Header --- */}
      <div className="bg-white border-b mb-10">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold mb-4"
          >
            User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ace67] to-green-600">Guides</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Everything you need to know about navigating international shopping and secure payments with ZeenoPay.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* --- Interactive Guide Cards --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          {guideList.map((guide, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ x: 10, scale: 1.01 }}
              className="flex items-center p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md hover:border-[#36b6ff]/40 transition-all cursor-pointer group"
            >
              <div className={`${guide.bgColor} ${guide.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                {guide.icon}
              </div>
              
              <div className="ml-6 flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#379e1a] transition-colors">
                    {guide.title}
                  </h3>
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase font-bold tracking-widest">
                    {guide.tag}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{guide.desc}</p>
              </div>

              <div className="text-gray-300 group-hover:text-[#36b6ff] transition-colors p-2">
                <ChevronRight size={24} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Support Footer CTA --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-green-500 to-green-650 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          
          <div className="relative z-10 mb-6 md:mb-0">
            <h4 className="font-bold text-white text-xl">Still have questions?</h4>
            <p className="text-gray-400 text-sm">Our support team in Kathmandu is online to help you.</p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[#298e1e] to-green-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-green-500/20 transition-all"
          >
            <MessageCircle size={20} />
            Chat Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}