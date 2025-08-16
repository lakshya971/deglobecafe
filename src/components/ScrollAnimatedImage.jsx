// src/components/FloatingCoffeeCup.jsx

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedImage = () => {
  // useScroll will track the viewport's scroll position.
  // scrollYProgress will be a value from 0 (top of page) to 1 (bottom of page).
  const { scrollYProgress } = useScroll();

  // We use useTransform to map the scroll progress to other values.
  // As scrollYProgress goes from 0 to 1:
  
  // 1. The 'y' position will go from 0 to -700px (moving it up the screen).
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  // 2. The 'scale' will go from 1 to 1.8 (making it larger on the z-axis).
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.1]);

  return (
    // This motion.div is positioned relative to the viewport.
    <motion.div
      // We apply the scroll-driven transformations directly to the style prop.
      style={{ y, scale }}
      
      // This is the initial "load-in" animation.
      // It starts transparent and 100px off-screen to the bottom-right.
      initial={{ opacity: 0, x: 90, y: 90 }}
      // It animates to be fully visible at its starting position.
      animate={{ opacity: 1, x: 0, y: 0 }}
      // The transition controls the feel of the load-in animation.
      transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
      className=" bottom-8 right-8 z-10 overflow-hidden"
    >
      <img 
        src="/Coffee_cup.png" 
        alt="A decorative coffee cup" 
        className="h-auto max-w-[1100px]" // Adjust width as needed
      />
    </motion.div>
  );
};

export default ScrollAnimatedImage;