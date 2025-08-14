import React from "react";
import { motion } from "framer-motion";
import ScrollAnimatedImage from "../components/ScrollAnimatedImage";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  function handleExploreMenu() {
    navigate("/Menu");
  }
  return (
    <main className=" flex flex-col items-center justify-center w-full">
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
            <button
            onClick={handleExploreMenu}
            className="bg-black px-10 py-3 hover:bg-orange-400 duration-500 font-semibold mt-6 text-white rounded-lg">
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
        <div className="flex justify-center items-center w-full h-[40vh] bg-[#161916]">
          <h1 className="text-[#F8d4ba] font-bold text-5xl tracking-wide leading-16">"Coffee isn’t just a drink, it’s a hug in a mug, a <br/>
           spark of inspiration, and the fuel for great ideas."</h1>
        </div>
        <div className="flex justify-center items-center w-full h-[90vh] bg-[#161916]">

        </div>
      </div>


    </main>
  );
};

export default Home;
