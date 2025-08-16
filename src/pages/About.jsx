import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [index, setIndex] = useState(0);

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

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-[40vh] w-full bg-[#161916]">
        <div className="flex flex-col items-center w-[90vw] rounded-2xl h-[35vh] justify-center bg-[#efd3ba]">
          <h1 className="text-5xl font-bold mb-2 text-[#161916]">
            About De Globe Café
          </h1>
          <h2 className="text-2xl font-medium mt-2 font-serif text-[#161916]">
            Brewing Stories, One Cup at a Time ☕
          </h2>
        </div>
      </div>

      <section className="w-full h-[90vh] bg-[#161916] flex items-center justify-center">
        <div className="flex flex-col w-[83vw] h-full mt-32 justify-start  text-white">
          <h3 className="text-4xl font-semibold mb-4 text-left border-b-1 border-white py-4">
            From Adversity to Legacy: The De Globe Cafe Story
          </h3>
          <div className="text-xl text-gray-300 font-serif flex flex-col gap-4">
            <p>
              In 2019, De Globe Cafe opened its doors in the heart of
              Hazratganj, Lucknow, replacing a Mughal-theme restaurant with a
              fresh, global-inspired <br /> café experience. The response was
              heartwarming—guests loved our warm ambiance, handcrafted
              beverages, and thoughtfully curated menu. The <br /> future looked
              bright.
            </p>
            <p>
              But then, the Covid-19 pandemic changed everything. India went
              into lockdown. Streets were empty, businesses shut down overnight,
              and <br /> uncertainty loomed. Many cafes and restaurants were
              forced to close permanently, but we made a decision—we would not
              let our team struggle.
            </p>
            <p>
              With no revenue coming in, we still ensured timely rent payments
              and full salaries for our staff, because they were our family. It
              was tough. It <br /> was uncertain. But we believed in our people
              and our passion. When the world reopened, our community stood by
              us. Slowly, but steadily, we rebuilt <br /> what we had started.
            </p>
            <p>
              Today, De Globe Cafe is not just a café—it’s a story of
              resilience, hope, and passion. Our coffee and tea are now among
              the most loved in Hazratganj, a testament to the journey we
              undertook. Every sip you take here is brewed with the struggles,
              dreams, and unwavering spirit that <br /> kept us going.
            </p>
            <p>
              Welcome to De Globe Cafe—a place where every cup tells a story.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-[90vh] bg-[#161916] mt-4 flex items-center justify-center">
        <div className="flex justify-center items-center w-[85vw] h-full text-white">
          <div className="w-1/2 h-full flex flex-col justify-start items-start gap-4">
            <h1 className="text-4xl font-semibold mb-4 text-left border-b-1 border-white py-4">
              What Makes Us Special? 🌟
            </h1>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Signature Brews</h1>
              <p className="text-xl font-serif">
                From our famous Chai Kulhad to perfectly brewed Cold Coffee,{" "}
                <br /> every sip is crafted to perfection.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Unmatched Quality</h1>
              <p className="text-xl font-serif">
                We use premium ingredients, ensuring a taste that lingers long
                after your last sip.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">A Cozy Escape</h1>
              <p className="text-xl font-serif">
                Whether it’s a quick chai break or hours of conversation, our
                café is designed for comfort.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Customer First Approach</h1>
              <p className="text-xl font-serif">
                Your experience matters. We serve with passion, ensuring every
                visit feels special.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              src="/deglobe-about.png"
              className="overflow-hidden rounded-full object-cover h-[400px] w-[400px]"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="bg-[#161916] py-20 relative -mt-14 overflow-hidden w-full">
        {/* Section Heading */}
        <div className="text-center mb-1">
          <h2 className="text-6xl font-bold text-white mb-4">
            A Menu That Speaks for Itself
          </h2>
          <p className="text-white text-3xl font-semibold">
            Indulge in a diverse menu featuring:
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

      <div className="flex items-center justify-center w-full h-[20vh] bg-[#161916]">
        <button
          onClick={handleExploreMenu}
          className="bg-black px-10 py-3 text-center hover:bg-orange-400 duration-500 font-semibold mt-6 text-white rounded-lg"
        >
          View Full Menu
        </button>
      </div>

      <section claasName="flex flex-col items-center justify-center w-full h-[90vh] bg-[#161916]">
        <div className="flex flex-col items-center justify-center space-y-4 w-[85vw] h-full mt-12 mx-auto text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Visit Us at Our Two Locations
          </h1>
          <p className="text-center text-2xl font-medium font-serif">
            Come, Be a Part of Our Story!
          </p>
          <p className="text-center text-2xl font-medium font-serif">
            Whether you’re here for a quick chai break or an evening of
            conversations over coffee, <br />
            De Globe Café welcomes you with open arms.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-10 justify-center w-[85vw] h-full mt-12 mx-auto">
          <div className="flex flex-col items-center justify-center bg-[#FAD7B7] space-y-4 w-1/2 rounded-3xl mx-auto h-[40vh]">
            <span className="text-center">🏢</span>
            <h1 className="text-3xl font-semibold">De Globe Café</h1>
            <p className="text-center font-serif text-2xl font-normal">
              Hazratganj (Near LIC Office)
            </p>
            <p className="text-center font-serif text-2xl font-normal">
              Maqbara Rd, opposite LIC Office, Bank of Baroda, <br />{" "}
              Hazratganj, Lucknow, Uttar Pradesh 226001
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#FAD7B7] space-y-4 w-1/2 rounded-3xl mx-auto h-[40vh]">
            <span className="text-center">🏢</span>
            <h1 className="text-3xl font-semibold">De Globe Café</h1>
            <p className="text-center font-serif text-2xl font-normal">
              Hazratganj (Behind Prince Market)
            </p>
            <p className="text-center font-serif text-2xl font-normal">
              Chitrhar Building, behind Prince Market, Nawal Kishor Road,
              Hazratganj, Lucknow, Uttar Pradesh 226001
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
