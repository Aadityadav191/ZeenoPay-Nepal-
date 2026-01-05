import React, { useState, useRef, useEffect } from "react";
import {
  Target,
  Globe,
  Heart,
  BarChart3,
  ShieldCheck,
  Box,
  MapPin,
  FileText,
  RefreshCcw,
  Headset,
  ArrowLeft,
  ArrowRight,
  Lock,
} from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeTab]);

  return (
    <>
      <section className="bg-white py-20 px-4 font-sans shadow-md">
        <div className="max-w-6xl mx-auto">
          {/*   HEADER SECTION   */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              About <span className="text-[#20c55e]">ShipifyNepal</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
              Your trusted partner for international shopping and shipping to
              Nepal
            </p>
          </div>

          {/*   NAVIGATION TABS */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 text-[#20c55e]">
            <TabBtn
              active={activeTab === "mission"}
              onClick={() => setActiveTab("mission")}
              icon={<Target size={18} />}
              label="Our Mission"
            />
            <TabBtn
              active={activeTab === "services"}
              onClick={() => setActiveTab("services")}
              icon={<Globe size={18} />}
              label="Services"
            />
            <TabBtn
              active={activeTab === "values"}
              onClick={() => setActiveTab("values")}
              icon={<Heart size={18} />}
              label="Values"
            />
            <TabBtn
              active={activeTab === "stats"}
              onClick={() => setActiveTab("stats")}
              icon={<BarChart3 size={18} />}
              label="Stats"
            />
          </div>

          {/*   STATS GRID   */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            <StatCard value="50K+" label="Customers Served" />
            <StatCard value="7-14" label="Delivery Days" />
            <StatCard value="98%" label="Satisfaction Rate" />
            <StatCard value="24/7" label="Support" />
          </div>
        </div>

        {/* Content Wrapper with Ref and Scroll-Margin */}
        <div
          ref={contentRef}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto scroll-mt-10"
        >
          {activeTab === "mission" && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <div className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-2xl mb-6">
                <p className="text-emerald-900 font-medium leading-relaxed">
                  At ShipifyNepal, we're on a mission to make international
                  shopping accessible to everyone in Nepal.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe that geographical boundaries shouldn't limit your
                access to the world's best products. Whether it's electronics
                from Amazon US, fashion from UK retailers, or unique items from
                Japanese markets, we bridge the gap between global markets and
                your doorstep in Nepal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Globe className="text-emerald-500 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Global Access
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Shop from any international website with ease
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck
                    className="text-emerald-500 shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Secure Process
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Your packages and payments are fully protected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What We Do
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We provide a complete solution for shopping from international
                websites and having your purchases delivered to your doorstep in
                Nepal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ServiceCard
                  icon={<Box className="text-  [#20c55e]" size={20} />}
                  bg="bg-emerald-50/50"
                  iconBg="bg-emerald-100"
                  border="border-emerald-100"
                  title="Package Forwarding"
                  desc="Use our international addresses to shop from any global store, then we forward packages to Nepal."
                />
                <ServiceCard
                  icon={<FileText className="text-blue-600" size={20} />}
                  bg="bg-blue-50/30"
                  iconBg="bg-blue-100"
                  border="border-blue-100/50"
                  title="Customs Clearance"
                  desc="We handle all customs paperwork, duty calculations, and clearance procedures on your behalf."
                />
                <ServiceCard
                  icon={<RefreshCcw className="text-purple-600" size={20} />}
                  bg="bg-purple-50/30"
                  iconBg="bg-purple-100"
                  border="border-purple-100/50"
                  title="Real-time Tracking"
                  desc="Track your package from purchase to delivery with our comprehensive tracking system."
                />
                <ServiceCard
                  icon={<Headset className="text-orange-600" size={20} />}
                  bg="bg-orange-50/30"
                  iconBg="bg-orange-100"
                  border="border-orange-100/50"
                  title="Dedicated Support"
                  desc="Our customer support team assists you at every step of your international shopping journey."
                />
              </div>

              <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl">
                <p className="text-sm text-blue-900 font-medium">
                  <span className="font-bold">Transparent Pricing:</span> All
                  costs including shipping, duties, and our service fee are
                  calculated upfront before you confirm your order.
                </p>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ValueCard
                  icon={<ShieldCheck className="text-emerald-500" size={20} />}
                  title="Transparency"
                  desc="No hidden fees. You see all costs upfront. We provide complete breakdowns of shipping, duties, and fees."
                />
                <ValueCard
                  icon={<Heart className="text-blue-500" size={20} />}
                  title="Reliability"
                  desc="We ensure safe and timely delivery with complete tracking. Consistent 7-14 day delivery times."
                />
                <ValueCard
                  icon={<Headset className="text-orange-500" size={20} />}
                  title="Customer Support"
                  desc="Dedicated support team available 24/7 via WhatsApp, email, and phone for all your queries."
                />
                <ValueCard
                  icon={<Lock className="text-purple-500" size={20} />}
                  title="Security"
                  desc="Secure payments and data protection. We use bank-level encryption and comply with data standards."
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-5 px-1 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          {/*    Green Process Container    */}
          <div className="bg-gradient-to-br from-[#1fc05f] to-emerald-700 rounded-2xl p-3 md:p-8 mb-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl text-center font-bold text-white mb-2">
                Simple 3-Step Process
              </h3>
              <p className="text-emerald-50 opacity-90">
                Getting started with international shopping has never been
                easier
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center bg-[#b2dfdb]/20 backdrop-blur-md rounded-2xl p-5  relative  border-white/30">
                {/* The Circle: Using relative positioning with negative margin to "float" it on top */}
                <div className="relative  mb-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 font-bold text-lg shadow-md  ">
                  1
                </div>

                {/* Content */}
                <h4 className="text-white font-bold text-lg mb-1">
                  Shop Globally
                </h4>

                <p className="text-white text-sm leading-relaxed max-w-2xl">
                  Use our address to shop from any international store
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center bg-[#b2dfdb]/20 backdrop-blur-md rounded-2xl p-5  relative  border-white/30">
                {/* The Circle: Using relative positioning with negative margin to "float" it on top */}
                <div className="relative  mb-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 font-bold text-lg shadow-md  ">
                  2
                </div>

                {/* Content */}
                <h4 className="text-white font-bold text-lg mb-3">
                  We Handle Everything
                </h4>

                <p className="text-white text-sm leading-relaxed max-w-2xl">
                  Use our address to shop from any international store
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center bg-[#b2dfdb]/20 backdrop-blur-md rounded-2xl p-5  relative  border-white/30">
                {/* The Circle: Using relative positioning with negative margin to "float" it on top */}
                <div className="relative  mb-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 font-bold text-lg shadow-md  ">
                  3
                </div>

                {/* Content */}
                <h4 className="text-white font-bold text-lg mb-3">
                  Deliver to You
                </h4>

                <p className="text-white text-sm leading-relaxed max-w-2xl">
                  Use our address to shop from any international store
                </p>
              </div>
            </div>
          </div>

          {/*    Footer CTA    */}
          <div className="space-y-8 mb-5">
            <h3 className="text-lg  text-gray-500">
              Ready to start shopping internationally?
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-400 to-[#20c55e] hover:from-emerald-500 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-md  transition-all active:scale-95">
                Get Started Today
              </button>

              <button className="flex items-center gap-2 px-8  rounded-xl border border-gray-300 text-  [#20c55e] font-bold hover:bg-emerald-50 transition-all">
                <ArrowLeft size={20} />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*   Sub-Components   */

const TabBtn = ({ active, label, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all font-semibold text-sm
    ${
      active
        ? "bg-[#20c55e] border-[#20c55e] text-white shadow-lg shadow-emerald-200"
        : "bg-white border-gray-200 text-gray-600 hover:border-emerald-200 hover:bg-emerald-50/30"
    }`}
  >
    {icon} {label}
  </button>
);

const StatCard = ({ value, label }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-3xl font-black text-[#20c55e] mb-1">{value}</h3>
    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
      {label}
    </p>
  </div>
);

// Added missing ServiceCard component
const ServiceCard = ({ icon, title, desc, bg, iconBg, border }) => (
  <div className={`${bg} ${border} p-6 rounded-2xl border flex flex-col gap-4`}>
    <div
      className={`${iconBg} w-10 h-10 rounded-lg flex items-center justify-center`}
    >
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

// Added missing ValueCard component
const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
        {icon}
      </div>
      <h4 className="font-bold text-slate-900">{title}</h4>
    </div>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);
