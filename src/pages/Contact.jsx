import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Faq from "../components/Faq";

const Contact = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });

  const locationRef = useRef(null);
  const isLocationInView = useInView(locationRef, {
    once: true,
    threshold: 0.3,
  });

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-[50vh] w-full bg-[#161916]">
        <motion.div
          ref={heroRef}
          className="flex flex-col items-center w-[90vw] rounded-2xl h-[40vh] justify-center bg-[#efd3ba]"
          initial={{ x: -300, opacity: 0 }}
          animate={
            isHeroInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-2 text-[#161916]">
            Get in Touch with De Globe Café
          </h1>
          <h2 className="text-3xl text-center font-medium mt-4 font-serif text-[#161916]">
            We love hearing from our customers! <br /> Whether you have a
            question, feedback, or simply want to say hello, <br /> feel free to
            reach out.☕
          </h2>
        </motion.div>
      </div>

      <section claasName="flex flex-col items-center justify-center w-full h-[90vh] bg-[#161916]">
        <div className="flex flex-col items-center justify-center space-y-4 w-[85vw] h-full mt-12 mx-auto text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Visit Us at Our Two Locations
          </h1>
          <p className="text-center text-3xl font-medium font-serif">
            Come, Be a Part of Our Story!
          </p>
          <p className="text-center text-3xl font-medium font-serif">
            Whether you’re here for a quick chai break or an evening of
            conversations over coffee, <br />
            De Globe Café welcomes you with open arms.
          </p>
          <p className="text-center text-3xl font-medium font-serif">
            <b> Opening Hours -</b> Monday – Sunday: 10:00 AM – 11:00 PM
          </p>
        </div>

        <div
          ref={locationRef}
          className="flex items-center gap-4 mb-10 justify-center w-[85vw] h-full mt-12 mx-auto"
        >
          <motion.div
            className="flex flex-col items-center justify-center bg-[#FAD7B7] space-y-4 w-1/2 rounded-3xl mx-auto h-[40vh]"
            initial={{ x: -200, opacity: 0 }}
            animate={
              isLocationInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-center">🏢</span>
            <h1 className="text-3xl font-semibold">De Globe Café</h1>
            <p className="text-center font-serif text-2xl font-normal">
              Hazratganj (Near LIC Office)
            </p>
            <p className="text-center font-serif text-2xl font-normal">
              Maqbara Rd, opposite LIC Office, Bank of Baroda, <br />{" "}
              Hazratganj, Lucknow, Uttar Pradesh 226001
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center bg-[#FAD7B7] space-y-4 w-1/2 rounded-3xl mx-auto h-[40vh]"
            initial={{ x: 200, opacity: 0 }}
            animate={
              isLocationInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-center">🏢</span>
            <h1 className="text-3xl font-semibold">De Globe Café</h1>
            <p className="text-center font-serif text-2xl font-normal">
              Hazratganj (Behind Prince Market)
            </p>
            <p className="text-center font-serif text-2xl font-normal">
              Chitrhar Building, behind Prince Market, Nawal Kishor Road,
              Hazratganj, Lucknow, Uttar Pradesh 226001
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />

      <section className="flex flex-col items-center justify-center w-full h-[50vh] bg-[#161916]">
        <div className="flex flex-col items-center justify-center space-y-4 w-[85vw] h-full mt-12 mx-auto text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Connect With Us on Social Media
          </h1>
          <p className="text-center text-3xl font-medium font-serif">
            Stay updated with our latest offers, events, and new additions to
            the menu!
          </p>
          <p className="text-center text-3xl font-medium font-serif">
            Follow Us Now
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-[85vw] h-[60vh] mt-12 mb-16 mx-auto">
          {/* Instagram Card */}
          <a 
            href="https://www.instagram.com/deglobecafe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white rounded-2xl h-[15vh] hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img 
            className="w-16 h-16"
            src="/icons8-instagram.svg" />
            <h3 className="text-black text-3xl font-bold">@deglobecafe</h3>
          </a>

          {/* Facebook Card */}
          <div className="flex items-center justify-center bg-white rounded-2xl h-[15vh] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src="/icons8-facebook.svg" className="w-16 h-16"/>
            <h3 className="text-black text-3xl font-bold">@deglobecafe</h3>
          </div>

          {/* Google Card */}
          <a 
            href="https://www.google.com/search?sxsrf=AHTn8zqkbqOW2Etc-RVmZTmxaewZzadOow:1743617914603&kgmid=/g/11l4cck0nk&q=De+Globe+Cafe&shndl=30&shem=lcuae,uaasie&kgs=cc9db314593d27d3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white rounded-2xl h-[15vh] hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src="/icons8-google.svg" className="w-16 h-16" />
            <h3 className="text-black text-3xl font-bold">@deglobecafe</h3>
          </a>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="flex flex-col items-center justify-center w-full py-16 bg-[#161916]">
        <div className="flex flex-col items-center justify-center space-y-8 w-[85vw] mx-auto text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Find Us on the Map
          </h1>
          <p className="text-center text-2xl font-medium font-serif mb-8">
            Located in the heart of Hazratganj, Lucknow - Easy to find, hard to forget!
          </p>
          
          {/* Map Container */}
          <div className="w-full max-w-6xl h-[60vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d80.944!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnMzguNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="De Globe Cafe Location"
            ></iframe>
          </div>
          
          {/* Location Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[75vw] mt-8">
            {/* Location 1 */}
            <div className="bg-[#efd3ba] rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-black mb-4">📍 Location 1</h3>
              <h4 className="text-xl text-black font-semibold mb-2">Hazratganj (Near LIC Office)</h4>
              <p className="text-gray-900 mb-2">
                Maqbara Rd, opposite LIC Office, Bank of Baroda,
              </p>
              <p className="text-gray-900 mb-4">
                Hazratganj, Lucknow, Uttar Pradesh 226001
              </p>
              <a 
                href="https://maps.google.com/?q=De+Globe+Cafe+Hazratganj+LIC+Office" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
            
            {/* Location 2 */}
            <div className="bg-[#efd3ba] rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-black mb-4">📍 Location 2</h3>
              <h4 className="text-xl text-black font-semibold mb-2">Hazratganj (Behind Prince Market)</h4>
              <p className="text-gray-900 mb-2">
                Chitrhar Building, behind Prince Market, Nawal Kishor Road,
              </p>
              <p className="text-gray-900 mb-4">
                Hazratganj, Lucknow, Uttar Pradesh 226001
              </p>
              <a 
                href="https://maps.google.com/?q=De+Globe+Cafe+Prince+Market+Hazratganj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
