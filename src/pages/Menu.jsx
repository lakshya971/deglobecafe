import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Scrollimageburger from "../components/Scrollimageburger";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Menu = () => {
  // Refs for new animations
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });

  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, threshold: 0.2 });

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

  // Navigation functions
  const navigate = useNavigate();
  function handleExploreMenu() {
    navigate("/Menu");
  }

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? dishes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === dishes.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Landing Page */}
      <div className="w-[95vw] flex justify-center items-center bg-[#F8d4ba] h-[90vh] rounded-4xl">
        <div className="flex w-[88vw] ml-8 justify-center overflow-hidden absolute items-center">
          {/* left text of landing page */}
          <div className="flex flex-col justify-start -mt-9 items-start w-2/3 ">
            <p className="text-md font-bold mb-2">The De Globe Cafe</p>
            <h1 className="font-sans -mt-1 font-bold tracking-normal text-8xl leading-24 mb-7">
              Indulge in the Best Flavors of Lucknow
            </h1>
            <p className="text-xl tracking-tight font-serif leading-6">
              From aromatic teas to sizzling snacks, every bite and sip is
              crafted to perfection!
            </p>
            <button
              onClick={handleExploreMenu}
              className="bg-black px-10 py-3 hover:bg-orange-400 duration-500 font-semibold mt-6 text-white rounded-lg"
            >
              View Full Menu
            </button>
          </div>

          {/* right image of landing page */}
          <div className="w-1/2 relative ">
            <Scrollimageburger />
          </div>
        </div>
      </div>

      {/* Menu Highlights Section */}
      <section className="bg-[#161916] py-20 relative mt-14 overflow-hidden w-full">
        {/* Section Heading */}
        <div className="text-center mb-1">
          <h2 className="text-6xl font-bold text-white mb-4">
            Cravings? We’ve Got You Covered!
          </h2>
          <p className="text-white text-3xl font-semibold">
            From sizzling burgers to creamy cold coffee, explore the top picks
            from our kitchen.
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
                      x: offset === -1 ? -400 : 0,
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

      <section
        ref={storyRef}
        className="bg-[#161916] h-full mb-14 mt-14 overflow-hidden w-full"
      >
        <div className="flex bg-[#F8d4ba] flex-col items-center mx-auto rounded-4xl justify-center h-auto w-[90vw]">
          <div className="text-center text-black h-[50vh] w-[85vw]">
            <h1 className="border-b-2 font-bold text-6xl py-14 border-black">
              Explore Our Menu
            </h1>
            <p className="text-2xl tracking-tight font-serif leading-6 mt-14">
              Crafted with a list of the most delicious Indian dishes, prepared
              with love and a high passion for cooking.
            </p>
          </div>

          {/* Menu Items Grid */}
          <div className="w-[85vw] mt-8 mb-8">
            {/* Tea / Coffee Section */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={
                isStoryInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">☕</span>
                <h2 className="text-4xl font-bold text-black">Tea / Coffee</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>

              <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Tea / Coffee */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Chai Kulhad
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Traditional Indian tea served in an earthen kulhad,
                        giving it a rich, smoky aroma.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 18
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Chai
                      </h3>
                      <p className="text-gray-700 text-lg">
                        A strong, aromatic tea infused with Indian spices and
                        served hot.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 16
                    </span>
                  </div>
                </div>

                {/* Right Column - Coffee */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Coffee
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Freshly brewed coffee with a bold aroma and smooth
                        taste.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 25
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Cold Coffee
                      </h3>
                      <p className="text-gray-700 text-lg">
                        A chilled, creamy coffee shake topped with froth.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 60
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Snacks Section */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={
                isStoryInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🥨</span>
                <h2 className="text-4xl font-bold text-black">Snacks</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>

              <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Snacks */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Aloo Samosa
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Crispy golden samosas filled with spiced mashed
                        potatoes.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 15
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Chicken Samosa
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Flaky samosas filled with seasoned minced chicken.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 26
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Sandwich (Grilled/Regular)
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Soft bread with fresh veggies, cheese, and flavorful
                        spreads.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 30/40
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Bun Makkhan
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Soft bun toasted with butter, a perfect companion to
                        chai.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 30
                    </span>
                  </div>
                </div>

                {/* Right Column - More Snacks */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Aloo Patties
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Flaky and crispy puff pastry filled with spiced mashed
                        potatoes.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 15
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Paneer Patties
                      </h3>
                      <p className="text-gray-700 text-lg">
                        A delicious puff pastry filled with a mildly spiced
                        paneer mixture.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 20
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Lassi
                      </h3>
                      <p className="text-gray-700 text-lg">
                        A refreshing yogurt-based drink, thick and creamy.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 45
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Milk Badam
                      </h3>
                      <p className="text-gray-700 text-lg">
                        Warm, sweet almond milk infused with saffron and
                        cardamom.
                      </p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">
                      ₹ 40
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Burgers Section */}
            <motion.div 
              initial={{ x: 200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🍔</span>
                <h2 className="text-4xl font-bold text-black">Burgers</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Veggie Cream Burger</h3>
                      <p className="text-gray-700 text-lg">A creamy veggie patty with lettuce and special sauces.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 40</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Burger</h3>
                      <p className="text-gray-700 text-lg">A crispy paneer patty layered with cheese and fresh veggies.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 45</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Veggie Cheese Burger</h3>
                      <p className="text-gray-700 text-lg">A cheesy delight with fresh veggies in a sesame bun.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 60</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Burger</h3>
                      <p className="text-gray-700 text-lg">A grilled chicken patty with fresh greens and zesty sauces.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 50</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Cheese Burger</h3>
                      <p className="text-gray-700 text-lg">Juicy chicken patty smothered with cheese and veggies.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 70</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Maggi Section */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🍜</span>
                <h2 className="text-4xl font-bold text-black">Maggi</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Plain Maggi</h3>
                      <p className="text-gray-700 text-lg">Classic Maggi noodles with a nostalgic taste.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 40</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Schezwan Masala Maggi</h3>
                      <p className="text-gray-700 text-lg">Spicy and tangy Schezwan-style Maggi.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 50</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Veg Overload Maggi</h3>
                      <p className="text-gray-700 text-lg">Maggi packed with fresh veggies and masala.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 55</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Butter Veg Maggi</h3>
                      <p className="text-gray-700 text-lg">Maggi cooked in butter with fresh-cut vegetables.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 60</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Cheese Veg Maggi</h3>
                      <p className="text-gray-700 text-lg">Creamy Maggi with melted cheese for extra indulgence.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 60</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Maggi</h3>
                      <p className="text-gray-700 text-lg">Maggi mixed with flavorful paneer cubes.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 70</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Cheese Maggi</h3>
                      <p className="text-gray-700 text-lg">Maggi loaded with chicken chunks and cheese.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 80</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Maggi</h3>
                      <p className="text-gray-700 text-lg">A spicy chicken-loaded Maggi delight.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 70</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soup Section */}
            <motion.div 
              initial={{ x: 200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🍲</span>
                <h2 className="text-4xl font-bold text-black">Soup</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Veg Soup</h3>
                      <p className="text-gray-700 text-lg">A nutritious and flavorful vegetable soup.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 85</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Soup</h3>
                      <p className="text-gray-700 text-lg">A warm, hearty chicken broth with spices.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 130</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Hot & Sour Soup Veg / Non Veg</h3>
                      <p className="text-gray-700 text-lg">A bold and tangy soup with fresh veggies or chicken, infused with soy, vinegar, and aromatic spices.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 70/110</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Manchow Soup Veg / Non Veg</h3>
                      <p className="text-gray-700 text-lg">A thick, savory delight topped with crispy noodles, available in veg or chicken options.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 80/120</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fried Rice Section */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
              className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🍚</span>
                <h2 className="text-4xl font-bold text-black">Fried Rice</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Fried Rice</h3>
                      <p className="text-gray-700 text-lg">Classic stir-fried rice with mild seasoning and veggies.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 70</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Fried Rice</h3>
                      <p className="text-gray-700 text-lg">Aromatic rice tossed with paneer cubes and spices.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 100</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Schezwan Fried Rice</h3>
                      <p className="text-gray-700 text-lg">Spicy and flavorful rice with Schezwan sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 85</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chilli Garlic Fried Rice</h3>
                      <p className="text-gray-700 text-lg">Zesty rice infused with garlic and chili flavors.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 85</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Egg Fried Rice</h3>
                      <p className="text-gray-700 text-lg">Stir-fried rice with scrambled eggs and soy sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 90</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Fried Rice</h3>
                      <p className="text-gray-700 text-lg">Fragrant rice tossed with juicy chicken pieces.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 100</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Schezwan Fried Rice</h3>
                      <p className="text-gray-700 text-lg">Fiery Schezwan rice with tender chicken.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 125</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Chilli Garlic Fried Rice</h3>
                      <p className="text-gray-700 text-lg">Spicy, garlicky fried rice with chicken chunks.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 125</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Momos Section */}
            <motion.div 
              initial={{ x: 200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
              className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🥟</span>
                <h2 className="text-4xl font-bold text-black">Momos</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Veg Momos Steam</h3>
                      <p className="text-gray-700 text-lg">Soft, steamed dumplings filled with flavorful veggies. (6 pcs)</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 60</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Momos Steam</h3>
                      <p className="text-gray-700 text-lg">Juicy steamed dumplings packed with spiced chicken. (6 pcs)</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 80</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Momos Steam</h3>
                      <p className="text-gray-700 text-lg">Steamed dumplings filled with soft paneer and herbs. (6 pcs)</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 100</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Veg Momos Fry</h3>
                      <p className="text-gray-700 text-lg">Crispy fried dumplings stuffed with seasoned vegetables. (6 pcs)</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 80</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Momos Fry</h3>
                      <p className="text-gray-700 text-lg">Golden fried dumplings loaded with flavorful chicken. (6 pcs)</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 100</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Momos Fry</h3>
                      <p className="text-gray-700 text-lg">Crispy fried dumplings with a delicious paneer filling. (6 pcs)</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 120</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chinese Starters (Veg) Section */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
              className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🥡</span>
                <h2 className="text-4xl font-bold text-black">Chinese Starters (Veg)</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Veg Spring Roll</h3>
                      <p className="text-gray-700 text-lg">Crispy rolls filled with a mix of fresh veggies and spices.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 70</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chilli Potato</h3>
                      <p className="text-gray-700 text-lg">Fried potato fingers tossed in spicy and tangy sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 70</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Honey Chilly Potato</h3>
                      <p className="text-gray-700 text-lg">Crispy potatoes coated in a sweet and spicy honey chili glaze.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 80</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Veg Manchurian (Gravy)</h3>
                      <p className="text-gray-700 text-lg">Juicy vegetable balls cooked in a rich Manchurian sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 90</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer 65</h3>
                      <p className="text-gray-700 text-lg">Deep-fried spicy paneer cubes infused with South Indian flavors.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 140</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Manchurian (Dry)</h3>
                      <p className="text-gray-700 text-lg">Crispy paneer balls tossed in a flavorful Manchurian sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 130</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Manchurian (Gravy)</h3>
                      <p className="text-gray-700 text-lg">Soft paneer balls in a thick and spicy Manchurian gravy.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 120</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Chilly (Dry)</h3>
                      <p className="text-gray-700 text-lg">Stir-fried paneer cubes coated in a spicy chili sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 130</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Chilly (Gravy)</h3>
                      <p className="text-gray-700 text-lg">Soft paneer cooked in a hot and flavorful chili sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 120</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Paneer Salt & Paper</h3>
                      <p className="text-gray-700 text-lg">Crispy paneer tossed with salt, pepper, and aromatic spices.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 140</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chinese Starters (Non-Veg) Section */}
            <motion.div 
              initial={{ x: 200, opacity: 0 }}
              animate={isStoryInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.7 }}
              className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🥩</span>
                <h2 className="text-4xl font-bold text-black">Chinese Starters (Non-Veg)</h2>
              </div>
              <div className="border-b-2 border-orange-500 mb-8"></div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Spring Roll</h3>
                      <p className="text-gray-700 text-lg">Crispy rolls filled with seasoned chicken and veggies.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 90</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Chilli (Dry)</h3>
                      <p className="text-gray-700 text-lg">Spicy and tangy stir-fried chicken with bell peppers.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 130</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Chilli (Gravy)</h3>
                      <p className="text-gray-700 text-lg">Tender chicken cooked in a flavorful chili-based sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 120</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Salt & Paper</h3>
                      <p className="text-gray-700 text-lg">Crispy chicken tossed with salt, pepper, and aromatic spices.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 145</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Honey Lemon Chicken</h3>
                      <p className="text-gray-700 text-lg">Sweet and tangy chicken glazed with honey and lemon sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 190</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Schezwan Pepper</h3>
                      <p className="text-gray-700 text-lg">Fiery chicken dish infused with bold Schezwan flavors.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 180</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Manchurian (Dry)</h3>
                      <p className="text-gray-700 text-lg">Juicy chicken balls tossed in a spicy Manchurian sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 130</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Manchurian (Gravy)</h3>
                      <p className="text-gray-700 text-lg">Soft chicken balls cooked in a thick and spicy Manchurian gravy.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 120</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken 65</h3>
                      <p className="text-gray-700 text-lg">Deep-fried spicy chicken bites with South Indian flavors.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 145</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">Chicken Lollypop (5 pcs)</h3>
                      <p className="text-gray-700 text-lg">Spicy and crispy chicken drumettes served with tangy sauce.</p>
                    </div>
                    <span className="text-red-500 text-2xl font-bold ml-4">₹ 250</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="border-b-2 w-full border-orange-500"></div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="bg-[#161916] py-20 relative -mt-14 overflow-hidden w-full">
        {/* Section Heading */}
        <div className="text-center mb-1">
          <h2 className="text-6xl font-bold text-white mb-4">
            Bestsellers You’ll Love!
          </h2>
          <p className="text-white w-[80vw] mx-auto mb-12 text-3xl font-semibold">
           Discover our most-loved dishes, handpicked by our customers! From sizzling flavors to comforting classics, these top picks keep everyone coming back for more. 🍽️✨
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
                      x: offset === -1 ? -400 : 0,
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

    </main>
  );
};

export default Menu;
