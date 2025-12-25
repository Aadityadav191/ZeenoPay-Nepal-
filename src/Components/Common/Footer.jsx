import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    
<footer className="bg-[#c7d7f9] text-gray-700 pt-10 pb-6 px-4 sm:px-6 lg:px-16 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-1 relative z-5">       
        
        <div className="grid grid-cols-1  md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">         
        
          <div className="space-y-4 ">
            <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase text-left">
              Trusted Since 2021
            </p>
            <h2 className="text-2xl font-bold text-gray-800 text-left">
              Zeenopay Nepal
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed text-left">
                Zeenopay Nepal is your reliable partner for seamless international voting solutions. We are committed to providing secure, efficient, and user-friendly services to empower voters worldwide.
            </p>

            
            <div className="space-y-3 pt-2 text-sm ">
              <div className="flex items-start text-gray-600 hover:text-indigo-600 transition">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-indigo-500 flex-shrink-0 cursor-pointer " />
                <p>Ambe Complex Parking, Teku, Kathmandu, Nepal</p>
              </div>
              <div className="flex items-center text-gray-600 hover:text-indigo-600 transition">
                <Phone className="w-4 h-4 mr-3 text-indigo-500 flex-shrink-0" />
                <p>+977 9813429332 , +977 1 534232388</p>
              </div>
              <div className="flex items-center text-gray-600 hover:text-indigo-600 transition">
                <Mail className="w-4 h-4 mr-3 text-indigo-500 flex-shrink-0" />
                <Link to="mailto:Zeenopaynepal@gmail.com" className="hover:text-indigo-600 transition">
                  Zeenopaynepal@gmail.com
                </Link>
              </div>
            </div>

            {/* // Social Icons  */}
            <div className="flex space-x-4 pt-4 ">
              <a href="#" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 uppercase tracking-wider text-left">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-left">
              <li><Link to="/create-order" className="text-gray-600 hover:text-indigo-600 transition">Create Order</Link></li>
              <li><Link to="/Calculator" className="text-gray-600 hover:text-indigo-600 transition">Calculator</Link></li>
              <li><Link to="/Blog" className="text-gray-600 hover:text-indigo-600 transition">Blog</Link></li>
              <li><Link to="/Guides" className="text-gray-600 hover:text-indigo-600 transition">Guides</Link></li>
              <li><Link to="/recommended" className="text-gray-600 hover:text-indigo-600 transition">Recommended Websites</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 uppercase tracking-wider text-left">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-left">
              <li><Link to="/Report a Problem" className="text-gray-600 hover:text-indigo-600 transition">Report a Problem</Link></li>
              <li><Link to="/FAQ" className="text-gray-600 hover:text-indigo-600 transition">FAQ</Link></li>
              <li><Link to="/return-refunds" className="text-gray-600 hover:text-indigo-600 transition">Returns & Refunds</Link></li>
              <li><Link to="/terms-of-use" className="text-gray-600 hover:text-indigo-600 transition">Terms And Privacy </Link></li>
            </ul>
          </div>
        </div>

        
        <div className="mt-12 pt-6 border-t border-gray-200">
            
            
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-gray-500 mb-2 sm:mb-0">
                    &copy; 2025 Zeenopay Nepal . All rights reserved.
                </p>
                <p className="text-xs  tracking-[0.15em] text-indigo-400 uppercase">
                    International Voting Made Easy
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}