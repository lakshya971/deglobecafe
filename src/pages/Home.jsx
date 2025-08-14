import React from "react";
import { motion } from "framer-motion";
import ScrollAnimatedImage from "../components/ScrollAnimatedImage";

const Home = () => {
  return (
    <div className="h-screen flex justify-center w-full">
      {/* Landing Page */}
      <div className="w-[95vw] flex justify-center items-center bg-[#F8d4ba] h-[90vh] rounded-4xl">
        <div className="flex w-[90%] ml-8 justify-center absolute items-center">
          {/* left text of landing page */}
          <div className="flex flex-col justify-start -mt-9 items-start w-2/3 ">
            <p className="text-md font-bold mb-2">De Globe Cafe</p>
            <h1 className="font-sans -mt-1 font-bold tracking-normal text-8xl leading-24 mb-7">
              Handmade Coffee with Amazing Vibes
            </h1>
            <p className="text-xl tracking-tight font-serif leading-6">
              Handmade coffee, brewed with passion, creates an unmatched
              experience. Rich <br /> aromas, smooth flavors, and cozy vibes
              make every sip special, turning simple <br /> moments into
              unforgettable memories. Perfect coffee, perfect ambiance, pure{" "}
              <br /> bliss!
            </p>
            <button className="bg-black px-10 py-3 hover:bg-orange-400 duration-500 font-semibold mt-6 text-white rounded-lg">
              Explore Our Menu
            </button>
          </div>

          {/* right image of landing page */}
          <div className="w-1/2 relative ">
            <ScrollAnimatedImage />
          </div>
        </div>
      </div>

      {/* About Section */}

      <div>
        
      </div>


    </div>
  );
};

export default Home;
