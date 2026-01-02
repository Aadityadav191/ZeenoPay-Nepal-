import React from 'react';

export default function Report_Problem() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 font-sans text-left text-slate-800">
      <h1 className="text-4xl font-extrabold mb-4">Refund Policy</h1>
      <p className="text-slate-500 mb-10 pb-6 border-b">Last updated: Dec 22, 2025</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold mb-3 text-slate-900">1. Eligibility</h2>
          <p className="leading-relaxed">
            We offer a **30-day money-back guarantee**. To be eligible for a refund, your item must 
            be unused and in the same condition that you received it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-slate-900">2. Non-Refundable Items</h2>
          <ul className="list-disc ml-5 space-y-2 text-slate-600">
            <li>Digital gift cards</li>
            <li>Downloadable software products</li>
            <li>Sale or clearance items</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-slate-900">3. Process</h2>
          <p className="leading-relaxed">
            Once your return is received, we will notify you of the approval or rejection. 
            If approved, your refund will be processed and a credit will automatically be applied 
            to your original payment method within **7-10 business days**.
          </p>
        </section>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mt-12">
          <h3 className="font-bold mb-2">Need help?</h3>
          <p className="text-sm text-slate-600 mb-4">Contact our billing team for any specific questions.</p>
          <a href="mailto:support@zeenopay.com" className="text-blue-600 font-semibold hover:underline">
            support@zeenopay.com →
          </a>
        </div>
      </div>
    </div>
  );
};