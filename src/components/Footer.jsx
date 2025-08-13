import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">De Globe Cafe</h3>
            <p className="text-gray-400 mb-4">
              Experience the finest coffee culture with handcrafted beverages, 
              delicious food, and warm hospitality in our cozy cafe environment.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Coffee & Beverages</li>
              <li>Fresh Food</li>
              <li>Catering Services</li>
              <li>Event Hosting</li>
              <li>Take Away</li>
            </ul>
          </div>

          {/* Stay Updated & Connected */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated & Connected</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for latest updates, special offers, and coffee tips.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-gray-800 rounded text-white placeholder-gray-400 border border-gray-700 focus:border-orange-500 focus:outline-none"
              />
              <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm">
           © 2025 All Rights Reserved to De Globe Café  | “Crafted with love, brewed to perfection!” — 🤍 Team BlackSheild ( A Part Of NirvoTech )
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;