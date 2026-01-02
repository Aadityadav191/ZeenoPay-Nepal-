import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Users,
  TrendingUp,
  Award,
  Rocket,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-6xl font-black tracking-tight mb-6">
            <span className="text-gray-900">About</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36b6ff] to-indigo-600">
              {" "}
              ZeenoPay Nepal
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than just a payment gateway. We are the digital bridge
            connecting the vibrant spirit of Nepal to the global stage.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={<Users />} label="Users" value="50K+" />
          <StatCard icon={<Globe />} label="Countries" value="120+" />
          <StatCard icon={<TrendingUp />} label="Growth" value="300%" />
          <StatCard icon={<ShieldCheck />} label="Security" value="Level 1" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24 space-y-32">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest">
              <Rocket size={14} /> Our Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Empowering the Next Generation of{" "}
              <span className="text-blue-500">Global Voters.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At ZeenoPay Nepal, we identified a massive gap: Nepalese fans and
              participants in international events struggled to cast their votes
              or pay for services. Our mission is to provide a{" "}
              <span className="text-gray-900 font-semibold underline decoration-blue-400">
                secure, seamless interface
              </span>{" "}
              that makes global participation as easy as sending a local text.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-[2.5rem] blur opacity-20"></div>
            <img
              src="https://media.zeenopay.com/events/voting/photo_1766562541266_advpc3.jpg"
              alt="ZeenoPay Team"
              className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[400px]"
            />
          </motion.div>
        </motion.section>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<ShieldCheck className="text-green-500" />}
              title="Integrity First"
              desc="We handle every transaction with absolute transparency and honesty. Trust is our primary currency."
            />
            <ValueCard
              icon={<Zap className="text-yellow-500" />}
              title="Radical Innovation"
              desc="We don't follow trends; we set them. Our tech stack is built for speed and future scalability."
            />
            <ValueCard
              icon={<Award className="text-indigo-500" />}
              title="Customer Obsession"
              desc="Your success is our success. Our 24/7 support ensures you're never left in the dark."
            />
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Revolutionizing Digital Nepal Since 2020
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're an organizer looking for a voting partner or an
              individual wanting to participate globally, ZeenoPay is your
              gateway.
            </p>
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all active:scale-95">
              Contact Our Team
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center">
      <div className="text-blue-500 mb-2">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-blue-200 transition-all duration-300"
    >
      <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}

const Zap = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
