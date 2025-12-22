import React, { useEffect } from "react";
import { Mail, ShieldCheck, AlertTriangle, HelpCircle } from "lucide-react";

const ZeenopaySupport = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    /* Increased max-width to 4xl to fit questions side-by-side */
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-slate-800">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#4182f3]">Zeenopay Support</h1>
        <p className="text-slate-500 text-sm mt-1">
          Simple answers and quick help.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
           <HelpCircle size={14} /> Common Questions
        </h2>
        
        {/* Changed space-y-2 to flex-row with gap and items-start */}
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <details className="group flex-1 border border-slate-100 rounded-xl bg-white transition-all overflow-hidden w-full">
            <summary className="list-none p-4 font-medium cursor-pointer flex justify-between items-center hover:bg-slate-50">
              How long do refunds take?
              <span className="text-slate-300 group-open:rotate-180 transition-transform ml-2">
                ↓
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-500 border-t text-left border-slate-50 pt-2">
              Most refunds are processed within 5-10 business days directly to
              your original payment method.
            </div>
          </details>

          <details className="group flex-1 border border-slate-100 rounded-xl bg-white transition-all overflow-hidden w-full">
            <summary className="list-none p-4 font-medium cursor-pointer flex justify-between items-center hover:bg-slate-50">
              Is my money secure?
              <span className="text-slate-300 group-open:rotate-180 transition-transform ml-2">
                ↓
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-500 border-t text-left border-slate-50 pt-2">
              Zeenopay uses bank-grade encryption and 2-factor authentication to
              keep your funds safe.
            </div>
          </details>
        </div>
      </section>

      {/* Grid for Policy and Report for better desktop balance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
            <ShieldCheck size={14} /> Refund Policy
          </h2>
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 text-sm leading-relaxed text-slate-700 h-full">
            We offer a <strong className="text-blue-700">30-day window</strong>{" "}
            for refund requests. To be eligible, the transaction must be disputed
            before the funds are finalized.
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
            <AlertTriangle size={14} /> Report an Issue
          </h2>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Issue Title"
              className="w-full p-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Details..."
              rows="3"
              className="w-full p-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button className="w-full bg-[#4182f3] text-white font-bold py-3 rounded-xl hover:bg-black transition-all">
              Submit
            </button>
          </form>
        </section>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
          <Mail size={12} /> Questions? support@zeenopay.com
        </p>
      </footer>
    </div>
  );
};

export default ZeenopaySupport;