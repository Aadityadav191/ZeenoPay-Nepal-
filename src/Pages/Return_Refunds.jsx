import React, { useEffect } from "react";
import { ArrowLeft, Box, RefreshCcw, Mail } from "lucide-react";

const RefundPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#3e8ff5] mb-4">
            Returns & Refunds
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We want you to love what you ordered. If you're not completely
            satisfied, we've made our return process as simple as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        {/* Policy Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 text-left overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Our Policy</h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Return Window
                </h3>
                <p className="text-gray-600">
                  Items can be returned within <strong>30 days</strong> of the
                  delivery date. Items must be in their original, unworn
                  condition with all tags attached.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Refund Process
                </h3>
                <p className="text-gray-600">
                  Once we receive your item, please allow 5-7 business days for
                  the refund to be processed. The credit will automatically be
                  applied to your original method of payment.
                </p>
              </section>

              <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Holiday Extension
                    </h4>
                    <p className="text-blue-800 text-sm mt-1">
                      Purchases made between Nov 1st and Dec 24th can be
                      returned until Jan 31st of the following year.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Non-Returnable Items
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Gift cards</li>
                  <li>Downloadable software products</li>
                  <li>Personalized or custom-made items</li>
                  <li>Opened intimate apparel or beauty products</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-xl">Ready to start a return?</h3>
                <p className="text-gray-500">
                  You'll need your order number and email address.
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Start My Return
              </button>
            </div>
          </div>
        </div>

        {/* Help Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Have more questions?{" "}
            <a href="#" className="text-blue-600 font-medium underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPage;
