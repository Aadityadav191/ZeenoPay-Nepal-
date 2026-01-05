import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Headphones,
  Send,
  Phone
} from "lucide-react";
import ContactForm from "../Components/Forms/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { value: "24/7", label: "WhatsApp Support" },
    { value: "1 hr", label: "Response Time" },
    { value: "100%", label: "Support Rate" },
    { value: "6 days", label: "Business Week" },
  ];

  return (
    <div className="min-h-screenoverflow-x-hidden">
      <section className=" border-b overflow-hidden relative py-20 md:py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-700 mb-6 ">
            Contact 
            <span className="text-transparent bg-clip-text bg-[#20c55e]">
              Us
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about shipping or need assistance? We're here to help
            you with all your international shopping needs.
          </p>
        </div>

        <div className=" flex justify-center items-center max-w-xl mx-auto px-10 mb-10">
          <button className="mx-auto mt-10  border-2 hover:bg-gray-100 text-[#606b7a] px-3 py-2 rounded-xl  text-md  transition-all active:scale-95 flex items-center gap-2">
             <Send size={15} /> Get Started Today
          </button>

          <button className="mx-auto mt-10  border-2 hover:bg-gray-100 text-[#606b7a] px-3 py-2 rounded-xl  text-md  transition-all active:scale-95 flex items-center gap-2">
             <Phone size={15}/>Contact info
          </button>

          <button className="mx-auto mt-10  border-2 hover:bg-gray-100 text-[#606b7a] px-3 py-2 rounded-xl  text-md  transition-all active:scale-95 flex items-center gap-2">
            <MapPin size={15}/>Visits Us 
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-10 relative  mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 1.2 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              className="bg-white border-2 border-gray-100 rounded-[20px] p-5 flex flex-col items-center justify-center text-center transition-all"
            >
              <h3 className="text-[25px] font-extrabold text-[#17a34a] mb-1 leading-none">
                {stat.value}
              </h3>
              <p className="text-gray-700 text-sm  uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MAIN CONTENT: Form & Details --- */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:space-x-8 space-y-5 md:space-y-0 mb-20">
        {/* Section 1: Contact Form */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full md:w-1/2 p-8 md:p-12 text-left shadow-2xl rounded-[2.5rem] border border-gray-100 bg-white"
        >
          <div className="items-center mb-2">
            <h2 className="text-3xl mb-2 font-bold text-gray-800">Send a Message</h2>
            <p>Fill in the form and we'll reach out by email or phone within one business day.</p>
          </div>
          <ContactForm />
        </motion.section>

        {/* Section 2: Contact Details and Map */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full md:w-1/2 p-8 md:p-12 text-left shadow-2xl rounded-[2.5rem] border border-gray-100 bg-white"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            Direct Reach
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
            <ContactInfo
              icon={<Phone size={18} />}
              label="Support"
              value="+977 9812384329"
              href="tel:+9779812384329"
            />
            <ContactInfo
              icon={<MessageCircle size={18} />}
              label="WhatsApp"
              value="+977 9821747900"
              href="https://wa.me/9821747900"
              isGreen
            />
            <ContactInfo
              icon={<Mail size={18} />}
              label="Email"
              value="zeenopay@gmail.com"
              href="mailto:zeenopay@gmail.com"
            />
            <ContactInfo
              icon={<MapPin size={18} />}
              label="Office"
              value="Kathmandu, Nepal"
              href="#"
            />
          </div>

          {/* Business Hours Box */}
          <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex items-start gap-4 mb-10">
            <Clock className="text-indigo-600 mt-1" size={20} />
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-bold text-gray-900 block">
                Support Hours
              </span>
              Sunday – Friday: 10:00 AM – 6:00 PM (NPT)
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest">
              Find us on map
            </h3>
            <div className="w-full h-64 overflow-hidden rounded-[2rem] shadow-inner  hover:grayscale-0 transition-all duration-1000">
              <iframe
                title="ZeenoPay Nepal Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8123!2d85.3191!3d27.7000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzAwLjAiTiA4NcKwMTknMDguOCJF!5e0!3m2!1sen!2snp!4v1634567890123!5m2!1sen!2snp"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <MapPin size={20} /> Click and drag to explore our location on the map.
              </p>
              <button className="mt-3 hover:bg-green-700 text-white w-full py-3 rounded-xl text-md transition-all flex items-center gap-2 bg-green-500  font-semibold flex items-center justify-center gap-2" >
                <Send  size={20}/>Get Directions
              </button>
            </div>
          </div>
        </motion.section>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-7 text-center bg-gradient-to-r from-[#1dbf5f] to-[#069868] rounded-3xl mb-10">
          <h1 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h1>
          <p className="max-w-2xl mx-auto text-white mb-10">
            If you require urgent support, please reach out to our 24/7 WhatsApp support or call us directly.
          </p>

          <div className="flex justify-center items-center mx-auto max-w-md ">
            <button className="mx-auto border-2 bg-white hover:bg-gray-100 text-green-500 px-5 py-3 rounded-xl text-md transition-all active:scale-95 flex items-center gap-2 font-semibold">
               <MessageCircle size={15} /> WhatsApp Support
            </button>

            <button className="mx-auto ml-5 border-2 bg-slate-100 bulred hover:bg-gray-100 text-[#606b7a] px-5 py-3 rounded-xl text-md transition-all active:scale-95 flex items-center gap-2 font-semibold">
               <Phone size={15}/> Send Email now 
            </button>
          </div>
      </section>
    </div>
  );
};

const ContactInfo = ({ icon, label, value, href, isGreen }) => (
  <div>
    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">
      {label}
    </p>
    <a
      href={href}
      className={`text-lg font-bold flex items-center gap-2 hover:underline ${
        isGreen ? "text-green-600" : "text-gray-900"
      }`}
    >
      {icon} {value}
    </a>
  </div>
);

const TrustItem = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm max-w-[200px]">{desc}</p>
  </motion.div>
);

export default Contact;
