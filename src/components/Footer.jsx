import React from "react";

const Footer = () => {
  return (
    <main>
      <div className="bg-[#F8D4B4] h-[48vh] w-full font-poppins">
        {/* This is the main container for the footer */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-7xl text-gray-800 font-bold text-center pt-8">
            More Than Just a Café – It’s an <br /> Experience!
          </h1>

          <p className="text-2xl text-gray-900 text-center">
            At De Globe Café, every sip, every bite, and every moment is crafted
            with love.❤️ <br />
            From authentic flavors to a cozy ambiance, here’s why our customers
            keep coming back!
          </p>

          <button className="bg-black text-white px-21 py-2 hover:bg-gray-100 hover:text-black transition-colors duration-300">
            <a href="https://www.google.com/search?cs=1&output=search&kgmid=/g/11l4cck0nk&q=De+Globe+Cafe&shndl=30&shem=lcuae,uaasie&kgs=9d31530bf20705f3">
              Visit Us Today
            </a>
          </button>
        </div>
      </div>

      <footer className="bg-black text-white py-16 px-8 border-t border-gray-800">
        <div className="w-[95vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {/* Company Info */}
            <div className="space-y-4 border-r-2 border-white px-4">
              <h3 className="text-2xl font-bold mb-4">De Globe Cafe</h3>
              <p className="text-gray-400 mb-4">
                A place where every sip tells a story!
              </p>
              <p className="text-sm">
                From the streets of Hazratganj, we bring you handcrafted
                beverages and delicious treats that make every moment special.
              </p>

              <p className="text-sm">
                Established in 2019 | Loved by Lucknowies
              </p>
            </div>

            {/* Quick Links */}
            <div className="border-r-2 border-white px-4">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Reels & Highlights
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="border-r-2 border-white px-4">
              <h4 className="text-lg font-semibold mb-4">Our Branches</h4>
              <p className="text-sm mb-4">
                <b>
                  Hazratganj Branch 1 <br /> Address:{" "}
                </b>{" "}
                Maqbara Rd, Opposite LIC Office, <br />
                Bank of Baroda, Hazratganj.
              </p>
              <p className="text-sm mb-4">
                <b>
                  Hazratganj Branch 2 <br /> Address:{" "}
                </b>{" "}
                Chitrhar Building, Behind Prince <br />
                Market, Nawal Kishor Road, Hazratganj.
              </p>
            </div>

            {/* Stay Updated & Connected */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">
                Stay Updated & Connected !
              </h4>
              <p className="text-gray-100 mb-4">
                Subscribe to our newsletter for latest updates, special offers,
                and coffee tips.
              </p>
              <div className="flex space-x-4">
                <div className="w-11 h-11 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-11 h-11 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-11 h-11 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mt-4">Opening Hours:</h2>
                <p className="text-lg ">Monday to Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 mt-5 pt-8 -mb-8 flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              © 2025 All Rights Reserved to De Globe Café | “Crafted with love,
              brewed to perfection!” — 🤍 Team BlackSheild ( A Part Of NirvoTech
              )
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
