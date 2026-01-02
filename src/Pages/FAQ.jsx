import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  ShieldCheck, 
  AlertTriangle, 
  HelpCircle, 
  ChevronDown, 
  Search,
  CheckCircle2
} from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-100 rounded-2xl bg-white overflow-hidden mb-4 shadow-sm transition-all hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex justify-between items-center group transition-colors hover:bg-slate-50"
      >
        <span className="font-semibold text-slate-700 group-hover:text-[#36b6ff] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-slate-300"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 text-sm text-slate-500 border-t border-slate-50 pt-3 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const commonQuestions = [
    {
      q: "How do I cast a vote for international pageants?",
      a: "Simply select your event from our 'Voting' section, enter the contestant details, and choose your preferred local payment method (eSewa, Khalti, or Bank Transfer). Your vote is cast instantly once payment is confirmed."
    },
    {
      q: "Are there any hidden transaction fees?",
      a: "Transparency is our priority. Any processing fees are shown clearly on the checkout page before you pay. There are no hidden monthly charges for individual users."
    },
    {
      q: "How long do refunds take?",
      a: "Refunds for failed transactions are initiated immediately. Depending on your bank or wallet provider, it typically takes 3-7 business days to reflect in your account."
    },
    {
      q: "Is my payment information secure?",
      a: "Yes. Zeenopay uses bank-grade AES-256 encryption. We never store your sensitive pin or password data on our servers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* --- Gradient Header --- */}
      <div className="bg-white border-b mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6 py-16 text-center"
        >
          <h1 className="text-5xl font-black mb-4">
            Zeenopay <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36b6ff] to-indigo-600">Support</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Find answers to common questions or reach out to our team.
          </p>

          {/* Optional Search bar for interactivity */}
          <div className="relative max-w-md mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search help articles..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-full focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            />
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* --- FAQ Accordion Section --- */}
        <section className="mb-20">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
            <HelpCircle size={16} className="text-[#36b6ff]" /> Common Questions
          </h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {commonQuestions.map((item, index) => (
              <FAQItem key={index} question={item.q} answer={item.a} />
            ))}
          </motion.div>
        </section>

        {/* --- Policy and Report Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section 
            whileHover={{ y: -5 }}
            className="flex flex-col"
          >
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
              <ShieldCheck size={16} className="text-green-500" /> Refund Policy
            </h2>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-green-600">
                <CheckCircle2 size={24} />
                <span className="font-bold text-lg text-slate-800">30-Day Guarantee</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                We offer a full 30-day window for refund requests on digital services if the service was not delivered as described.
              </p>
            </div>
          </motion.section>

          <motion.section 
            whileHover={{ y: -5 }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Report an Issue
            </h2>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 bg-slate-50 border border-slate-50 rounded-xl text-sm focus:ring-2 focus:ring-[#36b6ff]/20 focus:bg-white outline-none transition-all"
                />
                <textarea
                  placeholder="Describe your issue..."
                  rows="3"
                  className="w-full p-3 bg-slate-50 border border-slate-50 rounded-xl text-sm focus:ring-2 focus:ring-[#36b6ff]/20 focus:bg-white outline-none transition-all"
                ></textarea>
                <button
                  onClick={() => alert("Issue reported. Our team will contact you soon.")}
                  className="w-full bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Submit Report
                </button>
              </form>
            </div>
          </motion.section>
        </div>

        <footer className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-slate-100 shadow-sm">
            <Mail size={16} className="text-[#36b6ff]" />
            <span className="text-sm font-medium text-slate-600">Need more help? <a href="mailto:support@zeenopay.com" className="text-[#36b6ff] font-bold hover:underline">support@zeenopay.com</a></span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FAQ;