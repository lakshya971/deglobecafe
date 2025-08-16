import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimatedImage from "../components/ScrollAnimatedImage";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const dishes = [
    {
      name: "Aloo Burger",
      desc: "A Soft Paneer Patty With Crunchy Veggies And Cheese In A Toasted Bun.",
      img: "/aloo-burger.jpeg",
    },
    {
      name: "Chicken Soup",
      desc: "Juicy Grilled Chicken With Melted Cheese In A Soft Toasted Bun.",
      img: "/chicken-soup.jpg",
    },
    {
      name: "Cheesy Maggi",
      desc: "The Classic Instant Maggi Noodles, Simple Yet Satisfying.",
      img: "/cheesy_maggi_noodles.jpeg",
    },
    {
      name: "Chicken Garlic Noodles",
      desc: "A Chilled, Frothy Coffee Drink Perfect For Summer Refreshment.",
      img: "/chicken-garlic-noodles.jpeg",
    },
    {
      name: "Chicken Fried Rice",
      desc: "Rich Creamy Hot Chocolate Topped With Whipped Cream And Love.",
      img: "/chicken-fried-rice.jpeg",
    },
    {
      name: "Veg Creamy Burger",
      desc: "A Classic Pizza Loaded With Fresh Veggies And Mozzarella Cheese.",
      img: "/veg_creamy_burger.jpeg",
    },
    {
      name: "Veg Momos",
      desc: "Crispy Golden Fries Served With Seasoning And Dip.",
      img: "/veg_momo-steam.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? dishes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === dishes.length - 1 ? 0 : prev + 1));
  };

  // Navigation functions
  const navigate = useNavigate();
  function handleExploreMenu() {
    navigate("/Menu");
  }
  function handleAbout() {
    navigate("/About");
  }
  return (
    <main className="flex flex-col items-center justify-center w-full cursor-default">
      {/* Landing Page */}
      <div className="w-[95vw] flex justify-center items-center bg-[#F8d4ba] h-[90vh] rounded-4xl">
        <div className="flex w-[88vw] ml-8 justify-center overflow-hidden absolute items-center">
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
              className="bg-black px-10 py-3 hover:bg-orange-400 duration-500 font-semibold mt-6 text-white rounded-lg"
            >
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
        <div className="flex bg-[url('/about-heading-bg.png')] bg-cover bg-center justify-center items-center w-[99vw] h-[60vh] bg-[#161916]">
          <h1 className="text-[#F8d4ba] font-bold text-5xl tracking-wide leading-16">
            "Coffee isn’t just a drink, it’s a hug in a mug, a <br />
            spark of inspiration, and the fuel for great ideas."
          </h1>
        </div>

        <div className="flex justify-center w-[85vw] mx-auto gap-20 items-center h-[90vh] bg-[#161916]">
          {/* Left image in About section */}
          <div className="w-1/2 relative overflow-hidden h-[75vh]">
            <img
              src="/deglobe_image.png"
              alt="deglobe"
              className="h-full rounded-3xl object-cover overflow-hidden w-full"
            />
          </div>

          {/* Right content in About section */}
          <div className="w-1/2 text-white flex-col gap-5 flex justify-start items-start">
            <p className="font-bold">About Us</p>
            <h2 className="font-bold text-5xl leading-16">
              Explore Tale of <br /> Resilience & Passion
            </h2>
            <p className="text-lg font-serif">
              De Globe Cafe was established in 2019, bringing a fresh, global
              experience to Hazratganj, Lucknow, in place of a Mughal-theme
              restaurant. Just as it started gaining momentum, the Covid-19
              pandemic shook the world. The lockdown forced many businesses to
              shut down, but we refused to give up. Prioritizing our team's
              well-being, we ensured timely rent payments and full salaries,
              even in uncertain times. Through unwavering determination and love
              for what we do, we survived—and today, our coffee and tea are
              among the most loved in Hazratganj.
            </p>

            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-1">
                <img src="/small-coffee.svg" className="h-4 w-4" alt="" />
                People First Approach
              </li>
              <li className="flex items-center gap-1">
                <img src="/small-coffee.svg" className="h-4 w-4" alt="" />
                Unwavering Commitment
              </li>
              <li className="flex items-center gap-1">
                <img src="/small-coffee.svg" className="h-4 w-4" alt="" />
                Legacy in Every Cup
              </li>
            </ul>

            <button
              onClick={handleAbout}
              className="cursor-pointer px-16 py-2 hover:bg-orange-400 duration-400 hover:text-white  bg-[#F8d4ba] text-black font-semibold rounded-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Our Most Loved Sips Section */}

      <div className="w-full bg-[#161916] py-20">
        <div className="flex justify-center w-[95vw] mx-auto bg-[#F8d4ba] rounded-3xl py-16">
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <h1 className="text-7xl font-bold text-[#161916]">
              Our Most Loved Sips
            </h1>
            <p className="text-2xl font-semibold text-[#161916]">
              Crafted with passion, enjoyed with love.
            </p>

            {/* Grid of drinks - positioned inside the container */}
            <div className="w-[90%] max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="bg-[#111] rounded-3xl p-6 shadow-lg text-center w-full h-[500px] flex flex-col">
                <img
                  src="/delicious.jpeg"
                  alt="Delicious Coffee"
                  className="w-full h-[320px] object-cover rounded-2xl mb-6 border border-[#c5a880]"
                />
                <h3 className="text-2xl font-bold text-white">
                  Delicious Coffee
                </h3>
                <p className="text-gray-100 mt-3 text-lg">
                  Freshly Brewed Coffee With A Deep, Rich Flavor To Kickstart
                  Your Day.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-[#111] rounded-3xl p-6 shadow-lg text-center w-full h-[500px] flex flex-col">
                <img
                  src="/Astonishing.jpeg"
                  alt="Astonishing Tea"
                  className="w-full h-[320px] object-cover rounded-2xl mb-6 border border-[#c5a880]"
                />
                <h3 className="text-2xl font-bold text-white">
                  Astonishing Tea
                </h3>
                <p className="text-gray-100 mt-3 text-lg">
                  A Comforting Blend Of Tea Leaves, Milk, And Aromatic Spices.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#111] rounded-3xl p-6 shadow-lg text-center w-full h-[500px] flex flex-col">
                <img
                  src="/Kulhad.jpeg"
                  alt="Kulhad Tea"
                  className="w-full h-[320px] object-cover rounded-2xl mb-6 border border-[#c5a880]"
                />
                <h3 className="text-2xl font-bold text-white">Kulhad Tea</h3>
                <p className="text-gray-100 mt-3 text-lg">
                  Traditional Indian Tea Served In An Mud Cup, Enhancing Its
                  Rich Taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Highlights Section */}
      <section className="bg-[#161916] py-20 relative -mt-14 overflow-hidden w-full">
        {/* Section Heading */}
        <div className="text-center mb-1">
          <h2 className="text-6xl font-bold text-white mb-4">
            Menu Highlights
          </h2>
          <p className="text-white text-3xl font-semibold">
            A Taste Of Our Most Loved Dishes And Beverages.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex items-end justify-center min-h-[500px] overflow-hidden">
          <div className="flex justify-center items-end gap-10 px-8 relative">
            {/* Show 3 cards at a time with individual sliding */}
            {[-1, 0, 1].map((offset) => {
              const dishIndex =
                (index + offset + dishes.length) % dishes.length;
              const dish = dishes[dishIndex];
              const isCenter = offset === 0;

              return (
                <AnimatePresence key={`position-${offset}`} mode="wait">
                  <motion.div
                    key={`${dish.name}-${dishIndex}-${index}`}
                    className={`bg-[#FAD6B6] text-center flex flex-col relative rounded-3xl shadow-xl ${
                      isCenter
                        ? "w-[400px] h-[450px] p-6"
                        : "w-[300px] h-[350px] p-5 mb-16"
                    }`}
                    initial={{
                      x: offset === -1 ? -400 : 0,
                      opacity: 0,
                      scale: isCenter ? 1 : 0.9,
                    }}
                    animate={{
                      x: 0,
                      opacity: isCenter ? 1 : 0.6,
                      scale: isCenter ? 1 : 0.9,
                    }}
                    exit={{
                      x: offset === -1 ? -400: 0,
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.7, // faster, smooth slide
                      ease: "easeInOut", // normal sliding feel
                    }}
                    whileHover={{
                      opacity: isCenter ? 1 : 0.8,
                      scale: isCenter ? 1.02 : 0.92,
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    {/* Card Image */}
                    <div
                      className={`relative w-full mb-4 rounded-xl ${
                        isCenter ? "h-[250px]" : "h-[190px]"
                      }`}
                    >
                      <img
                        src={dish.img}
                        alt={dish.name}
                        className="w-full h-full border-2 border-black overflow-hidden rounded-2xl object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-grow px-1 pb-2">
                      <h3
                        className={`font-bold text-black mt-2 mb-2 leading-tight ${
                          isCenter ? "text-3xl" : "text-xl"
                        }`}
                      >
                        {dish.name}
                      </h3>
                      <p
                        className={`text-black mt-4 leading-tight ${
                          isCenter ? "text-lg px-1" : "text-sm"
                        }`}
                      >
                        {dish.desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>

          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            className="absolute left-52 top-1/2 -translate-y-1/2 bg-[#ff6b35] hover:bg-[#e55a2e] text-white w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-200 shadow-lg"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            className="absolute right-52 top-1/2 -translate-y-1/2 bg-[#ff6b35] hover:bg-[#e55a2e] text-white w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-200 shadow-lg"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* Experience De Globe Café in Action! Section */}
      <section className="h-full mt-28 bg-[#161916] w-full">
        <div className="w-[95vw] mx-auto flex flex-col items-center h-full">
          <div className="flex flex-col justify-center gap-12 items-center text-white h-full">
            <h1 className="font-bold text-7xl">
              Experience De Globe Café in Action!
            </h1>
            <p className="text-3xl font-semibold text-center">
              A taste of our most loved dishes and beverages.
            </p>
            <p className="text-3xl font-semibold text-center">
              Get a taste of the De Globe Café experience through our trending
              reels! Swipe <br /> through and let the cravings begin!
            </p>
          </div>

          <div className="grid grid-cols-5 gap-6 mt-12 mb-60 w-full max-w-7xl">
            {/* Instagram Reel 1 - Cold Coffee */}
            <div className="aspect-[9/16] bg-gray-800 rounded-xl hover:scale-130 transition-transform duration-400 overflow-hidden group cursor-pointer relative">
              <video
                src="/reel1.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                type="mp4"
                alt="Most Affordable Cold Coffee in Hazratganj"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Instagram Reel 2 - Chicken Samosa */}
            <div className="aspect-[9/16] bg-gray-800 rounded-xl hover:scale-130 transition-transform duration-400 overflow-hidden group cursor-pointer relative">
              <video
                src="/reel2.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                type="mp4"
                alt="Most Affordable Cold Coffee in Hazratganj"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Instagram Reel 3 - Placeholder */}
            <div className="aspect-[9/16] bg-gray-800 rounded-xl hover:scale-130 transition-transform duration-400 overflow-hidden group cursor-pointer relative">
              <video
                src="/reel3.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                type="mp4"
                alt="Most Affordable Cold Coffee in Hazratganj"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Instagram Reel 4 - Dark Placeholder */}
            <div className="aspect-[9/16] bg-gray-800 rounded-xl hover:scale-130 transition-transform duration-400 overflow-hidden group cursor-pointer relative">
              <video
                src="/reel4.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                type="mp4"
                alt="Most Affordable Cold Coffee in Hazratganj"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Instagram Reel 5 - De Globe Cafe Branch */}
            <div className="aspect-[9/16] bg-gray-800 rounded-xl hover:scale-130 transition-transform duration-400 overflow-hidden group cursor-pointer relative">
              <video
                src="/reel5.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                type="mp4"
                alt="Most Affordable Cold Coffee in Hazratganj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience New Standards in Cafe Section */}
      <section className="h-full bg-[#161916] w-full">
        <div className="w-[95vw] mx-auto flex flex-col items-center h-full">
          <div className="flex flex-col justify-center gap-12 items-center text-white h-full">
            <h1 className="font-bold text-7xl text-center">
              Experience the New Standard in <br />
              Café Culture
            </h1>
            <p className="text-3xl font-semibold text-center">
              Crafted to deliver unforgettable experiences through inspired
              flavors, warm ambiance, <br /> and exceptional service.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-20">
          <div className="w-[95vw] grid grid-cols-4 justify-items-center">
            {/* img 1 */}
            <img
              src="https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0002-e1746640327834-1024x891.jpg"
              className="hexagon overflow-hidden object-cover h-90 w-90"
              alt=""
            />

            {/* img 2 */}
            <img
              src="https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0000-1024x768.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />

            {/* img 3 */}
            <img
              src="https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0022-1024x768.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />

            {/* img 4 */}
            <img
              src="	https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0019-768x1024.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />
          </div>

          <div className="w-[72vw] mx-auto grid grid-cols-3 justify-items-center -mb-16 -mt-16">
            {/* img 1 */}
            <img
              src="https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0016-1024x768.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />

            {/* img 2 */}
            <img
              src="	https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0015-768x1024.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />

            {/* img 3 */}
            <img
              src="	https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0014-1024x768.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />
          </div>

          <div className="w-[95vw] mx-auto grid grid-cols-4 justify-items-center">
            {/* img 1 */}
            <img
              src="	https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0013-1024x768.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />

            {/* img 2 */}
            <img
              src="https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0012-1024x768.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />

            {/* img 3 */}
            <img
              src="	https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0004-1024x768.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />

            {/* img 4 */}
            <img
              src="https://deglobecafe.in/wp-content/uploads/2025/05/IMG-20250504-WA0009-1024x768.jpg"
              className="hexagon object-cover overflow-hidden h-90 w-90"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
