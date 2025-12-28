import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import ContactForm from "../Components/Forms/ContactForm";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: "smooth", 
    });
  }, []);
  
  return (
    <>
      <main className="min-h-screen  px-4 py-12 md:px-1 md:py-0 mb-10">
       <div className="bg-white border-b mb-10 ">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#3e8ff5] mb-4">Contact Us </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We want you to love what you ordered. If you're not completely satisfied, 
            we've made our return process as simple as possible.
          </p>
        </div>
      </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {/* Section 1: Contact Form */}
          <section className="w-full md:w-1/2 p-6 md:p-8 text-left shadow-lg rounded-2xl border border-gray-200 bg-white">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide transition-transform hover:scale-[1.01] duration-300">
              Send us a message
            </h1>
            <p className="text-base text-gray-600 mb-6">
              Fill in the form and we'll reach out by email or phone within one
              business day.
            </p>

            <ContactForm />
          </section>

          {/* Section 2: Contact Details and Map */}
          <section className="w-full md:w-1/2 p-6 md:p-8 text-left shadow-lg rounded-2xl border border-gray-200 bg-white">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                Prefer to reach us another way?
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
                    CALL
                  </h3>
                  <div className="flex items-center space-x-4">
                    <a
                      href="tel:+9779812384329"
                      className="text-l text-gray-900 font-medium hover:text-indigo-600 transition"
                    >
                      +977 9812384329
                    </a>

                    <a
                      href="https://wa.me/9821747900"
                      target="_blank"
                      className="flex items-center px-2 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WHATSAPP
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
                    OFFICE LINE
                  </h3>
                  <a
                    href="tel:+9771534393322"
                    className="text-l text-gray-900 font-medium hover:text-indigo-600 transition"
                  >
                    +977 1 534393322
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:zeenopay@gmail.com"
                    className="text-l text-gray-900 font-medium hover:text-indigo-600 transition"
                  >
                    zeenopay@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
                    OFFICE
                  </h3>
                  <p className="text-l text-gray-900 font-medium">
                    Banshidhar Marg, Kathmandu 44600, Nepal
                  </p>
                </div>
              </div>

              <div className="mt-8 p-3 bg-indigo-50 border border-gray-200 rounded-xl text-sm text-gray-600">
                Votting hours: Sunday–Friday, 10:00–18:00 NPT. We will call or
                email you back promptly.
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-4">
              <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
                LOCATION MAP
              </h3>
              <div className="w-full h-64 md:h-50 overflow-hidden rounded-lg shadow-md">
                <iframe
                  title="ZeeenoPay Nepal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.748648351052!2d85.3025553147496!3d27.69467668279146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1997d9c6c139%3A0x9d004245903b41d2!2sAmbe%20Complex!5e0!3m2!1sen!2snp!4v1620800000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
