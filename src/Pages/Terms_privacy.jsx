import React, { useEffect } from "react";

export default function Terms_privacy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-7 shadow-xl ">
        <div className="bg-white border-b mb-10 ">
          <div className="max-w-5xl mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold  text-[#36b6ff] mb-4">
              Terms & Conditions{" "}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These terms and conditions govern your use of
              <strong> Zeenopay Nepal</strong> website and services. By using
              our site, you agree to comply with them.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto ">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-15 max-w-7xl">
            <div className="px-6 py-8 max-w-7xl rounded-xl">
              <div className="prose prose-blue text-gray-700 space-y-8 text-left  ">
                <section>
                  <h3 className="text-xl font-semibold text-[#36b6ff] mb-2">
                    1. Website Use
                  </h3>
                  <p>
                    You must use this site responsibly and lawfully. Any misuse
                    or unauthorized access may lead to legal action.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-[#36b6ff] mb-2">
                    2. Intellectual Property
                  </h3>
                  <p>
                    All materials including text, graphics, logos, and
                    trademarks are owned by HLS or licensed to us. Unauthorized
                    use is prohibited.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-[#36b6ff] mb-2">
                    3. Limitation of Liability
                  </h3>
                  <p>
                    HLS is not liable for any indirect losses arising from the
                    use of this website or services.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-[#36b6ff] mb-2">
                    4. Governing Law
                  </h3>
                  <p>
                    These terms are governed by the laws of Nepal. Any disputes
                    shall be resolved in Nepali courts.
                  </p>
                </section>
 
                <section>
                  <h3 className="text-xl font-semibold text-[#36b6ff] mb-2">
                    5. Updates to Terms
                  </h3>
                  <p>
                    We reserve the right to change or update these terms without
                    prior notice. Please review periodically.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-[#36b6ff] mb-2">
                    6. Contact
                  </h3>
                  <p>
                    Reach out to us at
                    <a
                      href="mailto:zeenopay@info.com"
                      className="text-blue-600 hover:underline font-medium px-2"
                    >
                      zeenopay@info.com
                    </a>
                    for clarification or legal matters.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
            >
              &larr; Return to Homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
