import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:underline">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">AirCover</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Disability support</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Cancellation options</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Report neighborhood concern</a></li>
            </ul>
          </div>
          
          {/* Hosting */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Hosting resources</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Community forum</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>
          
          {/* Airbnb */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:underline">Newsroom</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">New features</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Investors</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Gift cards</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:underline">Terms & conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <p className="text-sm text-gray-600">© 2025 Airbnb, Inc.</p>
              <div className="hidden md:flex md:space-x-2 md:ml-2">
                <span className="text-gray-400">·</span>
                <a href="#" className="text-sm text-gray-600 hover:underline">Privacy</a>
                <span className="text-gray-400">·</span>
                <a href="#" className="text-sm text-gray-600 hover:underline">Terms</a>
                <span className="text-gray-400">·</span>
                <a href="#" className="text-sm text-gray-600 hover:underline">Sitemap</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Globe size={16} className="mr-2" />
                <a href="#" className="text-sm font-medium hover:underline">English (US)</a>
              </div>
              
              <div>
                <a href="#" className="text-sm font-medium hover:underline">$ USD</a>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-gray-900">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-gray-900">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-gray-900">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;