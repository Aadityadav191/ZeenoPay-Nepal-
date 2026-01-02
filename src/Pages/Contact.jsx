import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Headphones,
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
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <section className="bg-white border-b overflow-hidden relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
            <motion.span
              className="block"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Have Questions?
            </motion.span>

            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#36b3fe] to-indigo-600 block"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            >
              Contact ZeenoPay
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We're here to help you navigate international voting and global
            payments with ease. Reach out to our Kathmandu-based team today.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 1.4 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              className="bg-white border border-gray-100 rounded-[24px] p-5 shadow-lg flex flex-col items-center justify-center text-center transition-all"
            >
              <h3 className="text-[30px] font-extrabold text-[#3ab5fd] mb-2 leading-none">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MAIN CONTENT: Form & Details --- */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-20">
        {/* Section 1: Contact Form */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full md:w-1/2 p-8 md:p-12 text-left shadow-2xl rounded-[2.5rem] border border-gray-100 bg-white"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
              <Mail size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Send a Message</h2>
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
          </div>
        </motion.section>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-400 mb-12 uppercase tracking-[0.3em]">
          Our Guarantee
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <TrustItem
            icon={<ShieldCheck size={40} className="text-blue-500" />}
            title="Secure Data"
            desc="Your personal information is always encrypted."
          />
          <TrustItem
            icon={<Zap size={40} className="text-yellow-500" />}
            title="Instant Processing"
            desc="Payments reflect in your account within seconds."
          />
          <TrustItem
            icon={<Headphones size={40} className="text-green-500" />}
            title="Live Support"
            desc="Real humans available to help you via chat."
          />
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
