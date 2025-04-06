import React, { useState } from "react";
import { motion } from "framer-motion";
import Border from "../assests/border4.webp";
import Logo2 from "../assests/logo4.png";

const HomePage = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    if (!isZoomed) setIsZoomed(true); // Trigger animation only once
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Border Image (Bottom Layer) */}
      <img
        src={Border}
        alt="Border Background"
        className="w-full object-cover z-0 relative sm:h-[1000px] h-[400px]"
      />

      {/* Logo Image (Zoom + Shake Effect) */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.img
          src={Logo2}
          alt="Logo"
          className="max-w-[60%] sm:max-w-[50%] z-10 cursor-pointer"
          initial={{ scale: 1 }}
          animate={
            isZoomed
              ? {
                  scale: 1.5, // Zoom effect
                  x: [-10, 10, -10, 10, 0], // Shake effect
                }
              : {}
          }
          transition={{
            duration: 2.5, // Slower zoom and shake
            ease: "easeInOut",
          }}
          onClick={handleZoom}
        />
      </div>
    </div>
  );
};

export default HomePage;
